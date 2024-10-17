import * as yup from "yup";
import { roleOptions } from "../selectOptions/roleSelectOptions";

export const employeeEditSchema = yup.object().shape({
  name: yup
    .string()
    .max(30, "Максимальная длина имени 30 символов")
    .min(3, "Минимальная длина имени 3 символа!")
    .required("Это обязательное поле"),
  phone: yup.string().min(8).required("Это обязательное поле"),
  birthday: yup.string().min(8).required("Это обязательное поле"),
  role: yup.string().oneOf(roleOptions).required("Должность обязательна"),
  isArchive: yup.boolean().required(),
});
