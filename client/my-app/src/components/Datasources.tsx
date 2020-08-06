import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Button, Col, Form, Row, Table } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import { fatchData, postData } from '../api/api';
import ReduxStorage from '../reducer/dispatch';
import InputForm from './templates/InputForm';
import TableView from './templates/TableView';


export default function Datasources() {

    const fieldNames = [
        "name",
        "connection",
        "port",
        "user",
        "password",
        "databaseName"
    ]

    const controllerName = "datasources"
    const datasources = useSelector((state: any) => state.datasources)

    return (
        <div>
            <InputForm controllerName={controllerName} fieldNames={fieldNames}   />
            <TableView controllerName={controllerName} fieldNames={fieldNames} data={datasources} />
        </div>
    )
}
