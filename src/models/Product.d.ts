export declare class Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    defaultTax: number;
    constructor(id: number, title: string, description: string, category: string, price: number, discountPercentage: number, defaultTax: number);
    displayDetails(): string;
    getPriceWithDiscount(): string;
    calculateDiscount(): string;
    calculateTax(): string;
}
//# sourceMappingURL=Product.d.ts.map