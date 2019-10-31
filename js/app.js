// Instanciate the classes

const cryptoAPI = new CryptoAPI();
const ui = new UIAPI()

const form = document.getElementById('form')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const cryptoCurrency = document.getElementById('cryptocurrency').value
    const currency = document.getElementById('currency').value

    //validate the input
    if(cryptoCurrency === '' || currency === ''){

        ui.dispalyMessage('All fields are mandetory', 'deep-orange darken-4 card-panel')
        setTimeout( () =>{
            document.querySelector('.messages div').remove()
        },3000)
    }else{
        cryptoAPI.printData(currency, cryptoCurrency)
        .then(res =>{
            const cryptoDetails = res.cryptcur[0]
            ui.Details(cryptoDetails, currency)
        })
        .catch(err =>{
            console.log(err)
        })
    }

})

// curl -H "X-CMC_PRO_API_KEY: b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c" 
// -H "Accept: application/json" -d "start=1&limit=5000&convert=USD" 
// -G https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest



