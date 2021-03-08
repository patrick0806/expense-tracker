import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export default function IncomeExpenses(){
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction=>transaction.amount);
    const income = amounts.filter(amount=>amount>0).reduce((acc,amount)=>(acc+=amount),0).toFixed(2);
    const expense = amounts.filter(amount=>amount<0).reduce((acc,amount)=>(acc+=amount),0).toFixed(2);
    return(
        <div className="inc-exp-container">
            <div>
                <h4>Renda</h4>
                <p className="money plus">R$ +{income}</p>
            </div>
            <div>
                <h4>Despesa</h4>
                <p className="money minus">R$ {expense}</p>
            </div>
      </div>
    )
}