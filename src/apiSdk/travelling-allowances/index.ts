import axios from 'axios';
import queryString from 'query-string';
import { TravellingAllowanceInterface } from 'interfaces/travelling-allowance';
import { GetQueryInterface } from '../../interfaces';

export const getTravellingAllowances = async (query?: GetQueryInterface) => {
  const response = await axios.get(`/api/travelling-allowances${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createTravellingAllowance = async (travellingAllowance: TravellingAllowanceInterface) => {
  const response = await axios.post('/api/travelling-allowances', travellingAllowance);
  return response.data;
};

export const updateTravellingAllowanceById = async (id: string, travellingAllowance: TravellingAllowanceInterface) => {
  const response = await axios.put(`/api/travelling-allowances/${id}`, travellingAllowance);
  return response.data;
};

export const getTravellingAllowanceById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/travelling-allowances/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteTravellingAllowanceById = async (id: string) => {
  const response = await axios.delete(`/api/travelling-allowances/${id}`);
  return response.data;
};
