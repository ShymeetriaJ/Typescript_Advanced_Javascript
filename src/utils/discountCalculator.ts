  function getPriceWithDiscount(this: any): number {
        const discountAmount = this.price * (this.discountPercentage /100);
        const finalPrice = this.price - discountAmount;
        return finalPrice
    }

