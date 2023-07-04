// app.js file content
console.log("Hello World")

// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (euro) => {
 let usd = euro * oneEuroIs.USD
 return usd
}

const fromDollarToYen = (dollar) => {
    let euros = dollar / oneEuroIs.USD
    let yen = euros * oneEuroIs.JPY
    return yen
}

const fromYenToPound = (yen) => {
    let euros = yen / oneEuroIs.JPY
    let gbp = euros * oneEuroIs.GBP
    return gbp
    
}

console.log(fromYenToPound(1000))
console.log(fromEuroToDollar(3.5))
console.log(fromDollarToYen(24))
module.exports = { fromEuroToDollar, sum, fromDollarToYen, fromYenToPound };