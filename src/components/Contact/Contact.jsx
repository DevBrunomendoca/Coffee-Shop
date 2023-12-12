import React from 'react'

import "./Contact.css"

const Contact = () => {
  return (
    <div className='container-contact'> 
      <h3>NEWS AS FRESH AS OUR COFFEE</h3>
      <div className='form-control'>
        <input type="email" name='email' id='email' placeholder='Your E-mail Address...'/>
        <button><img src="/icon-email.png" alt="" /></button>
      </div>
    </div>
  )
}

export default Contact