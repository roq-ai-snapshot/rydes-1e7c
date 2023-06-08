import * as yup from 'yup';

export const teamEmployeeValidationSchema = yup.object().shape({
  team_id: yup.string().nullable().required(),
  employee_id: yup.string().nullable().required(),
});
