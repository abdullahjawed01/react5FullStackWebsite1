import React from 'react'
import { useParams } from 'react-router'

function User() {


    const {userid} = useParams()
  return (
    <div className='text-5xl text-center p-10 text-amber-500 pb-134'>User:{userid}</div>
  )
}

export default User