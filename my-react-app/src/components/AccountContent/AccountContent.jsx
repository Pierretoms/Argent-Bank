import React from 'react'
import "./AccountContent.scss"

function AccountContent({name, money, balance}) {
  return (
    <div className="account-content-wrapper">
        <h3 className="account-title">{name}</h3>
        <p className="account-amount">{money}</p>
        <p className="account-amount-description">{balance}</p>
    </div>
  )
}

export default AccountContent