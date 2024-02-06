import React from 'react'

const Cheaps = ({ title, href, description }: any) => {
    return (
        <>
            <a href={href} target={"_blank"} title={description} className="hover:bg-slate-600 select-none text-lg transition-all duration-200 cursor-pointer min-w-28 max-sm:px-3 max-sm:bg-slate-600 bg-gray-700 h-24 px-5 flex flex-col justify-center items-center rounded-lg ">
                <p>{title}</p>
                <p className="text-[0.8rem]">{description}</p>
            </a>
        </>
    )
}

export default Cheaps