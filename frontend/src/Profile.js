import './Profile.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Profile() {    
    const names = ['Mukund Vyas', 'Arpit Parejiya', 'Kuldip', 'Meet', 'Nitin']
    return (
        <Box sx={{ flexGrow: 1 }}>
            <div className="header">
                <h1>College of Agricultural Information Technology</h1>
                <h2>Anand Agricultural University, Anand</h2>
            </div>
            <Grid container spacing={0}>
                {names.map(name => (
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="box">
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
                            <h3>{name}</h3>
                            <LinkedInIcon color="primary" sx={{ fontSize: 40 }}/>   
                            <p>Monitors activity to identify project roadblocks</p>
                        </div>
                    </Grid>

                ))}
            </Grid>
        </Box>
    );
}

export default Profile;
