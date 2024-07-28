import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ProductCreateInput = {
  discount?: number | null;
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
  productCode?: string | null;
  productName?: string | null;
};
