import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post, processing, errors} = useForm({
        title: "",
        content: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("poststore", {
            /*onSuccess: () => {
              alert("Usuario creado exitosamente");
            },*/
        });
    };

    return (
        <div className=''>

            <h2 className="form-title">CREAR PUBLICACION</h2>
            <form onSubmit={handleSubmit} className="registration-form">
                <div className=''>
                    <label className="form-label">Title</label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        className="form-control"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        placeholder="Titulo"
                        required
                    />
                    {errors.title && <div>{errors.title}</div>}
                </div>
                <div className=''>
                    <label className="form-label">Description</label>
                    <textarea
                        id="content"
                        name="content"
                        type="text"
                        className="form-control"
                        value={data.content}
                        onChange={(e) => setData('content', e.target.value)}
                        placeholder="Descripcion"
                        required
                    ></textarea>
                    {errors.content && <div>{errors.content}</div>}
                </div>
                
                <button type="submit" className="btn btn-primary" disabled={processing}>
                    GUARDAR
                </button>
                <a className="btn btn-danger btn-block" href={route('cancel_post')}>CANCELAR</a>
            </form>
        </div>
        
    );
}