console.log('client')

fetch('http://localhost:3000/weather?address=Baku').then((res) => {
    res.json().then((data) => {
        console.log(data);
    })
})