import React from 'react'

const ImageSection = ({image} : {image: string | undefined}) => {
  // console.log(imageURL)
  return (
    <div>
        {/* <img src='/assets/images/carousel3.webp' /> */}
        <img src={image} alt={image} className='w-96 rounded-xl hover:scale-105 hover:border-2 transition-all cursor-pointer' />
    </div>
  )
}

export default ImageSection