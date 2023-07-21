
import Reglog from '@/component/Form/Reglog'
import Nav from '@/component/nav/Nav';
import React from 'react'

function User() {
  return (
    <div className='allCont'>
    <Nav where ="form" />
    <div className="userCont">
     <Reglog />
    </div>
    </div>

  )
}

export default User