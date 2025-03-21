import React from 'react';
import '../../../css/User.css';
import { useForm } from "@inertiajs/react";

const USEREDIT = ({user}) =>{
  /*user.map((users)=>{
  })
  console.log(user)*/
  
    const { data, setData, put, processing, errors } = useForm({
      name: "",
      email: "",
      password: "",
    });

    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      put("userupdate", [user.id,user.name,user.email], {
        onSuccess: () => {
          alert("Usuario actualizado exitosamente");
        },
      });
    };
  
    return (
      <div className="container">
        
        <div className='itemb'>
  
          <h2 className="form-title">EDITAR USUARIO</h2>
          
            <form onSubmit={handleSubmit} className="registration-form">
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={user.name}
                onChange={(e) => setData("name", e.target.value)}
                required
              />
              {errors.name && <div className="text-danger">{errors.name}</div>}
            </div>
    
            <div className="mb-3">
              <label className="form-label">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={user.email}
                onChange={(e) => setData("email", e.target.value)}
                required
              />
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </div>
    
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                value={user.password}
                onChange={(e) => setData("password", e.target.value)}
                required
              />
              {errors.password && <div className="text-danger">{errors.password}</div>}
            </div>
    
            <button type="submit" className="btn btn-primary" disabled={processing}>
              Guardar
            </button>
            </form>
          
        </div>
        
      </div>
    )
}

export default USEREDIT;