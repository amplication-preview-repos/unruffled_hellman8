import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type SupplierWhereInput = {
  contactEmail?: StringNullableFilter;
  contactName?: StringNullableFilter;
  contactPhone?: StringNullableFilter;
  id?: StringFilter;
  orders?: OrderListRelationFilter;
  supplierName?: StringNullableFilter;
};
