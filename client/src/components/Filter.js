import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterComps, filterCompsbyPrice } from '../actions/compActions'


export default function Filter() {

    const [isActive, setIsActive] = useState(false);

    const dispatch = useDispatch()
    const [searchkey, setsearchkey] = useState('')
    const [categorie, setcategorie] = useState('all')





    return (
        <div className="container">
            <div className="row  shadow-lg p-3 mb-5 bg-body rounded justify-content-center">
                <div className="col-md-3" style={{
                    margin: 'auto',
                    display: 'block',
                    width: 'fit-content'
                }}>
                    Trier par prix&nbsp;
                    <a onClick={() => setIsActive(!isActive)}>
                        {isActive ? (<button className='btn' onClick={() => { dispatch(filterCompsbyPrice(isActive)) }}><i id="faArrow" className='fas fa-arrow-down'>&nbsp;ordre décroissant</i></button>)
                            : (<button className='btn' onClick={() => { dispatch(filterCompsbyPrice(isActive)) }}><i id="faArrow" className='fas fa-arrow-up'>&nbsp;ordre croissant</i></button>)}</a>

                </div>

                <div className="col-md-3  ">
                    <input onChange={(e) => { setsearchkey(e.target.value) }} value={searchkey} type="text" className="form-control w-100" placeholder="Veuillez saisir un mot clé" />
                </div>
                <div className="col-md-3  ">
                    <select onChange={(e) => { setcategorie(e.target.value) }} value={categorie} className="form-control w-100 mt-2">

                        <option value="all">Toutes les catégories</option>
                        <optgroup label="Laptop">
                            <option style={{ color: '#888' }} value="Latop Gamers">Latop Gamers</option>
                            <option style={{ color: '#888' }} value="Laptop Pro">Laptop Pro</option>
                            <option style={{ color: '#888' }} value="Laptop en promotion">Laptop en promotion</option>
                        </optgroup>
                        <optgroup label="Pc de Bureau">
                            <option style={{ color: '#888' }} value="PC Gamers">PC Gamers</option>
                            <option style={{ color: '#888' }} value="PC Pro">PC  Pro</option>
                            <option style={{ color: '#888' }} value="PC en promotion">PC en promotion</option>
                        </optgroup>



                    </select>
                </div>
                <div className="col-md-2 ">
                    <button className="btn  w-100 mt-2" style={{ backgroundColor: '#870100', color: "white" }} onClick={() => { dispatch(filterComps(searchkey, categorie)) }}>Filtrer</button>
                </div>

            </div>

        </div>
    )
}
