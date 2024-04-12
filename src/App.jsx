import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] =useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount,setconvertedAmount] = useState("0")
  const currencyRate = useCurrencyInfo(from)
  const options = Object.keys(currencyRate)
  const swap = () =>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setconvertedAmount(amount)
    //convert()
  }
  const convert = () =>{
    setconvertedAmount(amount*currencyRate[to])
  }
  function changefrom(currency) {
    setFrom(currency)
  }
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url(https://entail.fortrade.com/en-assets/fortrade/fit-in/700x700/Cross_Currency-1670341526367.jpg)`,
        }}
    >
      <h1 className='text-3xl text-white'>Currency Convertor</h1>
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                           label="From"
                           amount={amount}
                           oncurrencyChange = {changefrom}       
                           onAmountChange={amount=>setAmount(amount)}        
                           selectCurrency={from}
                           currencyOptions = {options} 
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                           amount={convertedAmount}
                           oncurrencyChange = {(currency)=>
                            setTo(currency)
                           }               
                           selectCurrency={to}
                           currencyOptions = {options} 
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from} to {to}
                    </button>
                </form>
            </div>
        </div>

        <div className='h-6 w-72 backdrop-blur-lg text-center bg-white rounded-xl'>
          Made by <a className='link' href="https://mapur2.github.io/new_portfolio/" target="_blank" rel="noopener noreferrer">Rupam</a>
        </div>
    </div>
    )
}

export default App
