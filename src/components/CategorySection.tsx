import { useEffect, useState } from 'react';
import ImageSection from './ImageSection';

const CategorySection = () => {

    const [movies, setMovies] = useState<any[]>([]);
    const [series, setSeries] = useState<any[]>([])
    const [cartoon, setCartoon] = useState<any[]>([])

    useEffect(() => {
        const fetchData = async () => {
            fetch('http://localhost:8080/movies/category/movie').then((res) => res.json())
            .then((data) => {
                setMovies(data)
            })

            fetch('http://localhost:8080/movies/category/series').then((res) => res.json())
            .then((data) => setSeries(data))

            fetch('http://localhost:8080/movies/category/cartoon').then((res) => res.json())
            .then((data) => setCartoon(data))

        }
        fetchData()
    }, [])

    return (
        <div className='p-5 mt-2'>
            <h2 id='movies' className='text-4xl font-semibold text-white'>Movies</h2>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex w-full gap-4 scroll-smooth overflow-x-auto pt-5 pb-5 px-3'>
                {movies.map((element, index) => (
                    <ImageSection key={index} image={element.imageURL} url={element.id} />
                ))}
            </div>
            <h2 id='series' className='text-4xl font-semibold text-white'>Series</h2>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex w-full gap-4 scroll-smooth pt-5 pb-5 px-3'>
                {series.map((element, index) => (
                    <ImageSection key={index} image={element.imageURL} url={element.id} />
                ))}
            </div>
            <h2 id='cartoon' className='text-4xl font-semibold text-white'>Cartoon</h2>
            <div className='flex w-full gap-5 scroll-smooth overflow-x-auto whitespace-nowrap pt-4 pb-5 px-3'>
                {cartoon.map((element, index) => (
                    <div className=' shrink-0 w-[200px]' key={index}>
                        <ImageSection image={element.imageURL} url={element.id} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategorySection