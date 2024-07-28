import { EInvoice } from "../eInvoice/EInvoice";
import { Product } from "../product/Product";
import { Supplier } from "../supplier/Supplier";

export type Order = {
  createdAt: Date;
  eInvoices?: Array<EInvoice>;
  id: string;
  orderDate: Date | null;
  orderNumber: string | null;
  products?: Array<Product>;
  status?: "Option1" | null;
  supplier?: Supplier | null;
  totalAmount: number | null;
  updatedAt: Date;
};
