import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function Comp({ comp }) {
    AOS.init()

    return (

        <div data-aos='zoom-in' className='shadow-lg p-3 mb-5 bg-white rounded h-100'>
            <div className="card-header " >
                <img className="card-img-top imgdiv" src={comp.image} />
                <div className="card-body ">
                    <h4 className="font-weight-bold pt-1" style={{ color: "black" }}>{comp.nom}</h4>
                    <p style={{ color: "#bfbfbf" }}>{comp.code}</p>
                    <div className="text-muted description">{comp.description}</div>
                    <div className="d-flex align-items-center product">
                        <span className="fa fa-star checked"></span>   <span className="fa fa-star checked"></span> <span className="fa fa-star checked"></span><span className="fa fa-star checked"></span> <span className="fa fa-star unchecked"></span><span className="fa fa-star unchecked"></span> </div>
                    <Link to={`compdetails/${comp._id}`} className="voir">Voir détails <i className='far fa-arrow-alt-circle-right'></i>
                        &nbsp;<i className='fa fa-arrow-circle-o-right' style={{ fontSize: '20px', color: "#00bcf2" }}></i>
                    </Link>
                    <div className="d-flex align-items-center justify-content-between pt-3">
                        <div className="d-flex flex-column">
                            {comp.categorie == "Laptop en promotion" || comp.categorie == "PC en promotion" ? <span style={{ color: 'red', textDecoration: 'line-through' }}>700,000 TND</span> : <span></span>}
                            <div className=" font-weight-bold">{comp.prix} TND</div>
                            <div className="rebate" style={comp.disp == "En stock" ? { color: "#008000" } : { color: "#b83e3ee8" }}>{comp.disp} </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>

    )
}
