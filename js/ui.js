class UIAPI{
    constructor(){
        this.init()
    }
        init(){
        this.printCryptoCurrencies()
    }

    async printCryptoCurrencies(){
        cryptoAPI.printCryptoCurrenciesList()
       .then(data =>{
           const cryptoCurrency = data.cryptoCurrency;
            const select = document.getElementById('cryptocurrency')

                cryptoCurrency.forEach(currency =>{
                   const option =  document.createElement('option')
                    option.value = currency.id
                    option.textContent = currency.name
                    select.appendChild(option)
                })
               })
       .catch(err =>{ console.log(err) })
    }
    dispalyMessage(message, className){
        const div = document.createElement('div')
        div.textContent = message
        div.className = className
        const mess = document.querySelector('.messages')
        mess.appendChild(div)

    }

    Details(cryptoDetails, currency){
        let print;
        print = 'price_'+currency.toLowerCase()
        let value = cryptoDetails[print]
        const result = document.getElementById('result')
        const printDetails =`
        <div class="card cyan darken-3">
        <div class="card-content white-text">
             <span class="card-title">Result</span>
             <p>The Price of ${cryptoDetails.name} from ${currency} is $ ${value}</p>
             <p>Last Hour: ${cryptoDetails.percent_change_1h} %</p>
             <p>Last Day: ${cryptoDetails.percent_change_24h} %</p>
             <p>Last 7 Days: ${cryptoDetails.percent_change_7d} %</p>
        </div>
   </div>
        `
        result.innerHTML = printDetails
    }

}