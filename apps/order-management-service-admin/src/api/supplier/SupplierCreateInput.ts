import { OrderCreateNestedManyWithoutSuppliersInput } from "./OrderCreateNestedManyWithoutSuppliersInput";

export type SupplierCreateInput = {
  contactEmail?: string | null;
  contactName?: string | null;
  contactPhone?: string | null;
  orders?: OrderCreateNestedManyWithoutSuppliersInput;
  supplierName?: string | null;
};
