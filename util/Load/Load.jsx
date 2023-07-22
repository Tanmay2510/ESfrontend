import React from 'react';
import { Puff } from 'react-loader-spinner'
 
function Load() {
  return (
    <div className='cen'>
    <Puff
  height="200"
  width="200"
  radius={1}
  color="#27875b"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    
    </div>
  )
}

export default Load