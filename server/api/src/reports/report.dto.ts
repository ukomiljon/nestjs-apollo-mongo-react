
import * as validator from 'class-validator'

export class ReportDto{  
    
    @validator.IsString() 
    @validator.IsNotEmpty()
    @validator.IsDefined()
    title: string

    @validator.IsString() 
    @validator.IsNotEmpty()
    @validator.IsDefined()
    type: string
}