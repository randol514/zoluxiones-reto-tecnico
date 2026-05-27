import { API_ENDPOINTS } from "../constants/api";

export const fetchUsers = async () => {
  const response = await fetch(API_ENDPOINTS.USERS);

  if (!response.ok) {
    throw new Error("Error fetching users");
  }

  return response.json();
};

export const fetchPlans = async () => {
  const response = await fetch(API_ENDPOINTS.PLANS);

  if (!response.ok) {
    throw new Error("Error fetching plans");
  }

  return response.json();
};