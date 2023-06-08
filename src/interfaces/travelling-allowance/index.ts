import { UserInterface } from 'interfaces/user';

export interface TravellingAllowanceInterface {
  id?: string;
  amount: number;
  employee_id: string;
  created_at?: Date;
  updated_at?: Date;

  user?: UserInterface;
  _count?: {};
}
