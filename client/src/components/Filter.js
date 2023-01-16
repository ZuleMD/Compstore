import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterComps } from '../actions/compActions'
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

export default function Filter() {

    const dispatch = useDispatch()
    const [searchkey, setsearchkey] = useState('')
    const [categorie, setcategorie] = useState('all')
    // Our States
    const [value, setValue] = React.useState([2, 10]);


    // Changing State when volume increases/decreases
    const rangeSelector = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
    };


    return (
        <div className="container">
            <div className="row shadow-lg p-3 mb-5 bg-body rounded justify-content-center">
                <div classNamme="col-md-3" style={{
                    margin: 'auto',
                    display: 'block',
                    width: 'fit-content'
                }}>

                    <Typography id="range-slider" gutterBottom>
                    </Typography>
                    Filter par prix

                    <Slider
                        value={value}
                        onChange={rangeSelector}
                        valueLabelDisplay="auto"
                    />
                    Entre {value[0]} /- et {value[1]} /-

                </div>

                <div className="col-md-3 mt-3 ">
                    <input onChange={(e) => { setsearchkey(e.target.value) }} value={searchkey} type="text" className="form-control w-100" placeholder="Filtrer par marque" />
                </div>
                <div className="col-md-3 mt-3 ">
                    <select onChange={(e) => { setcategorie(e.target.value) }} value={categorie} className="form-control w-100 mt-2">

                        <option value="all">Toutes les catégories</option>
                        <optgroup label="Laptop">
                            <option style={{ color: '#888' }} value="Latop Gamers">Latop Gamers</option>
                            <option style={{ color: '#888' }} value="Laptop Pro">Laptop Pro</option>
                            <option style={{ color: '#888' }} value="Laptop en promotion">Laptop en promotion</option>
                        </optgroup>
                        <optgroup label="Pc de Bureau">
                            <option style={{ color: '#888' }} value="PC Gamers">PC Gamers</option>
                            <option style={{ color: '#888' }} value="PC  Pro">PC  Pro</option>
                            <option style={{ color: '#888' }} value="PC en promotion">PC en promotion</option>
                        </optgroup>



                    </select>
                </div>
                <div className="col-md-2 mt-3 ">
                    <button className="btn  w-100 mt-2" style={{ backgroundColor: '#870100', color: "white" }} onClick={() => { dispatch(filterComps(searchkey, categorie)) }}>Filtrer</button>
                </div>

            </div>

        </div>
    )
}
