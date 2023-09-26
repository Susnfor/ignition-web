import React from 'react'
import Image from 'next/image'

const PortfolioItem = ({item, pic, className, size}) => {
  return (
    <div className=''>
        <h1></h1>
        <div className=''>
            <Image className= {className} src={pic} alt="Picture of the work" width={size} height={size}/>
        </div>
    </div>
  )
}

export default PortfolioItem