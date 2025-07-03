import React from 'react'
import logo from './../assets/images/logo.png'

const Header = () => {
    return (
        <div className='flex p-2 w-full justify-between' >

            <div className='flex'>
                <img src={logo} className='w-[80px] md:w-[120px] object-cover mr-3' />

                <div className='flex gap-5 items-center px-5'>
                    <a href="#movies"><h3 className='text-lg text-white'>Movies</h3></a>
                    <a href="#series"><h3 className='text-lg text-white'>Series</h3></a>
                    <a href="#cartoon"><h3 className="text-lg text-white">Cartoon</h3></a>
                </div>
            </div>
            <div className=' flex items-center gap-5 px-2'>
                <h4 className='text-lg text-white'>Registration</h4>
                <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
                    className='w-[40px] rounded-full' />
            </div>
        </div>
    )
}

export default Header