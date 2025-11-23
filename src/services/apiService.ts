
export async function fetchDisplayDetails(): Promise<
  { id: number; title: string; description: string; category: string; price: number; discountPercentage: number; defaultTax: number }[]
> {
  try {
    const response = await fetch('https://dummyjson.com/products/1');

    if (!response.ok) {
      throw new Error(`Failed to display product details`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error(`Error fetching product data:`, error);
    throw error; 
  }
}
export async function fetchGetPriceWithDiscount(): Promise<
  { id: number; title: string; description: string; category: string; price: number; discountPercentage: number; defaultTax: number }[]
> {
  try {
    const response = await fetch('https://dummyjson.com/products/1');

    if (!response.ok) {
      throw new Error(`Failed to fetch discount price`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error(`Error fetching discount product data:`, error);
    throw error; 
  }
}
export async function fetchCalculateDiscount(): Promise<
  { id: number; title: string; description: string; category: string; price: number; discountPercentage: number; defaultTax: number }[]
> {
  try {
    const response = await fetch('https://dummyjson.com/products/1');

    if (!response.ok) {
      throw new Error(`Failed to calculate discount price`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error(`Error fetching discount data:`, error);
    throw error; 
  }
}
export async function fetchCalculateTax(): Promise<
  { id: number; title: string; description: string; category: string; price: number; discountPercentage: number; defaultTax: number }[]
> {
  try {
    const response = await fetch('https://dummyjson.com/products/1');

    if (!response.ok) {
      throw new Error(`Failed to display tax calculation`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error(`Error fetching tax calculation:`, error);
    throw error; 
  }
}
