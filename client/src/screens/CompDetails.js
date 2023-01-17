import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import "./style.css"
import Navbar from '../components/Navbar'
import { getCompById } from "../actions/compActions";
export default function CompDetails({ match }) {

    const [nom, setNom] = useState("");
    const [code, setCode] = useState("");
    const [image, setImage] = useState("");
    const [disp, setDisp] = useState("");
    const [prix, setPrix] = useState("");
    const [description, setDescription] = useState("");
    const [categorie, setCategorie] = useState("");

    const dispatch = useDispatch()

    const getcompbyidstate = useSelector(state => state.getCompByIdReducer)

    const { comp } = getcompbyidstate;

    useEffect(() => {

        if (comp) {
            if (comp._id == match.params.compid) {
                setNom(comp.nom);
                setCode(comp.code);
                setDisp(comp.disp);
                setPrix(comp.prix);
                setCategorie(comp.categorie);
                setDescription(comp.description);
                setImage(comp.image);
            }
            else {
                dispatch(getCompById(match.params.compid))

            }
        } else {
            dispatch(getCompById(match.params.compid))
        }

    }, [comp, dispatch]);


    return (
        <div>
            <Navbar />
            <div className="container-fluid mt-2 mb-3">
                <div className="row justify-content-center">
                    <div className="col-md-3 pr-2">
                        <div className="card">
                            <div className="demo">
                                <ul id="lightSlider">
                                    <li>
                                        <img src={image} />
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="card mt-2">
                            <h6 className="badge bg-dark" style={{ marginRight: "300px" }}>Commentaires (2)</h6>
                            <div className="d-flex flex-row">
                                <div className="stars"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                                <span className="ml-1 font-weight-bold">4.6</span>
                            </div>
                            <hr />

                            <div className="comment-section">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex flex-row align-items-center">
                                        <img src="https://i.imgur.com/o5uMfKo.jpg" className="rounded-circle profile-image" />
                                        <div className="d-flex flex-column ml-1 comment-profile">
                                            <span className="username" style={{ marginLeft: '5px' }}>Nour ali</span>
                                            <span style={{ marginLeft: '5px' }}>Good product!!</span>
                                        </div>
                                    </div>
                                    <div className="date"> <span className="text-muted">2 juin</span> </div>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex flex-row align-items-center">
                                        <img src="https://i.imgur.com/tmdHXOY.jpg" className="rounded-circle profile-image" />
                                        <div className="d-flex flex-column ml-1 comment-profile">
                                            <span className="username" style={{ marginLeft: '5px' }}>Mohamed ali</span>
                                            <span style={{ marginLeft: '5px' }}>I like it!</span>
                                        </div>
                                    </div>
                                    <div className="date"> <span className="text-muted">12 juin</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="card">

                            <div className="about">
                                <h1 className="font-weight-bold">{nom}</h1>
                                <h5 className="font-weight-bold">{code}</h5>
                                <h3 className="font-weight-bold">{prix} TND</h3>
                                <h1 className="font-weight-bold" style={disp == "En stock" ? { color: "#008000" } : { color: "#b83e3ee8" }}>{disp}</h1>
                                <h3 className="font-weight-bold">Catégorie: {categorie}</h3>

                            </div>
                            <div className="buttons"> <button className="btn btn-outline-warning btn-long cart">Ajouter au panier</button> <button className="btn btn-warning btn-long buy">Achetez-le maintenant</button> <button className="btn btn-light wishlist"> <i className="fa fa-heart"></i> </button> </div>
                            <hr />
                            <div className="product-description">

                                <div className="d-flex flex-row align-items-center"> <i className="fa fa-calendar-check-o"></i>&nbsp; <span className="ml-1">Livraison de Tunis, 15-45 jours</span> </div>
                                <div className="mt-2">
                                    <span className="font-weight-bold">Description</span>
                                    <p>{description}</p>

                                </div>

                            </div>
                        </div>
                        <div className="card mt-2">
                            <span className="badge bg-dark" style={{ marginRight: "700px" }}>Fonctionnalités</span>
                            <div className="similar-products mt-2 d-flex flex-row">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
