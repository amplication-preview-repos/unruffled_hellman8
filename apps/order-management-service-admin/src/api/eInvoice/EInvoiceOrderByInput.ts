import { SortOrder } from "../../util/SortOrder";

export type EInvoiceOrderByInput = {
  createdAt?: SortOrder;
  file?: SortOrder;
  id?: SortOrder;
  invoiceNumber?: SortOrder;
  issueDate?: SortOrder;
  orderId?: SortOrder;
  updatedAt?: SortOrder;
};
