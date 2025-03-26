import React from 'react'
import './Account.scss'
import AccountContent from '../../components/AccountContent/AccountContent'
import Button from '../../components/Button/Button'

function Account({name, money, balance}) {
  return (
    <section className="account">
        <AccountContent name={name} money={money} balance={balance} />
        <div className="account-content-wrapper cta">
            <Button edit='View transactions' className='transaction-button' />
        </div>
    </section>
  )
}

export default Account