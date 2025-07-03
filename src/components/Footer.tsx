import React from 'react'

const Footer = () => {
    return (
        <div className='grid grid-cols-2 text-center px-16 my-12'>
            <div className="">
                <h2 className='text-2xl font-bold'>COMPANY</h2>
                <ul className='flex flex-col mt-2'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2 className='text-2xl font-bold'>GET IN TOUCH</h2>
                <ul className='mt-2'>
                    <li>+1-212-456-7890</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer