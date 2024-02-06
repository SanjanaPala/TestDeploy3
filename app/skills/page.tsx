'use client'
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { skills } from '../customData/skills'
import Cheaps from '../utils/cheaps'

const Skills = () => {
  const [Skills, setSkills] = useState<any>(skills)



  return (
    <>
      <div className="flex w-screen h-screen justify-center items-center bg-gray-900">
        <div className="flex relative justify-start gap-10 h-4/5 w-4/5">
          <Sidebar />
          <div data-aos="fade-left" className="flex flex-col gap-5 pt-2 justify-start  ">
            <h1 className='text-5xl'>Skills</h1>
            <h5 className='w-4/5'>Yash Simejiya is a talented and skilled individual with a wide range of abilities. He is proficient in a variety of programming languages, including JavaScript, TypeScript, and C++. He is also an expert in web development and has developed several projects, including BeatLeap, a Spotify clone, and automated full HR work by making software for payroll. In addition, he is currently learning Swift and their MVVM architecture.
            </h5>
            <div data-aos="fade-left" className="grid grid-cols-4 gap-5 my-5 max-sm:hidden overflow-hidden">

              {
                Skills.map((item: any, index: any) => {
                  console.log(item)
                  return (

                    <Cheaps key={index} title={item.title} />
                  )
                })
              }
            </div>
            <h5>~ Google Bard</h5>

          </div>
        </div>
      </div>
    </>
  )
}

export default Skills