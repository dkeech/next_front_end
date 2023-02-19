import React from 'react'
import Image from 'next/image'

const Skill = (props) => {
    const img = props.img
    const title = props.title

  return (
<div className="flex flex-wrap py-8 px-4">
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="flex flex-col justify-center items-center">
                        <div className="m-auto">
                            <Image src={`/../public/assets/skills/${img}.png`} alt={title} width={100} height={100}/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>{title}</h3>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Skill
