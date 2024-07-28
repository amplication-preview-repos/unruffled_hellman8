import { OrderUpdateManyWithoutSuppliersInput } from "./OrderUpdateManyWithoutSuppliersInput";

export type SupplierUpdateInput = {
  contactEmail?: string | null;
  contactName?: string | null;
  contactPhone?: string | null;
  orders?: OrderUpdateManyWithoutSuppliersInput;
  supplierName?: string | null;
};
