module.exports = function (items) {
    const totalPrice = items.map(item => {
        const { unitPrice, quantitySold } = item
        return unitPrice * quantitySold
    }).reduce((a, b) => a + b, 0)

    return totalPrice * .05
}