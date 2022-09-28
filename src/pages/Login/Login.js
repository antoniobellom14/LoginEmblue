import React, { useState } from 'react';
import Input from './components/Input/Input';
import Label from './components/Label/Label';
import Title from './components/Title/Title';
import './login.css';

const Login = () => {

    const [user, setUser] = useState ('');
    const [password,setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleChange=(name, value)=>{
        if(name === 'usuario') {
            setUser(value)
        }else{
            if(value.length > 6){
                setPasswordError(true);
            }else{
                setPasswordError(false);
                setPassword(value);
            }
            
        }
    };
    const ifMatch=(param)=>{
        if(param.user.length > 0  && param.password.length > 0){
            if(param.user === 'antonio' && param.password === '123456'){
                const {user,password} = param;
                let ac = {user,password};
                let account = JSON.stringify(ac);
                localStorage.setItem('account',account);
                setIsLogin(true);
            }else{
                setIsLogin(false);
            }
        }else{
            setIsLogin(false);
        }
    }

    const handleSubmit=()=>{
        let account = {user,password}
        if(account){
           ifMatch(account)
        }
    
    }

    return (
        <div className='login-container'>
            <Title text='Bienvenidos al Panel' />
            <Label text='Usuario' />
            <Input
                attribute={{
                    id: "usuario",
                    name: "usuario",
                    placeholder: "Ingrese su usuario",
                    type: "text"
                }}
                handleChange={handleChange}
            />
            <Label text='Contraseña' />
            <Input
                attribute={{
                    id: "contraseña",
                    name: "contraseña",
                    placeholder: "Ingrese su contraseña",
                    type: "password"
                }}
                handleChange={handleChange}
                param={passwordError}
            />

            {passwordError && 
            <label className='label-error'>
                contraseña invalida
            </label>}

            <button onClick={handleSubmit}>
                Ingresar
            </button>
            

        </div>
    )
};

export default Login