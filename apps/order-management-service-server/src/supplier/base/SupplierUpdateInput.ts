/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { OrderUpdateManyWithoutSuppliersInput } from "./OrderUpdateManyWithoutSuppliersInput";
import { Type } from "class-transformer";

@InputType()
class SupplierUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  contactEmail?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  contactName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  contactPhone?: string | null;

  @ApiProperty({
    required: false,
    type: () => OrderUpdateManyWithoutSuppliersInput,
  })
  @ValidateNested()
  @Type(() => OrderUpdateManyWithoutSuppliersInput)
  @IsOptional()
  @Field(() => OrderUpdateManyWithoutSuppliersInput, {
    nullable: true,
  })
  orders?: OrderUpdateManyWithoutSuppliersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  supplierName?: string | null;
}

export { SupplierUpdateInput as SupplierUpdateInput };
