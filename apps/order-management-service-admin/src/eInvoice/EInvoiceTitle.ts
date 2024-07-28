import { EInvoice as TEInvoice } from "../api/eInvoice/EInvoice";

export const EINVOICE_TITLE_FIELD = "invoiceNumber";

export const EInvoiceTitle = (record: TEInvoice): string => {
  return record.invoiceNumber?.toString() || String(record.id);
};
