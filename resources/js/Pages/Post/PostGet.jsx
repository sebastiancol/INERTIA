import React, { useState } from 'react';
import '../../../css/User.css';
import { Link,useForm, usePage } from "@inertiajs/react";

const Post =  ({post}) =>  {

    const {flash} = usePage().props;
   
    const { delete: eliminate} = useForm();

    const [flashMessage, setflashMessage] = useState(flash.message);

    setTimeout(()=>{
        setflashMessage(null)
    }, 3000);

    const handleDelete = (id) => {
        eliminate(route('post_delete',id));
    };

    let button = document.getElementById('edit');

    return (
        <div className='row md-9'>

            <div className='col-12 mx-auto'>
            {flashMessage && <div className="alert alert-success" role="alert">{flashMessage}</div> }
                <div className='card'>

                    <div className="card-body">
                            
                            <h2>PUBLICACIONES</h2>
                            <div className='row md-6'>
                                <form  method="GET">
                                    <div className="form-control ">
                                    <input type="text" className="form-control"  name="busqueda" placeholder="buscar usuario" />
                                    <br/>
                                    <input type="submit" className="btn btn-primary" name="buscador"/>
                                    </div>
                                </form>
                                <button type="button" className="btn btn-create" >
                                                            
                                    <Link href={route('post_create')} className="">
                                        Crear Post
                                    </Link>
                                    
                                </button>    
                            </div>
                            <div className='row md-6'>
                                <table className='table text-center text-uppercase table-bordered'>
                                        <thead>
                                            <tr>
                                                
                                                <th>TITULO</th>
                                                <th>MENSAJE</th>
                                                <th>FECHA_CREACION</th>
                                                <th>FECHA_ACTUALIZACION</th>
                                                <th scope="col">OPERACIONES</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {post.map((posts,element)=>(

                                                <tr key={element}>
                                                    <td>{posts.title}</td>
                                                    <td>{posts.content}</td>
                                                    <td>{posts.created_at = Date().toLocaleString() }</td>
                                                    <td>{posts.updated_at = Date().toLocaleString()}</td>
                                                    <td>
                                                        { /*!posts.user_id ? button.setAttribute('disabled', '') : button.removeAttribute('disable')*/  }                                                       
                                                        <button type="button" className="btn btn-secondary" id='edit' >
                                                            
                                                            <Link href={route('post_edit',posts.id)} className="">
                                                                EDITAR<i className="fa fa-pencil-square" aria-hidden="true"></i>
                                                            </Link>
                                                        </button>
                                                        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target={`#deleteUser${posts.id}`}>
                                                            ELIMINAR
                                                        </button>
                                                        <div className="modal fade" data-animation="slideInOutLeft" aria-labelledby="modal-title" id={`deleteUser${posts.id}`}>
                                                            <div className="modal-dialog">
                                                                <div className="modal-content">
                                                                    <div className="modal-body " >
                                                                        <p>¿DESEA ELIMINAR EL POST <strong>{`${posts.title}`}</strong>?</p>
                                                                    </div>
                                                                    <div className="modal-footer">
                                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">CANCELAR</button>
                                                                        <button type="button" className="btn btn-primary" onClick={() => handleDelete(posts.id)}>
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

export default Post;
