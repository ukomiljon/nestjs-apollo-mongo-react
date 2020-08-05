import React from 'react'
import InputForm from './templates/InputForm'
import TableView from './templates/TableView'

export default function Reports() {

    const fieldNames = [
        "title", 
        "type" 
    ]

    return (
        <div>
            <InputForm controlName={"reports"} fieldNames={fieldNames} />
            <TableView />
        </div>
    )
}
