import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type EInvoiceCreateInput = {
  file?: InputJsonValue;
  invoiceNumber?: string | null;
  issueDate?: Date | null;
  order?: OrderWhereUniqueInput | null;
};
