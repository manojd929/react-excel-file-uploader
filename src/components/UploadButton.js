import React from 'react'
import XLSX from 'xlsx'

import Input from '@material-ui/core/Input';

const UploadButton = ({ onFileupload, onError }) => {

    const validateUploadedData = (sheetArray) => {
        const headerRow = sheetArray[0];
        const dataRows = sheetArray.slice(1)
        onFileupload(headerRow, dataRows)
    }

    const handleFile = (e) => {
        try {
            e.preventDefault();
            const file = e.target.files[0]
            const fileReader = new FileReader()

            fileReader.onload = function(_e) {
                var data = new Uint8Array(_e.target.result);
                let readedData = XLSX.read(data, {type: 'array'});
                const wsname = readedData.SheetNames[0];
                const ws = readedData.Sheets[wsname];
        
                /* Convert array to json*/
                const dataParse = XLSX.utils.sheet_to_json(ws, {header:1});
                validateUploadedData(dataParse);
            };

            fileReader.readAsArrayBuffer(file);
        } catch (err) {
            console.error(err);
            onError()
        }
    }

    return (
        <Input
            id='file-input'
            name='excel-file'
            type="file"
            accept=".xlsx, .xls"
            onChange={(e) => {
                handleFile(e)
            }}
        />
    )
}

export default UploadButton