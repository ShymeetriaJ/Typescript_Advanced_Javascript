export declare function fetchDisplayDetails(id?: number): Promise<{
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    defaultTax: number;
}>;
export declare function fetchGetPriceWithDiscount(id?: number): Promise<{
    price: number;
    discountPercentage: number;
    finalPrice: number;
}>;
export declare function fetchCalculateDiscount(id?: number): Promise<{
    price: number;
    discountPercentage: number;
    discountAmount: number;
}>;
export declare function fetchCalculateTax(id?: number): Promise<{
    price: number;
    taxRate: number;
    taxAmount: number;
    finalPriceWithTax: number;
}>;
//# sourceMappingURL=apiService.d.ts.map