import React from 'react'
import Sidebar from '../components/Sidebar'

const Chat = () => {
  return (
    <>
     
     <div className="flex w-screen h-screen justify-center items-center bg-gray-900">
        <div className="flex relative justify-start gap-10 h-4/5 w-4/5">
          <Sidebar />
        </div>
      </div>
    
    </>
  )
}

export default Chat