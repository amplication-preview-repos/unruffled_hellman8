import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  discount?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  price?: SortOrder;
  productCode?: SortOrder;
  productName?: SortOrder;
  updatedAt?: SortOrder;
};
