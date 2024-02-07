import { ETableNames } from "../../database/ETableNames";
import { Knex } from "../../database/knex";
import { IFormPayment } from "../../database/models";

export async function formPaymentServiceCreate(formPayment: IFormPayment) {
  try {
    const [result] = await Knex(ETableNames.form_payment)
      .insert(formPayment)
      .returning("id");

    if (typeof result === "object") {
      return result.id;
    } else if (typeof result === "number") {
      return result;
    }
  } catch (error) {
    console.log("🚀 ~ formPaymentServiceCreate ~ error:", error);
    return error;
  }
}
