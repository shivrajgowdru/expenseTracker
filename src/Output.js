import React from 'react'
import './Output.css'

function Output({transaction}){

return (
  <div className="output">
   <h1>Transaction:</h1>
        <div className='transout'> {
           transaction.map(transaction => {
             return <>
             <div>
               {transaction.date}
               &nbsp;-&nbsp;
               {transaction.amount} 
                &nbsp;-&nbsp;
               {transaction.type}
            </div>
                   </>
           })
         }
         </div>
        
  </div>
  )
}

export default Output
