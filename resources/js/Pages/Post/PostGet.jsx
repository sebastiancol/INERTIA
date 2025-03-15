import React from 'react';
//import { Link, usePage } from '@inertiajs/react';

const PostGet =  () =>  {
    //const { posts } = usePage().props;

    return (
        <div className=''>

            <div className=''>

                <h2>PUBLICACIONES</h2>
                <form  method="GET">
                    <div className="form-control ">
                    <input type="text" className="form-control"  name="busqueda" placeholder="buscar usuario" />
                    <br/>
                    <input type="submit" className="btn btn-primary" name="buscador"/>
                    </div>
                </form>

                <div className='card'>

                    <div className="card-header">
                        <h1>TITULO</h1>
                    </div>
                    <div className="card-body">
                        <h1>MENSAJE</h1>
                        <button type="button" className="btn btn-primary btn-">
                            <a className="" href="{{ route('user_edit', $item->id) }}">EDITAR<i className="fa fa-pencil-square" aria-hidden="true"></i></a>
                        </button>
                                
                        <button type="button" className="btn btn-danger"  data-bs-toggle="modal" data-bs-target="#deleteTicket" id="delete">
                            ELIMINAR
                        </button>
                                
                        
                    </div>
                </div>
            
            </div>

        </div>
    )
}

export default PostGet;
