import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/userActions'



export default function Navbar() {

    const userstate = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userstate;
    const dispatch = useDispatch()

    return (
        <nav className="navbar navbar-expand-lg shadow-lg p-3  mb-3 Navbar-row">
            <a className="navbar-brand" href="/" style={{ fontSize: "23px" }}><span style={{ color: 'red' }}>Comp</span>store</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    {currentUser ?

                        (

                            <li className="nav-item">
                                <a className="alink" href="/dashboard" >Tableau de bord</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                <a className="alink" href="/login" onClick={() => { dispatch(logoutUser()) }}>Se déconnecter</a>

                            </li>) :
                        <li className="nav-item">
                            <a className="alink" href="/login" >Connexion</a>
                        </li>
                    }



                </ul>
            </div>
        </nav>
    )
}
