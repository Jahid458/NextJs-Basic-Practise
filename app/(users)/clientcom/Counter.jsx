import React, { useState } from 'react'

export default function Counter() {

    const [inc,setInc] = useState(0)
  return <button className='bg-red-500 text-black p-3' onClick={() => setInc((prev) => prev + 1 )}>Add - {inc}</button>
}
