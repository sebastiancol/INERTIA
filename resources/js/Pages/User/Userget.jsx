import React, { useState } from 'react';
import '../../../css/User.css';
import { Link,useForm, usePage } from "@inertiajs/react";


const User = ({users}) =>{

    const {flash} = usePage().props;

    const { delete: eliminate} = useForm();

    const [flashMessage, setflashMessage] = useState(flash.message);

    setTimeout(()=>{
        setflashMessage(null)
    }, 3000);

    const handleDelete = (id) => {
        eliminate(route('user_delete',id));
    };
        
    return (
        <div className='row md-9'>

            <div className='col-12 mx-auto'>
                {flashMessage && <div className="alert alert-success" role="alert">{flashMessage}</div> }
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
                                                    
                                                    <Link href={route('user_edit',user.id)} className="">
                                                       EDITAR<i className="fa fa-pencil-square" aria-hidden="true"></i>
                                                    </Link>
                                                </button>
                                                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target={`#deleteUser${user.id}`}>
                                                    ELIMINAR
                                                </button>
                                                <div className="modal fade" data-animation="slideInOutLeft" aria-labelledby="modal-title" id={`deleteUser${user.id}`}>
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-body " >
                                                                <p>¿DESEA ELIMINAR EL USUARIO <strong>{`${user.name}`}</strong>?</p>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">CANCELAR</button>
                                                                <button type="button" className="btn btn-primary" onClick={() => handleDelete(user.id)}>
                                                                    CONFIRMAR <i className="fa fa-trash" aria-hidden="true"></i>
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