import { DataError, NetworkError } from "../utils/errorHandler";
export async function fetchDisplayDetails(id = 1) {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok)
            throw new NetworkError(`Failed to fetch product`);
        const data = (await response.json());
        console.log(data);
        if (data.id == null || data.title == null || data.description == null || data.category == null || data.price == null || data.discountPercentage == null || data.defaultTax == null) {
            throw new DataError("Invalid product data");
        }
        return {
            id: data.id,
            title: data.title,
            description: data.description,
            category: data.category,
            price: data.price,
            discountPercentage: data.discountPercentage,
            defaultTax: data.defaultTax ?? 4.75,
        };
    }
    catch (err) {
        console.error("Error fetching DisplayDetails", err);
        throw err;
    }
}
export async function fetchGetPriceWithDiscount(id = 1) {
    try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok)
            throw new NetworkError(`Failed to fetch product Price with Discount`);
        const data = (await res.json());
        console.log(data);
        const discountAmount = data.price * (data.discountPercentage / 100);
        const finalPrice = data.price - discountAmount;
        if (!data.price || !data.discountPercentage) {
            throw new DataError("Invalid product discount price");
        }
        return {
            price: data.price,
            discountPercentage: data.discountPercentage,
            finalPrice,
        };
    }
    catch (err) {
        console.error("Error fetching GetPriceWithDiscount", err);
        throw err;
    }
}
export async function fetchCalculateDiscount(id = 1) {
    try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok)
            throw new NetworkError(`Failed to fetch discount calculation`);
        const data = (await res.json());
        console.log(data);
        const discountAmount = data.price * (data.discountPercentage / 100);
        if (!data.price || !data.discountPercentage) {
            throw new DataError("Invalid product data");
        }
        return {
            price: data.price,
            discountPercentage: data.discountPercentage,
            discountAmount,
        };
    }
    catch (err) {
        console.error("Error in fetching CalculateDiscount:", err);
        throw err;
    }
}
export async function fetchCalculateTax(id = 1) {
    try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok)
            throw new NetworkError(`Failed to fetch product: ${res.status} ${res.statusText}`);
        const data = (await res.json());
        console.log(data);
        const taxRate = data.category === "groceries" ? 3 : (data.defaultTax ?? 4.75);
        const taxAmount = data.price * (taxRate / 100);
        const finalPriceWithTax = data.price + taxAmount;
        if (!data.price || !data.defaultTax) {
            throw new DataError("Invalid product tax");
        }
        return {
            price: data.price,
            taxRate,
            taxAmount,
            finalPriceWithTax,
        };
    }
    catch (err) {
        console.error("Error fetching CalculateTax:", err);
        throw err;
    }
}
//# sourceMappingURL=apiService.js.map