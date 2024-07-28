import { EInvoiceWhereInput } from "./EInvoiceWhereInput";
import { EInvoiceOrderByInput } from "./EInvoiceOrderByInput";

export type EInvoiceFindManyArgs = {
  where?: EInvoiceWhereInput;
  orderBy?: Array<EInvoiceOrderByInput>;
  skip?: number;
  take?: number;
};
