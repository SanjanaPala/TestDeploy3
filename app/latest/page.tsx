'use client'
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Cheaps from '../utils/cheaps'
const Latests = () => {
  const [latest, setLatest] = useState([
    {
      name: "Loading",
      description: "Loading",
      svn_url: "Loading"
    }
    ,
    {
      name: "Loading",
      description: "Loading",
      svn_url: "Loading"
    },
    {
      name: "Loading",
      description: "Loading",
      svn_url: "Loading"
    }
    , {
      name: "Loading",
      description: "Loading",
      svn_url: "Loading"
    },
    {
      name: "Loading",
      description: "Loading",
      svn_url: "Loading"
    }
  ]);
  const [events, setEvents] = useState([{
    title: "Loading",
    description: "Loading",
    link: "Loading"
  }]);
  return (
    <>


      <div className="flex w-screen h-screen justify-center items-center bg-gray-900">
        <div className="flex relative justify-start gap-10 h-4/5 w-4/5">
          <Sidebar />

          <div data-aos="fade-left" className="flex flex-col gap-5 pt-2 justify-start w-full ">
            <h1 data-aos="fade-left" className='text-5xl'>Latest</h1>
            <h1 data-aos="fade-left" className="mt-5 text-lg">~ Latest Blogs</h1>
            <div data-aos="fade-left" className="overflow-y-auto w-full flex flex-col gap-1">
              {events.length > 0 ? events.map((event: any, index: any) => {
                return <Cheaps key={index} title={event.title} href={event.link} description={event.description} />
              }) : <div className="w-full h-24 flex flex-col justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>}
            </div>
            <h1>~ Here are some of my latest projects</h1>

            <div data-aos="fade-left" className="flex flex-col w-full gap-3  overflow-y-auto text-center">
              {latest.length >= 1 ? latest.map((repo: any, index) => (

                <div key={index}>
                  <Cheaps href={repo.svn_url} title={repo.name} description={repo.description} />
                </div>
              ))

                :
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>

              }



            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Latests