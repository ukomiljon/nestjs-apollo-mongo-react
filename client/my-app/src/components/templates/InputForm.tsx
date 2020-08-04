import React from 'react'

export default function InputForm() {
    return (
        <div>
            
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
        </div>
    )
}
