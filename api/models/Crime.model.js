const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CrimeUserSchema = {
    reportedDate: { type: Schema.Types.Date },
    suburbIncident: { type: Schema.Types.String },
    postcodeIncident: { type: Schema.Types.String },
    offenceLevel1: { type: Schema.Types.String },
    offenceLevel2: { type: Schema.Types.String },
    offenceLevel3: { type: Schema.Types.String },
    offencecount: { type: Schema.Types.Number }
}

const CrimeUserModal = mongoose.model('CrimeUser', CrimeUserSchema)

module.exports = CrimeUserModal;