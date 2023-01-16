import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Route, Switch, useHistory, Link } from 'react-router-dom';

import Navbar from '../../components/Navbar'
import swal from 'sweetalert';
import './assetsDash/dash.css'
import Compslist from "./Compslist";
import Addcomp from "./Addcomp";
import Editcomp from "./Editcomp";


export default function Adminscreen() {


    const userstate = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userstate;
    const dispatch = useDispatch()
    const history = useHistory();

    useEffect(() => {

        if (!currentUser) {
            swal("Oops", "Vous n'êtes pas un administrateur ou vous devez d'abord vous connecter!", "error");
            history.push('/');

        }
    }, [])



    return (
        <div className="wrapper">

            <div className="main-header" >


                <Navbar />


            </div>


            <div className="sidebar">

                <div className="sidebar-background"></div>
                <div className="sidebar-wrapper scrollbar-inner">
                    <div className="sidebar-content">

                        <ul className="nav">
                            <li className="nav-item active mt-5">
                                <Link to={'/dashboard'} >
                                    <i className="fas fa-home"></i>
                                    <p>Tableau de bord</p>
                                </Link>
                            </li>
                            <li className="nav-section">
                                <span className="sidebar-mini-icon">
                                    <i className="fa fa-ellipsis-h"></i>
                                </span>
                                <h4 className="text-section">Actions</h4>
                            </li>
                            <li className="nav-item">
                                <a data-toggle="collapse" href="#base">
                                    <i className="fas fa-layer-group"></i>
                                    <p>Gestion produit</p>
                                    <span className="caret"></span>
                                </a>
                                <div className="collapse" id="base">
                                    <ul className="nav nav-collapse">
                                        <li>
                                            <Link to={'/dashboard/addcomp'} >
                                                <span className="sub-item">Créer</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/dashboard/compslist'} >
                                                <span className="sub-item">Lister</span>
                                            </Link>
                                        </li>


                                    </ul>
                                </div>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>

            <div className="main-panel">
                <div className="content">
                    <div className="page-inner">
                        <div className="page-header mt-4">
                            <h4 className="page-title">Tableau de bord</h4>

                        </div>

                        <Switch>
                            <Route path="/dashboard/compslist" component={Compslist} exact />
                            <Route path="/dashboard/addcomp" component={Addcomp} exact />
                            <Route path="/dashboard/editcomp/:compid" component={Editcomp} exact />

                        </Switch>
                    </div>
                </div>

            </div>


        </div>
    )
}
