import * as React from "react"
import { Card } from "./ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel"
import { carouselImages } from "@/constant"

const Hero = () => {
    return (
        <div className="flex justify-center mt-5">
            <Carousel className="w-full max-w-5xl">
                <CarouselContent className="w-full">
                    {carouselImages.map((_, index) => (
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