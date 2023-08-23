import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import "./ProjectsAdminLogin.css";
import Loading from '../../../Components/Loading';

function ProjectsAdminLogin() {

    const usernameRef = useRef();
    const passwordRef = useRef();
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        }

        try {
            setLoading(true);
            const response = await axios.post('/api/projects/admin/login', data);
            if(response.status === 200) {
                localStorage.setItem("projectAdmin", JSON.stringify(response.data));
                setLoading(false);
                history.push('/project-admin');
            }
        } catch (err) {
            setLoading(false);
            alert('Something went wrong!');
            console.log(err);
        }

    }

    return (
        <div className='projects_admin_login'>
            <div className='pa_login_content'>
                <form method='POST' onSubmit={handleFormSubmit} >
                    <h1 className='pa_login_title'>Projects Admin Login</h1>
                    <div class="form-group">
                        <label className='pa_login_label' for="exampleInputUsername1">Username</label>
                        <input 
                            ref={usernameRef}
                            type="text" 
                            class="form-control pa_login_input" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder=""
                            required
                            autoComplete='off' />
                    </div>
                    <div class="form-group">
                        <label className='pa_login_label'  for="exampleInputPassword1">Password</label>
                        <input 
                            ref={passwordRef}
                            type="password" 
                            class="form-control pa_login_input" 
                            id="exampleInputPassword1" 
                            placeholder=""
                            required
                            autoComplete='off' />
                    </div>
                    <div className='pa_login_btn_cover'>
                        <button type="submit" class="btn btn-primary pa_login_btn">{
                            loading ?
                            <div style={{ width: '15%', margin: '0 auto' }} ><Loading type="spin" color="#fff" width="32px" height="32px" /></div> :
                            'Login'
                        }</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProjectsAdminLogin