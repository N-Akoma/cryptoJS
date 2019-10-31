class CryptoAPI{

    //Downloads all data from the fetch api

        async printData(currency, crypto){
            const url = await fetch(`https://api.coinmarketcap.com/v1/ticker/${crypto}/?convert=${currency}`);
            const cryptcur = await url.json()
            return{
                cryptcur
            }
        }

        async printCryptoCurrenciesList(){

            //wait until all data is been downloaded 
            const url = await fetch('https://api.coinmarketcap.com/v1/ticker/')
 
            //waits until all data is convered into json format
             const cryptoCurrency = await url.json()
             return{
                 cryptoCurrency
             }
         }
}
       

 // curl -H "X-CMC_PRO_API_KEY: b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c" 
// -H "Accept: application/json" -d "start=1&limit=5000&convert=USD" 
// -G https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest