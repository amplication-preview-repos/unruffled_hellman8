import { SortOrder } from "../../util/SortOrder";

export type SupplierOrderByInput = {
  contactEmail?: SortOrder;
  contactName?: SortOrder;
  contactPhone?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  supplierName?: SortOrder;
  updatedAt?: SortOrder;
};
