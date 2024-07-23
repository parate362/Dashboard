import React from 'react'
import SidebarContent from '../Components/NavigationBar/SideBar/SidebarContent'
import NavigationBar from '../Components/NavigationBar/Navbar/NavigationBar'
// import Dashboard from '../Components/Dashboard/Dashboard'
import MainRouter from '../MainRouter/MainRouter'

const AdminPanel = () => {
  return (
    <div className="flex max-h-full bg-[#F5F5F5] font-body flex-col ">
      <div >
       <SidebarContent/>
      
      </div>
      <div className="flex-row ">
        <NavigationBar/>
        {/* <Dashboard  /> */}
        <MainRouter/>
      </div>
    </div>
  )
}

export default AdminPanel