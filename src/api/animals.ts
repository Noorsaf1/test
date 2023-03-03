import axios from "axios";
import { Animal } from "../types/Animal";

const apiUrl = "https://animals.azurewebsites.net/api/animals";

export const getAnimals = async (): Promise<Animal[]> => {
  const response = await axios.get(apiUrl);
  return response.data;
};

export const feedAnimal = async (id: string, fedAt: Date) => {
  const response = await axios.patch(`${apiUrl}/${id}`, {
    isFed: true,
    lastFedAt: fedAt.toISOString(),
  });
  return response.data;
};