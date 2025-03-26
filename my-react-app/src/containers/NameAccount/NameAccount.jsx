import React from 'react'
import "./NameAccount.scss"
import Name from '../../components/Name/Name'
import Button from '../../components/Button/Button'

function NameAccount() {
  return (
    <div className="header">
        <Name userName='Tony Jarvis !' />
        <Button edit='Edit Name' className='edit-button' />
    </div>
  )
}

export default NameAccount