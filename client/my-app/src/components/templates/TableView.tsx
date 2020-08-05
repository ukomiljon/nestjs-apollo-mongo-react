import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fatchData } from '../../api/api'
import ReduxStorage from '../../reducer/dispatch'

export default function TableView() {

    const datasources = useSelector((state: any) => state.datasources)
    const dispatch = useDispatch()

    useEffect(() => {
        fatchData('datasources').then(data => ReduxStorage(data, dispatch))
    }, [])


    return (
        <div>
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
