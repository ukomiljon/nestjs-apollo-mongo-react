import React from 'react'

export default function TableView() {
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
