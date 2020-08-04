
import * as validator from 'class-validator'

export class DatasourceDto {

    @validator.IsString()
    @validator.IsNotEmpty()
    @validator.IsDefined()
    name: string

    @validator.IsString()
    @validator.IsNotEmpty()
    @validator.IsDefined()
    connection: string

    @validator.IsString()
    @validator.IsNotEmpty()
    @validator.IsDefined()
    port: string

    @validator.IsString()
    @validator.IsNotEmpty()
    @validator.IsDefined()
    user: string

    @validator.IsString()
    @validator.IsNotEmpty()
    @validator.IsDefined()
    password: string

    @validator.IsString()
    @validator.IsNotEmpty()
    @validator.IsDefined()
    databaseName: string

    // @validator.IsDateString()
    // @validator.IsDate()
    // @validator.IsNotEmpty()
    // @validator.IsDefined()
    // createdDate: Date

    // @validator.IsDate()
    // @validator.IsNotEmpty()
    // @validator.IsDefined()
    // modifiedDate: Date 
}