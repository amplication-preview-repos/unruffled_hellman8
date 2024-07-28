import { EInvoiceListRelationFilter } from "../eInvoice/EInvoiceListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  eInvoices?: EInvoiceListRelationFilter;
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  orderNumber?: StringNullableFilter;
  products?: ProductListRelationFilter;
  status?: "Option1";
  supplier?: SupplierWhereUniqueInput;
  totalAmount?: FloatNullableFilter;
};
