import React from 'react';
import '../../../css/User.css';
import { Link} from "@inertiajs/react";
//import { Link,useForm, usePage } from "@inertiajs/react";

const Post =  ({post}) =>  {

    /*const {flash} = usePage().props;
   
    const { delete: eliminate} = useForm();

    const [flashMessage, setflashMessage] = useState(flash.message);

    setTimeout(()=>{
        setflashMessage(null)
    }, 3000);

    const handleDelete = (id) => {
        eliminate(route('post_delete',id));
    };*/

    return (
        <div className='row md-9'>

            <div className='col-12 mx-auto'>
                <div className='row md-6'>
                    <h2>PUBLICACIONES</h2>
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
                <div className='card'>

                    <div className="card-header">
                        <h1>TITULO</h1>
                    </div>
                    <div className="card-body">
                        <h1>MENSAJE</h1>
                        <button type="button" className="btn btn-primary btn-">
                            <Link href={route('post_edit',post.id)} className="">
                                EDITAR<i className="fa fa-pencil-square" aria-hidden="true"></i>
                            </Link>
                        </button>
                                
                        <button type="button" className="btn btn-danger"  data-bs-toggle="modal" data-bs-target="#deletePost" id="delete">
                            ELIMINAR
                        </button>
                                
                        
                    </div>
                </div>
            
            </div>

        </div>
    )
}

export default Post;
