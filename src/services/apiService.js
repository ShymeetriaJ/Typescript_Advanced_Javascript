export async function fetchdisplayDetails() {
    try {
        const response = await fetch('https://dummyjson.com/products/1');
        if (!response.ok) {
            throw new Error(`Failed to display product details`);
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error(`Error fetching product data:`, error);
        throw error;
    }
}
export async function fetchgetPriceWithDiscount() {
    try {
        const response = await fetch("'https://dummyjson.com/products/1'");
        if (!response.ok) {
            throw new Error(`Failed to fetch discount price`);
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error(`Error fetching discount product data:`, error);
        throw error;
    }
}
export async function fetchcalculateDiscount() {
    try {
        const response = await fetch("'https://dummyjson.com/products/1'");
        if (!response.ok) {
            throw new Error(`Failed to calculate discount price`);
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error(`Error fetching discount data:`, error);
        throw error;
    }
}
export async function fetchcalculateTax() {
    try {
        const response = await fetch("'https://dummyjson.com/products/1'");
        if (!response.ok) {
            throw new Error(`Failed to display tax calculation`);
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error(`Error fetching tax calculation:`, error);
        throw error;
    }
}
//# sourceMappingURL=apiService.js.map