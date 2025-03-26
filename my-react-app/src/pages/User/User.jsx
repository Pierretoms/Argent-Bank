import React from 'react'
import Body from "../../containers/Body/Body"
import NameAccount from '../../containers/NameAccount/NameAccount'
import Account from '../../containers/Account/Account'

function User() {
  return (
    <Body>
      <main className='main bg-dark'>
        <NameAccount />
        <h2 className="sr-only">Accounts</h2>
        <Account 
          name='Argent Bank Checking (x8349)' 
          money='$2,082.79' 
          balance='Available Balance' 
        />
        <Account 
          name='Argent Bank Savings (x6712)' 
          money='$10,928.42' 
          balance='Available Balance' 
        />
        <Account 
          name='Argent Bank Credit Card (x8349)' 
          money='$184.30' 
          balance='Current Balance' 
        />
      </main>
    </Body>
  )
}

export default User