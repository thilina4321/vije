const taxExclusive = (priceWithTax, taxPercentage)=>{
    return (priceWithTax * 100)/ (100 + taxPercentage)
}

console.log(taxExclusive(110, 10));