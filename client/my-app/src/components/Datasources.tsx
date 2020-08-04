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

    const [datasourceState, setDatasourceState] = useState({})

    const datasources = useSelector((state: any) => state.datasources)
    const dispatch = useDispatch()

    useEffect(() => {
        fatchData('datasources').then(data => ReduxStorage(data, dispatch))
    }, [])


    const datasourceFields = [
        "name",
        "connection",
        "port",
        "user",
        "password",
        "databaseName"
    ]


    const addDatasource = (e: any) => {
        postData("datasources", datasourceState)
    }

    const onChangeInput = (e: any) => {
        setDatasourceState({ ...datasourceState, [e.target.id]: e.target.value })
    }

    return (
        <div> 
            <InputForm   />
            <TableView  />
        </div>
    )
}
