import React, { Component } from 'react'
import sora from '../../img/asset 0.svg'

export class Home extends Component {
    state = {};

    render() {
        return (
            <>
            <header className='vh-100 d-flex justify-content-center text-center gy-5 align-items-center'>
                <div className='text-white'>
                <img src={sora} className="w-50 mb-4" alt="" />
            <h1 className=' fw-bolder'>START REACT</h1>
            <div className="star d-flex text-center justify-content-center align-items-center ">
                <div className='after'></div>
                <div><i className='fa fa-star fa-2x mx-3'></i></div>
                <div className='before'></div>
            </div>
            <p className='fs-3'>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </header>
            </>
        )
    }
}

