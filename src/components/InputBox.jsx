import React, { useId } from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  oncurrencyChange,
  selectCurrency= "usd",
  currencyOptions = [],
  
  className = "",
}) {
  const amountId=useId()

  return (
      <div className={`bg-white p-3 rounded-lg text-sm flex `}>
          <div className="w-1/2">
              <label  className="text-black/40 mb-2 inline-block" htmlFor={amountId}>
                  {label}
              </label>
              <input
                  id={amountId}
                  value={amount}
                  className="outline-none w-full bg-transparent py-1.5"
                  type="text"
                  placeholder="Amount"
                  onChange={e=>onAmountChange && onAmountChange(Number(e.target.value))}
              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                  value={selectCurrency}
                  onChange={e=>oncurrencyChange && oncurrencyChange(e.target.value)}
              >
                  
                      {currencyOptions.map(data=>(<option value={data} key={data}>
                          {data}
                      </option>))}
              
              </select>
          </div>
      </div>
  );
}

export default InputBox

