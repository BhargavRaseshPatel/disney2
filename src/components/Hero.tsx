import { useEffect, useState } from "react"
import * as React from "react"
import { Card } from "./ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel"
// import { allImages } from "@/constant"

const Hero = () => {
    const [allImages,setAllImages] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            fetch('http://localhost:8080/movies').then((res) => res.json()).then((data) => setAllImages(data))
        }
        fetchData()
    }, [])
    
    return (
        <div className="flex justify-center mt-5">
            <Carousel className="w-full max-w-5xl">
                <CarouselContent className="w-full">
                    {allImages.filter(e => e.category == 'carousel').map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card className="w-full">
                                    <img src={_.imageURL} alt=""/>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            {/* <img src={'/assets/images/carousel2.webp'} alt="image"/> */}
        </div>
    )
}

export default Hero