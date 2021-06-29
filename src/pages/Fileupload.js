import React, { useState } from 'react'

// import components
import UploadButton from '../components/UploadButton'
import DataTable from '../components/DataTable'
import ErrorModal from '../components/ErrorModal'

const Fileupload = () => {
    const [openErrorModal, setOpenErrorModal] = useState(false)
    const [headerRow, setHeaderRow] = useState([])
    const [dataRows, setDataRows] = useState([])

    const onCloseErrorModal = () => {
        setOpenErrorModal(false)
    }

    const onFileupload = (_headerRow, _dataRows) => {
        console.log(_headerRow)
        console.log(_dataRows)
        setHeaderRow(_headerRow)
        setDataRows(_dataRows)
    }

    const onError = () => {
        setOpenErrorModal(true)
    }

    if (openErrorModal) {
        return (
            <ErrorModal open={openErrorModal} handleClose={onCloseErrorModal} />
        )
    }

    return (
        <React.Fragment>
            <div className="container-button">
                <UploadButton onFileupload={onFileupload} onError={onError} />
            </div>
            <div className="container-table">
                <DataTable headerRow={headerRow} dataRows={dataRows} />
            </div>
        </React.Fragment>
    )
}

export default Fileupload