import React from 'react';
import CSVReader from 'react-csv-reader'
import { CSV_IMPORT } from '../../constants/api';
import APIService from '../../utils/APIService';

const FileUpload = () => {
    const papaparseOptions = {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        transformHeader: header =>
            header
                .toLowerCase()
                .replace(/\W/g, '_')
    }

    const handleForce = async(data, fileInfo) => {
        console.log("test", data, fileInfo)
        const res = await APIService.post({ url: CSV_IMPORT, payload: {records: JSON.stringify(data)} });
        console.log("test", res)
    }

    return (
        <CSVReader
            cssClass="csv-reader-input"
            label="Select CSV"
            onFileLoaded={handleForce}
            parserOptions={papaparseOptions}
            inputId="ObiWan"
            inputName="ObiWan"
            inputStyle={{ color: 'red' }}
        />
    )
}

export default FileUpload