import type { Plant, Category } from '../types';


export const getAllPlants = async (): Promise<Plant[]> => {
  try {
    const response = await fetch('https://openapi.programming-hero.com/api/plants');
    if (!response.ok) {
      throw new Error('Failed to fetch plants');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching plants:', error);
    throw error;
  }
};

export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch('https://openapi.programming-hero.com/api/categories');
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const getPlantByCategory = async (id: number): Promise<Plant[]> => {
    try {
        const response = await fetch(`https://openapi.programming-hero.com/api/plants?category=${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch plants by category');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching plants by category:', error);
        throw error;
    }
};

export const getPlantDetails = async (id: number): Promise<Plant> => {
    try {
        const response = await fetch(`https://openapi.programming-hero.com/api/plants/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch plant details');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching plant details:', error);
        throw error;
    }
};