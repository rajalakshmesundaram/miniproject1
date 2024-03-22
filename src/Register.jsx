import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const navigate= useNavigate()
    const[message , setMessage]=useState('')
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://miniproject-backend-j8tq.onrender.com/api/register', formData)
            .then((res)=>setMessage(res.data.message))
            
            console.log(response.data);

            
        } catch (error) {
            console.error('Error:', error);
        }
        navigate('/login')
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit}>
                <h1>Registration form</h1>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">UserName:</label>
                    <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                 <h3>{message}</h3>
            </form>
            
        </div>
    );
};
