import React from 'react'
import Search from './Search'
import Coversations from './Coversations'
import Logout from './Logout'

const Sidebar = () => {
  return (
    <div className=' border-r border-slate-500 p-4 flex flex-col'>
    <Search/>
    <div className=' divider px-3'></div>
    <Coversations/>
    <Logout />
    

    </div>
  )
}

export default Sidebar