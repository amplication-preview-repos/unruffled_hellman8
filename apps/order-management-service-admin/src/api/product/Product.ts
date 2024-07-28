import { Order } from "../order/Order";

export type Product = {
  createdAt: Date;
  discount: number | null;
  id: string;
  order?: Order | null;
  price: number | null;
  productCode: string | null;
  productName: string | null;
  updatedAt: Date;
};
