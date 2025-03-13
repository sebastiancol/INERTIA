import React from 'react';
import '../../../css/User.css';

const User = ({users}) =>{
        
    return (
        <div className='container'>

            <div className='item'>

                <h2>LISTADO USUARIOS</h2>
                <form  method="GET">
                    <div className="form-control ">
                    <input type="text" className="form-control"  name="busqueda" placeholder="buscar usuario" />
                    <br/>
                    <input type="submit" className="btn btn-primary" name="buscador"/>
                    </div>
                </form>
            
                <table className='table table-center'>
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
                                    <button type="button" className="btn btn-primary btn-">
                                        <a className="" href="{{ route('user_edit', $item->id) }}">EDITAR<i className="fa fa-pencil-square" aria-hidden="true"></i></a>
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
                                                        <a className="" href="">CONFIRMAR<i className="fa fa-pencil-square" aria-hidden="true"></i></a>
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
    )
}

export default User;