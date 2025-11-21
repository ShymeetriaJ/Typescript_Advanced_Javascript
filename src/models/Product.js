class Product {
    id;
    title;
    description;
    category;
    price;
    discountPercentage;
    rating;
    constructor(id, title, description, category, price, discountPercentage, rating) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.rating = rating;
    }
    displayDetails() {
        return `$${this.id} is called ${this.title} described as ${this.description} found in ${this.category} and costs $${this.price} but is 
        discounted at $${this.discountPercentage}%, with a rating of ${this.rating}.`;
    }
    getPriceWithDiscount() {
        const discountPrice = this.price * (this.discountPercentage / 100);
        const finalPrice = this.price - discountPrice;
        return `Your discounted price is $${finalPrice.toFixed(2)}`;
    }
}
export {};
//# sourceMappingURL=Product.js.map