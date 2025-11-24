 export class Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    defaultTax: number = 4.75;

    constructor(id: number, title: string, description: string, category: string, price: number, discountPercentage: number, defaultTax: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.defaultTax = defaultTax;
    }
    displayDetails(): string {
        return `${this.id} is called ${this.title} described as ${this.description} found in ${this.category} and costs $${this.price.toFixed(2)} but is discounted at ${this.discountPercentage}%, with a tax rate of ${this.defaultTax}%.`
    }
    getPriceWithDiscount(): string {
        const discountAmount = this.price * (this.discountPercentage /100);
        const finalPrice = this.price - discountAmount;
        return `Your discounted price is $${finalPrice.toFixed(2)}`
    }
    calculateDiscount(): string {
    const discountTotal = this.price * (this.discountPercentage /100);
    return `Your discount amount is $${discountTotal.toFixed(2)}`;
    }
    calculateTax(): string {
        if (this.category === "groceries") {
        const taxAmount = this.price * (3)/100;
        const finalPrice = this.price + taxAmount;
        return `Your tax cost is $${finalPrice.toFixed(2)}`;}
        else { 
        const taxAmount = this.price * (this.defaultTax /100);
        const finalPrice = this.price + taxAmount;
        return `Your tax cost is $${finalPrice.toFixed(2)}`;}   
      }}