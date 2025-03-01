module.exports = function (items) {
    if (!items.length) return 0
    const totalPrice = items.map(item => {
        const { unitPrice, quantitySold } = item
        return unitPrice * quantitySold
    }).reduce((a, b) => a + b)
    
    return totalPrice * .05
}