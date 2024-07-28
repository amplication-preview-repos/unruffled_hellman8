import { EInvoiceCreateNestedManyWithoutOrdersInput } from "./EInvoiceCreateNestedManyWithoutOrdersInput";
import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type OrderCreateInput = {
  eInvoices?: EInvoiceCreateNestedManyWithoutOrdersInput;
  orderDate?: Date | null;
  orderNumber?: string | null;
  products?: ProductCreateNestedManyWithoutOrdersInput;
  status?: "Option1" | null;
  supplier?: SupplierWhereUniqueInput | null;
  totalAmount?: number | null;
};
