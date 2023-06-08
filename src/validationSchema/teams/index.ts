import * as yup from 'yup';
import { teamEmployeeValidationSchema } from 'validationSchema/team-employees';

export const teamValidationSchema = yup.object().shape({
  name: yup.string().required(),
  team_member_id: yup.string().nullable().required(),
  team_employee: yup.array().of(teamEmployeeValidationSchema),
});
