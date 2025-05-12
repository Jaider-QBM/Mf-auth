import React, { useState, useEffect } from "react";
import { useForm, Controller } from 'react-hook-form'

import { navigateToUrl } from 'single-spa';
import { users } from '../mockUsers';
import { store, loginSuccess } from '@MyBodytech/mf-store-auth';

import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import CircularProgress from '@mui/material/CircularProgress'
import { InputAdornment, IconButton, Box, Grid } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import FormHelperText from '@mui/material/FormHelperText'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Alert from '@mui/material/Alert'

import { emailRegex } from '../utils/mic'


const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [messageError, setMessageError] = useState('')
    const [isViewOtp, setIsViewOtp] = useState(false)
    const [loadingLoginForm, setLoadingLoginForm] = useState(false)

    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => setShowPassword(!showPassword)
    const handleMouseDownPassword = () => setShowPassword(!showPassword)

    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        setLoadingLoginForm(true)
        const user = users.find(u => u.email === data.email && u.password === data.password);
        if (user) {
            const fakeToken = 'este_es_un_token_quemado_pero_simula_uno_real';
            localStorage.setItem('authToken', fakeToken);
            setCookie('user', JSON.stringify(user), 1);
            store.dispatch(loginSuccess({
                user,
                token: fakeToken,
            }));
            navigateToUrl('/home');
        } else {
            setMessageError('Combinación del nombre de usuario y contraseña no válida');
            setLoadingLoginForm(false)
        }
    };

    function setCookie(name, value, days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        let expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    return (
        <>
            {!isViewOtp ? (
                <Card elevation={0} style={{ margin: 20 }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <CardContent style={{ paddingLeft: 0, paddingRight: 0 }}>
                            <FormControl
                                variant="outlined"
                                fullWidth
                                sx={{ my: 1 }}
                            >
                                <Controller
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            id="outlined-email"
                                            label="Nombre de usuario"
                                            variant="outlined"
                                            placeholder="¿Cuál es tu nombre de usuario?"
                                            size="small"
                                            sx={{
                                                width: '100%', 
                                                fontSize: '14px',
                                                '& .MuiInputBase-input': {
                                                    fontSize: '14px',
                                                    padding: '8px',
                                                },
                                                '& .MuiInputLabel-root': {
                                                    fontWeight: 300,
                                                    color: '#6C6C6C', 
                                                    fontSize: '14px',
                                                }
                                            }}
                                            onChange={(e) => {
                                                field.onChange(e.target.value.trim());
                                            }}
                                        />
                                    )}
                                    control={control}
                                    defaultValue=""
                                    error={!!errors.email}
                                    name="email"
                                    rules={{ required: true, pattern: emailRegex }}
                                />
                                <FormHelperText
                                    error={!!errors.email}
                                    sx={{ 
                                        fontSize: '10px', 
                                        marginLeft: 0,
                                        padding: '0px 0px 0px 14px',
                                        color: '#FF0000',
                                        fontWeight: 300
                                    }}
                                >
                                    {errors.email ? "Error con el nombre de usuario" : ''}
                                </FormHelperText>
                            </FormControl>

                            <FormControl
                                variant="outlined"
                                fullWidth
                                sx={{ my: 0.5}}
                            >
                                <Controller
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            id="outlined-password"
                                            label="Contraseña"
                                            placeholder="¿Cuál es tu contraseña?"
                                            size="small"
                                            variant="outlined"
                                            type={showPassword ? 'text' : 'password'}
                                            sx={{
                                                width: '100%', 
                                                fontSize: '14px',
                                                '& .MuiInputBase-input': {
                                                    fontSize: '14px',
                                                    padding: '8px',
                                                },
                                                '& .MuiInputLabel-root': {
                                                    fontWeight: 300,
                                                    color: '#6C6C6C', 
                                                    fontSize: '14px',
                                                }
                                            }}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                            onChange={(e) => {
                                                field.onChange(e.target.value.trim());
                                            }}
                                        />
                                    )}
                                    control={control}
                                    defaultValue=""
                                    error={!!errors.password}
                                    name="password"
                                    rules={{ required: true }}
                                />
                                <FormHelperText
                                    error={!!errors.password}
                                    sx={{ 
                                        fontSize: '10px', 
                                        marginLeft: 0,
                                        padding: '0px 0px 0px 14px',
                                        color: '#FF0000',
                                        fontWeight: 300,
                                    }}
                                >
                                    {errors.password ? "Error con la contraseña" : ''}
                                </FormHelperText>
                            </FormControl>

                            {messageError && (
                                <Alert severity="error" sx={{ fontSize: '12px' }}>
                                    {messageError}
                                </Alert>
                            )}
                        </CardContent>


                        <CardActions style={{ justifyContent: 'center' }}>

                            <Button
                                style={{ width: '40vw', maxWidth: '160px'}}
                                color="black"
                                size="large"
                                type="submit"
                                variant="contained"
                                sx={{
                                    backgroundColor: '#3c3c3b',
                                    textTransform: 'none',
                                    borderRadius: '7px',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: '#20201F',
                                        opacity: 0.8,
                                    },
                                    width: '100%',
                                    height: '40px',
                                    fontSize: '13px',
                                }}
                            >
                                {loadingLoginForm
                                    ? (
                                        <CircularProgress size={30} color="secondary" />
                                    )
                                    : (
                                        "Ingregar"
                                    )}
                            </Button>
                        </CardActions>
                    </form>
                </Card>) : (
                <Box>
                    <p style={{ margin: '25px 0 15px 0', textAlign: 'center' }}>
                        Ingresa el codigo que te llego a tu correo
                    </p>
                    <OTPInput otp={codeOtp} setOtp={setCodeOtp} num={6} />
                    {sendCode && <Alert style={{ marginTop: '10px' }} severity="success">{'Se envio correctamente'}</Alert>}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Button disabled={sendCode} onClick={handleGetResendOtpTokenMyBodyTech} style={{ color: sendCode ? '#c3c3c3' : '#004C99', cursor: 'pointer' }}>
                            Volver a enviar el codigo
                        </Button>
                        {sendCode && <p style={{ margin: '0', color: '#c3c3c3' }}><b>{formattedTime()}</b></p>}
                    </div>
                    {messageError && <Alert severity="error">{messageError}</Alert>}
                    <CardActions style={{ justifyContent: 'center', margin: '5px 0 0 0' }}>
                        <Button
                            style={{ width: '40vw', maxWidth: '160px' }}
                            color="black"
                            size="large"
                            className="btnLogin"
                            onClick={handleValidationOtp}
                            variant="contained"
                        >
                            {loadingOtpForm
                                ? (
                                    <CircularProgress size={30} color="secondary" />
                                )
                                : (
                                    'Enviar'
                                )}
                        </Button>
                    </CardActions> 
                </Box>
            )}
        </>
    )
}

export default SignInForm;