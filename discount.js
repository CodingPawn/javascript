function discount(input) {
    let price = input[0];
    let priceDiscount = input[1] / 100 * price;
    let totalPrice = price - priceDiscount;

    console.log(`Price: $${price}`);
    console.log(`Discount: $${priceDiscount}`);
    console.log(`Total: $${totalPrice}`);
}

discount([1000, 30]);
