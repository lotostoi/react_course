export function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

export function getRndFromArray (amount, products) {
    const randomGoods = [];
    while (randomGoods.length < amount) {
        const rndGood = products[getRandom(0, products.length - 1)];
        const good = randomGoods.find((g) => g.id.toString() === rndGood.id.toString());
        if (!good) {
            randomGoods.push(rndGood);
        }
    }
    return randomGoods;
}