import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Button, Col, Form, Row, Table } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import { fatchData } from '../api/api';
import ReduxStorage from '../reducer/dispatch';


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

        axios.post('http://localhost:4000/datasources', datasourceState)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    const onChangeInput = (e: any) => {

        setDatasourceState({ ...datasourceState, [e.target.id]: e.target.value })
    }

    return (
        <div>
            <p> Datasources {datasources.length}</p>

            <Form>

                {datasourceFields.map((field: any) => {

                    let inputType = "text"
                    if (field == "Password") inputType = "password"

                    return <Form.Group as={Row}  >
                        <Form.Label column sm="2">
                            {field}:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type={inputType} placeholder={"Enter " + field} onChange={onChangeInput} id={field} />
                        </Col>
                    </Form.Group>
                })
                }

                <Button variant="primary" type="submit" onClick={addDatasource}>
                    Submit
             </Button>
            </Form>


            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Datasource name</th>
                        <th>Connection</th>
                        <th>Port</th>
                        <th>User</th>
                        <th>Password</th>
                        <th>Database Name</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        datasources.map((datasource: any, index: number) =>
                            <tr key={datasource._id}>
                                <td>{index + 1}</td>
                                <td>{datasource.name}</td>
                                <td>{datasource.connection}</td>
                                <td>{datasource.port}</td>
                                <td>{datasource.user}</td>
                                <td>{datasource.password}</td>
                                <td>{datasource.databaseName}</td>
                            </tr>
                        )
                    }


                </tbody>
            </Table>


        </div>
    )
}
