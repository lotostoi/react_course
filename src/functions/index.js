export function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

export function getRndFromArray (amount, products) {
    const rundomGoods = [];
    while (rundomGoods.length < amount) {
        const rndGood = products[getRandom(0, products.length - 1)];
        const good = rundomGoods.find((g) => +g.id === +rndGood.id);
        if (!good) {
            rundomGoods.push(rndGood);
        }
    }
    return rundomGoods;
}