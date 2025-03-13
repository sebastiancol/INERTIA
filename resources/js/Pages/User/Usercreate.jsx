import { useState } from 'react';
import '../../../css/User.css';
//import axios from 'axios';

export const USERCREATE = () => {

  let [users,setUsers] = useState({})

  const [formData, setFormData] = useState({
    document: 1,
    firstName: '',
    lastName: '',
    address: '',
    phone: 1,
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const newdata = {...formData}
    newdata[event.target.id]=event.target.value
    setFormData(newdata);

    /*users = {
      document: formData.document,
      first_name: formData.firstName,
      last_name: formData.lastName,
      address: formData.address,
      phone: formData.phone,
      email: formData.email,
      password: formData.password
    }*/

    setUsers({...users})
    //console.log(newdata);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/users',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(users),
       
      });
            
      if(!response.ok ){
        throw new Error(`Error! status:${response.status}  `)
        
      }

     
    } catch (error) {
      console.log(error);
    } 

  };

  /*useEffect(() => {
    const apifetch = async ()=>{
        try {
          const response = await fetch('http://127.0.0.1:8000/api/v1/users',{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(users),
            document: formData.document,
            firstName: formData.firstName,
            lastName: formData.lastName,
            address: formData.address,
            phone: formData.phone,
            email: formData.email,
            password: formData.password,
          });
          
          if(!response.ok   ){
            throw new Error(`Error! status:${response.status} `)
          }
          //const result = await response.json();
          setUsers([...response])
        } catch (error) {
          console.log(error);
        } 
    }  
   apifetch();
  }, [])*/

  return (
    <div className="container">
      
      <div className='itemb'>

        <h2 className="form-title">CREAR USUARIO</h2>
      
        <form onSubmit={handleSubmit}  className="registration-form">
          <div className="form-group">
            <label htmlFor="document" className="form-label">Documento</label>
            <input
              type="number"
              id="document"
              name="document"
              value={formData.document}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName" className="form-label">Nombre</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="form-label">Apellido</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address" className="form-label">Direccion</label>
            <textarea
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">Telefono</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          
          <button type="submit" onSubmit={handleSubmit} className="form-button">CREAR USUARIO</button>
        </form>
      </div>
      
    </div>
  )
}

