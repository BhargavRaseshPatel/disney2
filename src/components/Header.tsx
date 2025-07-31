import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import logo from './../assets/images/logo.png'
import Authentication from './Authentication'
import { useState } from "react"
import { SearchIcon } from "lucide-react"
import type { ItemProps } from "./DetailPage"
import { useNavigate } from "react-router-dom"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

const Header = () => {

    const [searchFilm, setSearchFilm] = useState<ItemProps[]>([])
    const [isLogin, setIsLogin] = useState(true)

    const searchByTitle = (search: string) => {
        if (search != "") {
            fetch('http://localhost:8080/movies/title/' + search).then((res) => res.json()).
                then((data) => setSearchFilm(data))
        } else {
            setSearchFilm([])
        }
    }

    const navigate = useNavigate()
    return (
        <div className=" sticky bg-[#131520] z-20 top-0 w-full shadow">
            <Dialog>
                <DialogContent className='bg-[#131520]'>
                    <DialogHeader>
                        <VisuallyHidden>
                            <DialogTitle>Authentication</DialogTitle>
                        </VisuallyHidden>
                        <Authentication pageType={isLogin} />
                    </DialogHeader>
                </DialogContent>

                <div className='flex p-2 w-full justify-between' >

                    <div className='flex'>
                        <img src={logo} className='w-[80px] md:w-[120px] object-cover mr-3' />

                        <div className='flex gap-5 items-center px-5'>
                            <a href="#movies"><h3 className='text-lg text-white'>Movies</h3></a>
                            <a href="#series"><h3 className='text-lg text-white'>Series</h3></a>
                            <a href="#cartoon"><h3 className="text-lg text-white">Cartoon</h3></a>
                        </div>
                    </div>

                    <div className="bg-black my-1 border-white border-2 rounded-full hidden lg:flex flex-row justify-center w-[25%] relative">
                        <div className="flex items-center w-full">
                            <input type="text" className="px-3 outline-none bg-transparent text-white w-full" onChange={(e) => searchByTitle(e.target.value)} />
                            <SearchIcon className="w-6 h-6 text-white mr-2" />
                        </div>
                        <div className="absolute bg-black top-12 z-10 w-full">
                            {searchFilm && searchFilm.length > 0 && searchFilm.map((element, index) => (
                                <div key={index} className="bg-[#131520] rounded-md my-0.5 px-2 cursor-pointer">
                                    <p className="line-clamp-1" onClick={() => navigate(element.id)}>{element.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className=' flex items-center gap-5 px-2'>
                        <DialogTrigger><h4 className='text-lg text-white' onClick={() => setIsLogin(true)}>Login</h4></DialogTrigger>
                        <DialogTrigger><h4 className='text-lg text-white' onClick={() => setIsLogin(false)}>Registration</h4></DialogTrigger>
                        <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
                            className='w-[40px] rounded-full' />
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default Header