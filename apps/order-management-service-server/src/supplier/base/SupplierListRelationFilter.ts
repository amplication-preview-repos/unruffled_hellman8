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
import { SupplierWhereInput } from "./SupplierWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SupplierListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SupplierWhereInput,
  })
  @ValidateNested()
  @Type(() => SupplierWhereInput)
  @IsOptional()
  @Field(() => SupplierWhereInput, {
    nullable: true,
  })
  every?: SupplierWhereInput;

  @ApiProperty({
    required: false,
    type: () => SupplierWhereInput,
  })
  @ValidateNested()
  @Type(() => SupplierWhereInput)
  @IsOptional()
  @Field(() => SupplierWhereInput, {
    nullable: true,
  })
  some?: SupplierWhereInput;

  @ApiProperty({
    required: false,
    type: () => SupplierWhereInput,
  })
  @ValidateNested()
  @Type(() => SupplierWhereInput)
  @IsOptional()
  @Field(() => SupplierWhereInput, {
    nullable: true,
  })
  none?: SupplierWhereInput;
}
export { SupplierListRelationFilter as SupplierListRelationFilter };