class Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;

    constructor(id: number, title: string, description: string, category: string, price: number, discountPercentage: number, rating: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.rating = rating;
    }
    displayDetails(): string {
        return `$${this.id} is called ${this.title} described as ${this.description} found in ${this.category} and costs $${this.price} but is 
        discounted at $${this.discountPercentage}%, with a rating of ${this.rating}.`
    }
    getPriceWithDiscount(): string {
        const discountPrice = this.price * (this.discountPercentage /100);
        const finalPrice = this.price - discountPrice;
        return `Your discounted price is $${finalPrice.toFixed(2)}`

    }
}