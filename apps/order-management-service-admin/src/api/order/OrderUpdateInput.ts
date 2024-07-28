import { EInvoiceUpdateManyWithoutOrdersInput } from "./EInvoiceUpdateManyWithoutOrdersInput";
import { ProductUpdateManyWithoutOrdersInput } from "./ProductUpdateManyWithoutOrdersInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type OrderUpdateInput = {
  eInvoices?: EInvoiceUpdateManyWithoutOrdersInput;
  orderDate?: Date | null;
  orderNumber?: string | null;
  products?: ProductUpdateManyWithoutOrdersInput;
  status?: "Option1" | null;
  supplier?: SupplierWhereUniqueInput | null;
  totalAmount?: number | null;
};
