import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post, errors } = useForm({
        title: '',
        content: '',
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
            <form onSubmit={handleSubmit}>
                <div className=''>
                    <label htmlFor="description" className="form-label">Title</label>
                    <input
                        id="title"
                        type="text"
                        className="form-control"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        placeholder="Titulo"
                        pattern="[A,Z],[a,z]"
                        required
                    />
                    {errors.title && <div>{errors.title}</div>}
                </div>
                <div className=''>
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        id="description"
                        className="form-control"
                        value={data.content}
                        onChange={(e) => setData('content', e.target.value)}
                        placeholder="Descripcion"
                        required
                    ></textarea>
                    {errors.content && <div>{errors.content}</div>}
                </div>
                
                <button type="submit">Create</button>
            </form>
        </div>
        
    );
}