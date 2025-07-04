import { allImages} from '@/constant'
import React from 'react'
import ImageSection from './ImageSection'

const CategorySection = () => {
    return (
        <div className='p-5 mt-2'>
            <div>
                <h2 id='movies' className='text-4xl font-semibold text-white'>Movies</h2>
                <div className='flex w-full gap-4 scroll-smooth overflow-x-auto pt-5 pb-5 px-3'>
                    {allImages.filter(e => e.category == 'movie').map((element, index) => (
                        <ImageSection key={index} image={element.imageURL} url={element.id} />
                    ))}
                </div>
                <h2 id='series' className='text-4xl font-semibold text-white'>Series</h2>
                <div className='flex w-full gap-4 scroll-smooth overflow-x-auto pt-5 pb-5 px-3'>
                    {allImages.filter(e => e.category == 'series').map((element, index) => (
                        <ImageSection key={index} image={element.imageURL} url={element.id} />
                    ))}
                </div>
                <h2 id='cartoon' className='text-4xl font-semibold text-white'>Cartoon</h2>
                <div className='flex w-full gap-5 scroll-smooth overflow-x-auto whitespace-nowrap pt-4 pb-5 px-3'>
                    {allImages.filter(e => e.category == 'cartoon').map((element, index) => (
                        <ImageSection key={index} image={element.imageURL} url={element.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategorySection