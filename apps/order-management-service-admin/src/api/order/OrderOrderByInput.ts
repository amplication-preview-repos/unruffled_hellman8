import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  orderDate?: SortOrder;
  orderNumber?: SortOrder;
  status?: SortOrder;
  supplierId?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
