import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type EInvoiceWhereInput = {
  file?: JsonFilter;
  id?: StringFilter;
  invoiceNumber?: StringNullableFilter;
  issueDate?: DateTimeNullableFilter;
  order?: OrderWhereUniqueInput;
};
