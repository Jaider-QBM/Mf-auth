import React from "react";

//UI
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'

import {
    AuthFormContainer,
    AuthFormContent,
} from './AuthForm.style'

// logos
import {
    OperationLogo,
    BizzLogo,
    VirtualLogo,
    MedicalLogo,
    TrainerLogo,
    ComercialLogo
} from '../assets/icons/config'
import AnimationSide from './AnimationSide'

// slides
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

export function AuthForm({ children, }) {
    const logos = [
        OperationLogo,
        BizzLogo,
        VirtualLogo,
        TrainerLogo,
        ComercialLogo,
        MedicalLogo
    ]

    return (
        <AuthFormContainer style={{ position: 'relative', width: '100%' }}>
            <AnimationSide />
            <AuthFormContent>
                <Box
                    style={{ height: '100vh' }}
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    position='relative'
                    justifyContent='center'
                >
                    <div style={{ width: '300px', marginBottom: '30px' }}>
                        <Fade arrows={false} autoplay duration={4000} infinite>
                            {logos?.length > 0 &&
                                logos?.map((logo, i) => (
                                    <Box key={i} className='each-slide'>
                                        <img src={logo} alt='logo' />
                                    </Box>
                                ))}
                        </Fade>
                    </div>
                    <Typography variant='h7' component='h1'>
                        Bienvenido
                    </Typography>
                    <div>{children}</div>

                    <div>
                        <div
                            style={{
                                color: '#6D6D6C',
                                fontSize: '13px'
                            }}
                        >
                            <p>Si olvidaste tus datos de ingreso, comunícate</p>
                            <p style={{ display: 'flex', justifyContent: 'center' }}>con mesa de ayuda</p>
                        </div>
                        <div style={{ color: '#6D6D6C', fontSize: '12px' }}>
                            <p style={{ display: 'flex', justifyContent: 'center' }}>© 2021 BodyTech Corp.</p>
                            <p style={{ display: 'flex', justifyContent: 'center' }}>Todos los derechos reservados</p>
                        </div>
                    </div>
                </Box>
            </AuthFormContent>
        </AuthFormContainer>
    );
}