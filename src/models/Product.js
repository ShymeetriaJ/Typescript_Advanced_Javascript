export class Product {
    id;
    title;
    description;
    category;
    price;
    discountPercentage;
    defaultTax = 4.75;
    constructor(id, title, description, category, price, discountPercentage, defaultTax) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.defaultTax = 4.75;
    }
    displayDetails() {
        return `${this.id} is called ${this.title} described as ${this.description} found in ${this.category} and costs $${this.price} but is discounted at ${this.discountPercentage}%, with a tax rate of ${this.defaultTax}.`;
    }
    getPriceWithDiscount() {
        const discountAmount = this.price * (this.discountPercentage / 100);
        const finalPrice = this.price - discountAmount;
        return `Your discounted price is $${finalPrice.toFixed(2)}`;
    }
    calculateDiscount() {
        const discountTotal = this.price * (this.discountPercentage / 100);
        return `Your discount amount is $${discountTotal.toFixed(2)}`;
    }
    calculateTax() {
        if (this.category === "groceries") {
            const taxAmount = this.price * (3) / 100;
            const finalPrice = this.price + taxAmount;
            return `Your tax cost is $${finalPrice.toFixed(2)}`;
        }
        else {
            const taxAmount = this.price * (this.defaultTax / 100);
            const finalPrice = this.price + taxAmount;
            return `Your tax cost is $${finalPrice.toFixed(2)}`;
        }
    }
}
//# sourceMappingURL=Product.js.map