import { useNavigate } from 'react-router-dom'

const ImageSection = ({image, url} : {image: string | undefined, url: number}) => {
  // console.log(imageURL)
  const navigate = useNavigate()
  return (
    <div className='flex-1'>
        {/* <img src='/assets/images/carousel3.webp' /> */}
        <img src={image} alt={image} className='w-6xl md:w-96 rounded-xl hover:scale-105 hover:border-2 transition-all cursor-pointer' onClick={() => navigate(`/${url}`)} />
    </div>
  )
}

export default ImageSection