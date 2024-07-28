import { Supplier as TSupplier } from "../api/supplier/Supplier";

export const SUPPLIER_TITLE_FIELD = "contactName";

export const SupplierTitle = (record: TSupplier): string => {
  return record.contactName?.toString() || String(record.id);
};
