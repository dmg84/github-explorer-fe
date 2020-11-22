import {axiosInstance} from "./axios.constants";

export const getRepositories = async (companyName) => await axiosInstance.get(`/organizations/${companyName}/repositories`);

export const trackRepository = async (repository) => await axiosInstance.post(`/repositories`, {repository});