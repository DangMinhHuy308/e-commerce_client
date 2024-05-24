import React from 'react';
import {Outlet} from 'react-router-dom'
import Header from '../../components/Header'
import Nav from '../../components/Nav'

const Public = () =>{
    return (
        <div className='w-full flex flex-col items-center'>
            <Header/>
            <Nav/>
            <div className='w-main'>

                <Outlet/>
            </div>
        </div>
    )
}
export default Public