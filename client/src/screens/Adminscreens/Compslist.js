import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table';
import tableIcons from "./MaterialTableIcons";
import { getAllComps, deleteComp } from '../../actions/compActions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export default function Compslist() {


    const dispatch = useDispatch()
    const compsstate = useSelector(state => state.getAllCompsReducer)
    const { compsarr, error, loading } = compsstate

    useEffect(() => {
        dispatch(getAllComps())
    }, [])






    return (
        <div className="row">
            <div className="col-md-12" >

                <MaterialTable
                    columns={[

                        {
                            title: <h1 className='text-uppercase text-secondary '>Produits</h1>
                            , render: (comp) => {
                                return (
                                    <div className="d-flex px-2 py-1">
                                        <div>
                                            <img src={comp.image} className="avatar avatar-sm me-3" alt="product" />
                                        </div>
                                        <div className="d-flex flex-column justify-content-center">
                                            <h3 className="mb-0 text-sm">{comp.nom}</h3>
                                            <p style={{ color: "#bfbfbf" }}>{comp.code}</p>
                                        </div>
                                    </div>
                                )
                            }
                            ,
                            customFilterAndSearch: (term, comp) => ((comp.nom).toLowerCase()).indexOf(term.toLowerCase()) != -1


                        },
                        {
                            title: <h1 className="text-uppercase text-secondary">Disponibilité</h1>
                            , render: (comp) => {
                                return (
                                    <p className="text-xs" style={comp.disp == "En stock" ? { color: "#008000", marginLeft: "30px" } : { color: "#b83e3ee8", marginLeft: "30px" }}>{comp.disp}</p>)
                            }
                            ,

                            customFilterAndSearch: (term, comp) => ((comp.disp).toLowerCase()).indexOf(term.toLowerCase()) != -1


                        },

                        {
                            title: <h1 className="text-center text-uppercase text-secondary ">Déscription</h1>
                            , render: (comp) => {
                                return (
                                    <p className="text-xs  ">{comp.description}</p>)
                            },



                        },
                        {
                            title: <h1 className="text-center text-uppercase text-secondary  ">Prix</h1>
                            , render: (comp) => {
                                return (
                                    <p className="text-xs  ">{comp.prix}</p>)
                            }


                        },
                        {
                            title: <h1 className="text-center text-uppercase text-secondary  ">Catégorie</h1>
                            , render: (comp) => {
                                return (
                                    <p className="text-xs  ">{comp.categorie}</p>)
                            },
                            customFilterAndSearch: (term, comp) => ((comp.categorie).toLowerCase()).indexOf(term.toLowerCase()) != -1



                        },
                        {
                            title: <h1 className="text-secondary opacity-7"></h1>
                            , render: comp => {
                                return (
                                    <div>
                                        <Link to={`editcomp/${comp._id}`} style={{ color: '#ff9800' }} >
                                            <i className="far fa-edit" ></i>
                                        </Link>

                                        <button className='btn'> <i className="far fa-trash-alt" style={{ color: 'red' }} onClick={() => { dispatch(deleteComp(comp._id)) }}></i></button>

                                    </div>)
                            },

                        },



                    ]

                    }
                    data={compsarr}
                    icons={tableIcons}
                    title={<h2>Liste produits</h2>}
                    options={{
                        padding: "dense",
                        pageSize: 2,
                        pageSizeOptions: [2, 3],

                    }}

                />
            </div>
        </div>

    )
}
