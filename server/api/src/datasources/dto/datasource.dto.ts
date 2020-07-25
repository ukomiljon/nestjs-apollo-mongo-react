
import * as validator from 'class-validator'

export class DatasourceDto {
    @validator.IsString()
    @validator.IsDefined() 
    @validator.IsNotEmpty()
    name: string

    @validator.IsString()
    @validator.IsDefined() 
    @validator.IsNotEmpty()
    connection: string

    @validator.IsNumber()
    @validator.IsDefined() 
    @validator.IsNotEmpty()
    port: number

    @validator.IsString()
    @validator.IsDefined() 
    @validator.IsNotEmpty()
    user: string

    @validator.IsString()
    @validator.IsDefined()  
    @validator.IsNotEmpty()
    password: string

    @validator.IsString()
    @validator.IsDefined() 
    @validator.IsNotEmpty()
    databaseName: string
}

export class DatasourceIdDto {
    @validator.IsString()
    @validator.IsDefined() 
    @validator.IsNotEmpty()
    id: string
}