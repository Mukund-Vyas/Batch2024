import './profile.css';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {   
    const [resData, setResData] = useState([]);
    console.log(resData);
    async function getStudents() {
        try {
            // await fetch('http://localhost:5000/api/v1').then(respose => {return response.json()}).then(data => {
            //     setResData(data)
            // })
            const response = await axios.get('http://localhost:5000/api/v1').then(data => data);
            // const json = await response.json();
            setResData(response.data);
            
        } catch (error) {
            console.error(error);
        } finally{
            console.log("Data Arraived success..!!");
        }
    }
    useEffect(()=>{
        getStudents();
       
    },[]);

    const names = ['Mukund Vyas', 'Arpit Parejiya', 'Kuldip', 'Meet', 'Nitin']
    return (
        <Box sx={{ flexGrow: 1 }}>
            <div className="header">
                <h1>College of Agricultural Information Technology</h1>
                <h2>Anand Agricultural University, Anand</h2>
                <br />
                <h2>Batch 2024 Student's Profile</h2>
            </div>
            <Grid container>
                {resData.length >0 && resData.map(name => (
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="box">
                            <img src={require('./Image/Arpit.png')} alt="Avatar" />
                            <h3>{name.Name}</h3>
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
