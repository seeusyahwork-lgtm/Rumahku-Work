import React from 'react'
import CD_Sidebar from '../components/dasboard/CD_Sidebar'
import CD_Dasboard from '../components/dasboard/CD_Dasboard'

const Dasboard = () => {
  return (
    <div className='grid gap-2 p-4 grid-cols-[250px_minmax(900px,_1fr)] max-h-auto'>
        <CD_Sidebar/>
        <CD_Dasboard/>
    </div>
  )
}

export default Dasboard