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
import { EInvoiceCreateNestedManyWithoutOrdersInput } from "./EInvoiceCreateNestedManyWithoutOrdersInput";

import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  MaxLength,
  IsEnum,
  IsNumber,
  Min,
  Max,
} from "class-validator";

import { Type } from "class-transformer";
import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";
import { EnumOrderStatus } from "./EnumOrderStatus";
import { SupplierWhereUniqueInput } from "../../supplier/base/SupplierWhereUniqueInput";

@InputType()
class OrderCreateInput {
  @ApiProperty({
    required: false,
    type: () => EInvoiceCreateNestedManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => EInvoiceCreateNestedManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => EInvoiceCreateNestedManyWithoutOrdersInput, {
    nullable: true,
  })
  eInvoices?: EInvoiceCreateNestedManyWithoutOrdersInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  orderDate?: Date | null;

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
  orderNumber?: string | null;

  @ApiProperty({
    required: false,
    type: () => ProductCreateNestedManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => ProductCreateNestedManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => ProductCreateNestedManyWithoutOrdersInput, {
    nullable: true,
  })
  products?: ProductCreateNestedManyWithoutOrdersInput;

  @ApiProperty({
    required: false,
    enum: EnumOrderStatus,
  })
  @IsEnum(EnumOrderStatus)
  @IsOptional()
  @Field(() => EnumOrderStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => SupplierWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SupplierWhereUniqueInput)
  @IsOptional()
  @Field(() => SupplierWhereUniqueInput, {
    nullable: true,
  })
  supplier?: SupplierWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalAmount?: number | null;
}

export { OrderCreateInput as OrderCreateInput };
