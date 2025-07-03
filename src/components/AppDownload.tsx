import React from 'react'
import play_store from '../assets/images/play_store.png'
import app_store from '../assets/images/app_store.png'

const AppDownload = () => {
  return (
    <div className='m-auto text-center text-5xl' id='app-download'>
        <p>For Better Experience Download <br />Disney App</p>
        <div className="flex justify-center gap-7 mt-5">
            <img src={play_store} alt="" className='border-2 rounded-2xl border-gray-500'/>
            <img src={app_store} alt="" className='border-2 rounded-2xl border-gray-500'/>
        </div>
    </div>
  )
}

export default AppDownload