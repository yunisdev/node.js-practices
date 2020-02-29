//Object property shorthand

const name = "Yunis"
const userAge = 16

const user = {
    name,
    age:userAge,
    location:'Baku'
}

console.log(user)


//Object destruction

const product = {
    label:'Red Notebook',
    price:3,
    stock:201,
    salePrice:undefined
}

// const {label:productLabel,stock} = product;
// console.log(label);

const transaction = (type,{label,stock})=>{
    console.log(type,label,stock);
}

transaction('order',product)