function getPriceWithDiscount() {
    const discountAmount = this.price * (this.discountPercentage / 100);
    const finalPrice = this.price - discountAmount;
    return finalPrice;
}
export {};
//# sourceMappingURL=discountCalculator.js.map