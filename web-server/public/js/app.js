console.log('client')



const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const slocation = search.value;
    document.querySelector(`#message-1`).innerHTML = 'Loading...';
    document.querySelector(`#message-2`).innerHTML = '';
    document.querySelector(`#message-3`).innerHTML = '';
    document.querySelector(`#message-4`).innerHTML = '';
    document.querySelector(`#message-5`).innerHTML = '';
    fetch(`http://localhost:3000/weather?address=${slocation}`).then((res) => {
        res.json().then((data) => {
            if (data.error) {
                return document.querySelector(`#message-1`).innerHTML = data.error;
            } else {
                const { location, tempData, precipProb, sum, hourlySum } = data
                document.querySelector(`#message-1`).innerHTML = location;
                document.querySelector(`#message-2`).innerHTML = tempData;
                document.querySelector(`#message-3`).innerHTML = precipProb;
                document.querySelector(`#message-4`).innerHTML = sum;
                document.querySelector(`#message-5`).innerHTML = hourlySum;
            }
        })
    })
})