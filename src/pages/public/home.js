import React from 'react';
import Banner from '../../components/Banner'
import Sidebar from '../../components/Sidebar'

const Main = () =>{
    return (
        <div className='w-main flex'>
            <div className='flex flex-col gap-5 w-[30%] flex-auto border'>
                <Sidebar/>
                <span>Deal daily</span>    
            </div>
            <div className='flex flex-col gap-5 pl-5 w-[70%] flex-auto border'>
                <Banner/>
                <span>Best seller</span>    
            </div>
        </div>
    )
}
export default Main