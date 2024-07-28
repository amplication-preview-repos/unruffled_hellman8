import { JsonValue } from "type-fest";
import { Order } from "../order/Order";

export type EInvoice = {
  createdAt: Date;
  file: JsonValue;
  id: string;
  invoiceNumber: string | null;
  issueDate: Date | null;
  order?: Order | null;
  updatedAt: Date;
};
