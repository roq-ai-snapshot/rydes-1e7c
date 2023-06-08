import { TeamEmployeeInterface } from 'interfaces/team-employee';
import { UserInterface } from 'interfaces/user';

export interface TeamInterface {
  id?: string;
  name: string;
  team_member_id: string;
  created_at?: Date;
  updated_at?: Date;
  team_employee?: TeamEmployeeInterface[];
  user?: UserInterface;
  _count?: {
    team_employee?: number;
  };
}
