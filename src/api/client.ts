import axios, { AxiosInstance, AxiosResponse } from 'axios';

export interface Hackathon {
  id: number;
  __v: number;
  description: string;
  endDate: string;
  imageUrl: string;
  name: string;
  prize: string;
  projects: any[]; 
  startDate: string;
  topics: string[];
  format: string;
}

const API_BASE_URL = 'http://104.199.52.23:3000';

const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export const getHackathons = async (): Promise<Hackathon[]> => {
  try {
    const response: AxiosResponse<Hackathon[]> = await api.get('/hackathons');
    return response.data;
  } catch (error) {
    console.error('Error fetching hackathons:', error);
    throw error;
  }
};

const apiClient = {
    getHackathons
  };
  
  export default apiClient;