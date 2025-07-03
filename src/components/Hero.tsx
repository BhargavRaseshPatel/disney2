import * as React from "react"
import { Card, CardContent } from "./ui/card"
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
            <Carousel className="w-full max-w-xs">
                <CarouselContent className="">
                    {carouselImages.map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    {/* <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{index + 1}</span>
                                    </CardContent> */}
                                    <img src={_.imageURL} alt=""/>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <img src={'/assets/images/carousel2.webp'} alt="image"/>
        </div>
    )
}

export default Hero