import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { editComp, getCompById } from "../../../actions/compActions";
import Error from "../../../components/Error"
import Loading from "../../../components/Loading"
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

export default function Editcomp({ match }) {
    const history = useHistory();

    const [nom, setNom] = useState("");
    const [code, setCode] = useState("");
    const [image, setImage] = useState("");
    const [disp, setDisp] = useState("");
    const [prix, setPrix] = useState("");
    const [description, setDescription] = useState("");
    const [categorie, setCategorie] = useState("");

    const dispatch = useDispatch()


    const getcompbyidstate = useSelector(state => state.getCompByIdReducer)

    const { comp, error, loading } = getcompbyidstate;

    const editcompstate = useSelector((state) => state.editCompReducer)
    const { editloading } = editcompstate;

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


    function formHandler(e) {

        e.preventDefault();

        const editedcomp = {
            _id: match.params.compid,
            nom,
            code,
            disp,
            image,
            description,
            categorie,
            prix,
        }


        dispatch(editComp(editedcomp))
        swal("", "Produit modifié avec succès", "success");
        history.push('/dashboard/compslist');
        window.location.reload()

    }


    return (
        <div className='row justify-content-center'>
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <div className="card-title">Modifier un produit</div>
                        {loading && (<Loading />)}
                        {error && (<Error error='Something went wrong' />)}
                        {editloading && (<Loading />)}

                    </div>
                    <div className="card-body">

                        <form className="row" onSubmit={formHandler}>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label >Nom/Marque</label>
                                    <input type="text" className="form-control" placeholder="Nom/Marque" value={nom} onChange={(e) => {
                                        setNom(e.target.value);
                                    }} />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label >Code</label>
                                    <input type="text" className="form-control" placeholder="Code" value={code} onChange={(e) => {
                                        setCode(e.target.value);
                                    }} />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label >Prix</label>
                                    <input type="text" className="form-control" placeholder="Prix" value={prix} onChange={(e) => {
                                        setPrix(e.target.value);
                                    }} />
                                </div>
                            </div>

                            <div className="col-md-6">

                                <div className="form-group">
                                    <label >Catégorie</label>
                                    <select className="form-control" value={categorie} onChange={(e) => {
                                        setCategorie(e.target.value);
                                    }}>
                                        <option>Latop Gamers</option>
                                        <option>Laptop Pro</option>
                                        <option>Laptop en promotion</option>
                                        <option>PC Gamers</option>
                                        <option>PC  Pro</option>
                                        <option>PC en promotion</option>

                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">

                                <div className="form-group">
                                    <label >Disponibilité</label>
                                    <select className="form-control" name="disp" value={disp} onChange={(e) => {
                                        setDisp(e.target.value);
                                    }}>
                                        <option>En stock</option>
                                        <option>Epuisé</option>

                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label >Image</label>
                                    <input type="text" className="form-control" placeholder="Image" value={image} onChange={(e) => {
                                        setImage(e.target.value);
                                    }} />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea className="form-control" rows="5" name="description" value={description} onChange={(e) => {
                                        setDescription(e.target.value);
                                    }}>

                                    </textarea>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <button className="btn" style={{ backgroundColor: '#008000', color: 'white' }}>Modifier</button>
                            </div>
                        </form>


                    </div>


                </div>

            </div>
        </div>
    )
}
