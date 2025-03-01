const calculateSalesCommission = require ('.')

it('if the list is empty, the commission is zero', () => {
    const currentResult = calculateSalesCommission([])
    const expectedResult = 0
    expect(currentResult).toBe(expectedResult)
})

it ('calculates commission when there is only one item in the list', () => {
    const currentResult = calculateSalesCommission([{
        id: 'PROD-123',
        unitPrice: 1000,
        quantitySold: 1
    }])

    const expectedResult = 50
    expect(currentResult).toBe(expectedResult)
})

it ('calculates commission when there is more than one item in the list', () => {
    const currentResult = calculateSalesCommission([
        {
            id: 'PROD-123',
            unitPrice: 1000,
            quantitySold: 1 
        },
        {
            id: 'PROD-456',
            unitPrice: 100,
            quantitySold: 5 
        }
    ])

    const expectedResult = 75
    expect(currentResult).toBe(expectedResult)
})

it('calculates 10% commission', () => {
    const currentResult = calculateSalesCommission([{
        id: 'PROD-789',
        unitPrice: 2000,
        quantitySold: 1 
    }])

    const expectedResult = 200
    expect(currentResult).toBe(expectedResult)
})

it('calculates 15% commission', () => {
    const currentResult = calculateSalesCommission([{
        id: 'PROD-789',
        unitPrice: 2000,
        quantitySold: 3 
    }])

    const expectedResult = 900
    expect(currentResult).toBe(expectedResult)
})

it('calculates special conditions with 20%', () => {
    const currentResult = calculateSalesCommission([
    {
        id: 'PROD-321',
        unitPrice: 5000,
        quantitySold: 2 
    },
    {
        id: 'XP-0101',
        unitPrice: 10000,
        quantitySold: 4 
    }
])

    const expectedResult = 10000
    expect(currentResult).toBe(expectedResult)
})