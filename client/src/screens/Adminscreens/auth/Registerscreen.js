import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../../actions/userActions'
import Error from '../../../components/Error'
import Loading from '../../../components/Loading'
import swal from 'sweetalert';


export default function Registerscreen() {
    const [nom, setnom] = useState('')
    const [email, setemail] = useState('')
    const [mdp, setmdp] = useState('')
    const [cmdp, setcmdp] = useState('')
    const registerstate = useSelector((state) => state.registerUserReducer)
    const { error, loading, success } = registerstate

    const dispatch = useDispatch()
    function register() {
        if (nom == "" || email == "" || mdp == "" || cmdp == "") {
            alert("champs vide!!")
        } else if (mdp != cmdp) {
            alert("les mots de passe ne correspondent pas")
        }
        else {
            const user = {
                nom,
                email,
                mdp
            }
            console.log(user);
            dispatch(registerUser(user))
            swal("", "Vous êtes inscrit avec succès", "success");


        }
    }

    return (
        <div className='row justify-content-center'>
            <div className="col-sm-4" style={{ marginTop: "50px" }}>

                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title text-center mb-4 mt-1" style={{ fontSize: '30px', color: "black" }}>S'inscrire</h4>
                        <hr />
                        <p className=" text-center" style={{ color: '#008000' }}>Créez un nouveau compte gratuitement</p>

                        {loading && (<Loading />)}
                        {error && (<Error error="Informations invalides" />)}
                        <div className="form-group">
                            <div className="input-group">

                                <input className="form-control" placeholder="Nom" type="email" value={nom} onChange={(e) => { setnom(e.target.value) }} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">

                                <input className="form-control" placeholder="Email" type="email" value={email} onChange={(e) => { setemail(e.target.value) }} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">

                                <input className="form-control" placeholder="Mot de passe" type="password" value={mdp} onChange={(e) => { setmdp(e.target.value) }} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">

                                <input className="form-control" placeholder="Confirmez le mot de passe" type="password" value={cmdp} onChange={(e) => { setcmdp(e.target.value) }} />
                            </div>
                        </div>
                        <div className="form-group">
                            <button onClick={register} className="btn btnauth rounded"> S'inscrire  </button>
                        </div>
                        <p className="text-center"><a href="/login" className="btn">Déjà inscrit?</a></p>
                    </div>
                </div>

            </div>
        </div>
    )
}