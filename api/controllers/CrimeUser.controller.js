const CrimeUser = require("../models/Crime.model");

exports.list = async (req, res, next) => {
    try {
        let query = {}

        if(req.query.reported_date) {
            query = {
                ...query,
                reportedDate: {
                    $gte: new Date(req.query.reported_date)
                }
            }
        }
        if(req.query.offence_count) {
            query = {
                ...query, 
                offencecount: parseInt(req.query.offence_count)
            }
        }

        await CrimeUser.aggregate([
            {
                $match: { ...query }
            },
            {
                $group: {
                    _id: "$suburbIncident",
                    suburb: {
                        $push: {
                            _id: "$_id",
                            reportedDate: "$reportedDate",
                            suburbIncident: "$suburbIncident",
                            postcodeIncident: "$postcodeIncident",
                            offenceLevel1: "$offenceLevel1",
                            offenceLevel2: "$offenceLevel2",
                            offenceLevel3: "$offenceLevel3",
                            offencecount: "$offencecount"
                        }
                    }
                }
            }])
            .exec((err, records) => {
                if(err) res.status(400).json({ data: [], message: "Something went wrong!"})

                return res.status(200).json({ data: records, message: "" })
            })
    } catch(err) {
        throw new Error(err)
    }
}

exports.importRecords = async (req, res, next) => {
    try {
        if(req.body.records) {
            const { records } = req.body;
            const data = JSON.parse(records);
            if(data && data.length > 0) {
                data.forEach(async (el) => {
                    const insertData = {
                        reportedDate: el.reported_date,
                        suburbIncident: el.suburb___incident,
                        postcodeIncident: el.postcode___incident,
                        offenceLevel1: el.offence_level_1_description,
                        offenceLevel2: el.offence_level_2_description,
                        offenceLevel3: el.offence_level_3_description,
                        offencecount: el.offence_count
                    }
                    await CrimeUser.create({ ...insertData }, (err, newRecord) => console.log(newRecord));
                })
            }

            return res.status(200).json({ data: {}, message: "Import CSV successfully." })
        }
    } catch(err) {
        throw new Error(err)
    }
}