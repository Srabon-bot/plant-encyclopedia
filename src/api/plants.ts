import type { PlantType, CategoryType } from '../types';

// Get all plants
export const getAllPlants = async (): Promise<PlantType[]> => {
  try {
    const response = await fetch(
      'https://openapi.programming-hero.com/api/plants'
    );

    if (!response.ok) {
      throw new Error('Failed to fetch plants');
    }

    const data = await response.json();

    console.log('All Plants API Response:', data);

    return data.plants;
  } catch (error) {
    console.error('Error fetching plants:', error);
    throw error;
  }
};


// Get all categories
export const getCategories = async (): Promise<CategoryType[]> => {
  try {
    const response = await fetch(
      'https://openapi.programming-hero.com/api/categories'
    );

    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }

    const data = await response.json();

    console.log('Categories API Response:', data);

    return data.categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};


// Get plants by category
export const getPlantByCategory = async (
  id: number
): Promise<PlantType[]> => {
  try {
    const response = await fetch(
      `https://openapi.programming-hero.com/api/category/${id}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch plants by category');
    }

    const data = await response.json();

    console.log('Plants By Category API Response:', data);

    return data.plants;
  } catch (error) {
    console.error('Error fetching plants by category:', error);
    throw error;
  }
};


// Get plant details
export const getPlantDetails = async (
  id: number
): Promise<PlantType> => {
  try {
    const response = await fetch(
      `https://openapi.programming-hero.com/api/plants/${id}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch plant details');
    }

    const data = await response.json();

    console.log('Plant Details API Response:', data);

    return data.plant;
  } catch (error) {
    console.error('Error fetching plant details:', error);
    throw error;
  }
};