import axios from 'axios';
import queryString from 'query-string';
import { TeamEmployeeInterface } from 'interfaces/team-employee';
import { GetQueryInterface } from '../../interfaces';

export const getTeamEmployees = async (query?: GetQueryInterface) => {
  const response = await axios.get(`/api/team-employees${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createTeamEmployee = async (teamEmployee: TeamEmployeeInterface) => {
  const response = await axios.post('/api/team-employees', teamEmployee);
  return response.data;
};

export const updateTeamEmployeeById = async (id: string, teamEmployee: TeamEmployeeInterface) => {
  const response = await axios.put(`/api/team-employees/${id}`, teamEmployee);
  return response.data;
};

export const getTeamEmployeeById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/team-employees/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTeamEmployeeById = async (id: string) => {
  const response = await axios.delete(`/api/team-employees/${id}`);
  return response.data;
};
