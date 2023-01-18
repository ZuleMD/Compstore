import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loginUser } from "../actions/userActions";
import Error from "../components/Error"
import Loading from "../components/Loading"


export default function Loginpage() {
    const [email, setemail] = useState('')
    const [mdp, setmdp] = useState('')

    const loginstate = useSelector((state) => state.loginUserReducer)
    const { loading, error } = loginstate

    const dispatch = useDispatch()

    useEffect(() => {

        if (localStorage.getItem('currentUser')) {
            window.location.href = '/'
        }

    }, [])
    function login() {
        const user = { email, mdp }

        if (email == "" || mdp == "") {
            alert("champs vide!!")
        } else {
            dispatch(loginUser(user))

        }
    }

    return (

        <div className='row justify-content-center'>
            <div className="col-sm-4" style={{ marginTop: "160px" }}>

                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title text-center mb-4 mt-1" style={{ fontSize: '30px', color: "black" }}>Connexion</h4>
                        <hr />
                        <p className="text-success text-center">Veuillez saisir votre adresse e-mail et mot de passe pour accéder à votre espace </p>

                        {loading && (<Loading />)}
                        {error && (<Error error="Informations invalides" />)}
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
                            <button onClick={login} className="btn btnauth rounded"> Connexion  </button>
                        </div>
                        <p className="text-center"><a href="/register" className="btn">Créer mon compte</a></p>
                    </div>
                </div>

            </div>
        </div>


    )
}