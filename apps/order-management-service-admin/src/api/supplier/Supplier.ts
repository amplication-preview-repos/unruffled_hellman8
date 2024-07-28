import { Order } from "../order/Order";

export type Supplier = {
  contactEmail: string | null;
  contactName: string | null;
  contactPhone: string | null;
  createdAt: Date;
  id: string;
  orders?: Array<Order>;
  supplierName: string | null;
  updatedAt: Date;
};
