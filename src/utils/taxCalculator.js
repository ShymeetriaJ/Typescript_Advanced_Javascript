function calculateTax() {
    if (this.category === "groceries") {
        const taxAmount = this.price * (3) / 100;
        const finalPrice = this.price + taxAmount;
        return finalPrice;
    }
    else {
        const taxAmount = this.price * (this.defaultTax / 100);
        const finalPrice = this.price + taxAmount;
        return finalPrice;
    }
}
;
export {};
//# sourceMappingURL=taxCalculator.js.map