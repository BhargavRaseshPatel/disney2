import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Authentication = () => {
    const [signInPage, setSignInPage] = useState(true)
    return (
        <div>
            {signInPage ?
                <div>
                    <div className='text-center my-5 text-2xl'>Sign In to Disney</div>
                    <div>
                        <Input placeholder='Email' />
                        <Input placeholder='Password' className='my-3'/>
                    </div>
                    <Button className='w-full mt-3'>Sign In</Button>
                    <p className='mt-3 text-center hover:cursor-pointer'  onClick={() => setSignInPage(false)}>Do not have an Account. Create new Account</p>
                </div>
                :
                <div>
                    <div className='text-center my-5 text-2xl'>Create a New Account</div>
                    <div className='flex'>
                        <Input placeholder='First Name' className='mr-2'/>
                        <Input placeholder='Last Name' className='ml-2'/>
                    </div>
                        <Input placeholder='Email' className='my-3'/>
                        <Input placeholder='Password' className=''/>
                    <Button className='w-full mt-3 bg-white'>Sign In</Button>
                    <p className='mt-3 text-center hover:cursor-pointer' onClick={() => setSignInPage(true)}>Do not have an Account. Create new Account</p>
                </div>}
        </div>
    )
}

export default Authentication