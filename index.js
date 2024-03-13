const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


function numero_impar (numero)
{ 
  return numero%2!=0; 
}

let pizzasImpares = pizzas.filter(pizza =>
   numero_impar(pizza.id)
).map(({nombre}) => nombre)


console.log("Pizzas impares: " + pizzasImpares)


  let pizzasBaratas = pizzas.filter(pizza =>
    pizza.precio < 600
  )
const nombresPizzasBaratas = pizzasBaratas.map (({nombre}) => nombre)

console.log("Opciones de pizzas a menos de $600: " + nombresPizzasBaratas)

console.log("Nuestros precios:")
pizzas.forEach(pizza => {

  const {nombre, precio} = pizza
  
  console.log(`Nombre: ${nombre}
Valor: ${precio}`)
  
})
  
console.log("Mirá nuestras variedades y sus ingredientes!!")
pizzas.forEach(pizza => {

  const {nombre, ingredientes} = pizza
  
  console.log(`Nuestra ${nombre}
Tiene estos ingredientes: ${ingredientes}`)
  
})
  