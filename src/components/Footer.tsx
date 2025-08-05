
const Footer = () => {
    return (
        <div className='px-16 my-12'>
            <div className='grid grid-cols-2 text-center '>
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
            <p className='text-center mt-5 text-xl font-bold'>Copyright 2025 © Disney.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer