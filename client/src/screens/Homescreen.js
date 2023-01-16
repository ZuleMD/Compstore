import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllComps } from '../actions/compActions'
import Comp from '../components/Comp'
import Filter from '../components/Filter'
import Carousel from 'react-bootstrap/Carousel';
import Navbar from '../components/Navbar'


export default function Homescreen() {

    const dispatch = useDispatch()
    const compsstate = useSelector(state => state.getAllCompsReducer)
    const { compsarr, error, loading } = compsstate

    useEffect(() => {
        dispatch(getAllComps())
    }, [])

    return (
        <div>
            <Navbar />

            <div className='mb-4'>
                <Carousel>
                    <Carousel.Item interval={4500}>
                        <img
                            className="d-block w-100"
                            src="https://itcstores.com/images/media/2020/09/gbeqE07702.jpg"
                            alt="Image One"
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={4500}>
                        <img
                            className="d-block w-100"
                            src="https://itcstores.com/images/media/2020/09/gbeqE07702.jpg"
                            alt="Image Two"
                        />

                    </Carousel.Item>
                </Carousel>

            </div>

            <Filter />

            <div className="row justify-content-center" >

                {loading ? <h1>Loading...</h1> : error ? (<h1>Something went wrong</h1>) : (

                    compsarr.map(comp => {
                        return <div className="col-md-3 m-3 " key={comp._id} >
                            <Comp comp={comp} />
                        </div>
                    })

                )}


            </div>

        </div>
    )
}
