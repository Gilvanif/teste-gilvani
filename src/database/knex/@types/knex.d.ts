import { IClient, IFormPayment, IProduct, ISale, IUser } from "../../models";

declare module "knex/types/tables" {
  interface Tables {
    user: IUser;
    client: IClient;
    product: IProduct;
    from_payment: IFormPayment;
    sale: ISale;
  }
}
