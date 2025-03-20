import React from 'react';
import '../../../css/User.css';
import { Link } from "@inertiajs/react";


const User = ({users}) =>{
        
    return (
        <div className='row md-9'>

            <div className='col-12 mx-auto'>

                <div className='card'>
                    <div className='card-body'>
                    <h2>LISTADO USUARIOS</h2>
                        <div className='row md-6'>
                            <form  method="GET">
                                <div className="form-control ">
                                    <input type="text" className="form-control"  name="busqueda" placeholder="buscar usuario" />
                                    <br/>
                                    <input type="submit" className="btn btn-primary" name="buscador"/>
                                    <br/>
                                </div>
                            </form>
                            <button type="button" className="btn btn-create" >
                               
                                <Link href={route('user_create')} className="">
                                    Crear Usuario
                                </Link>
                               
                            </button>
                                
                        </div>
                        <div className='row md-6'>

                            <table className='table text-center text-uppercase table-bordered'>
                                <thead>
                                    <tr>
                                        
                                        <th>NOMBRES</th>
                                        <th>CORREO</th>
                                        <th scope="col">OPERACIONES</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user,element)=>(

                                        <tr key={element}>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>
                                                <button type="button" className="btn btn-secondary">
                                                    
                                                    <Link href={route('user_update',user.id)} className="btn btn-primary mb-3">
                                                       EDITAR<i className="fa fa-pencil-square" aria-hidden="true"></i>
                                                    </Link>
                                                </button>
                                                
                                                <button type="button" className="btn btn-danger"  data-bs-toggle="modal" data-bs-target="#deleteTicket" id="delete">
                                                    ELIMINAR
                                                </button>
                                                
                                                <div className="modal fade" data-animation="slideInOutLeft" aria-labelledby="modal-title" id="deleteTicket">
                                                                                
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                        
                                                            <div className="modal-body">
                                                                <p>¿DESEA ELIMINAR EL USUARIO?</p>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">CANCELAR</button>
                                                                <button type="button" className="btn btn-primary">
                                                                    <a className="" href={route('user_delete',user.id)}>CONFIRMAR<i className="fa fa-pencil-square" aria-hidden="true"></i></a>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    
                                </tbody>
                            </table>
                        </div>

                    </div>
                    
                   
            
                </div>
               
            </div>

        </div>
    )
}

export default User;