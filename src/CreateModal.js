import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const CreateModal = ({type,closeModal,addPhase,addApplicant}) => {

 
    const [phaseTitle, setPhaseTitle] = useState("");
    const handlePhaseTitle = (event) => {
        setPhaseTitle(event.target.value);
    };

    const createNewPhase = () => {
        addPhase(phaseTitle);
        closeModal();
    }

    const [applicantName, setApplicantName] = useState("");
    const handleAplicantName = (event) => {
        setApplicantName(event.target.value);
    };

    const [applicantBirthdate, setApplicantBirthDate] = useState("");
    const handleAplicantBirthDate = (event) => {
        setApplicantBirthDate(event.target.value);
    };

    const [applicantCity, setApplicantCity] = useState("");
    const handleAplicantCity = (event) => {
        setApplicantCity(event.target.value);
    };

    const [applicantlastWorkPlace, setApplicantLastWorkPlace] = useState("");
    const handleAplicantLastWorkPlace = (event) => {
        setApplicantLastWorkPlace(event.target.value);
    };

    const [applicantDateApplied, setApplicantDateApplied] = useState("");
    const handleAplicantDateApplied = (event) => {
        setApplicantDateApplied(event.target.value);
    };


    const createNewApplicant = () => {
        const userInfo = {
                name:applicantName,
                dateOfBirth:applicantBirthdate,
                city:applicantCity,
                lastWorkPlace:applicantlastWorkPlace,
                dateApplied:applicantDateApplied
        }

        console.log("uinfo = ",userInfo);   
        addApplicant(userInfo);
        closeModal();
    }
    

    if(type == "phase") {
        return (
        <div>
            <IconButton id = "closeIcon" onClick = {closeModal} aria-label="delete"> <CloseIcon /> </IconButton>
                <div id = "inputs"> 
                    <TextField 
                        margin = "dense"
                        id="outlined-basic" 
                        label="Phase Name" 
                        variant="outlined"
                        value={phaseTitle} 
                        onChange={handlePhaseTitle} />
                </div>
                <Button variant="contained" onClick={createNewPhase} > Create Phase </Button>
        </div>
            
        );
    }
    else{
        return(
    
            <Card
                sx={{ maxWidth: 345, color: "black", border: "3px",backgroundColor:"white"}}
                //onMouseOver={() => changeOver()}
                //onMouseOut={() => changeOut()}
                >
                <IconButton id = "closeIcon" onClick = {closeModal} aria-label="delete"> <CloseIcon /> </IconButton>

                <CardContent sx={{display:"flex",justifyContent:"center",flexDirection:"column  " }}>
                    <AccountCircleIcon/>
                    <TextField 
                        margin = "dense"
                        id="outlined-basic" 
                        label="Applicant Name" 
                        variant="outlined"
                        value={applicantName} 
                        onChange={handleAplicantName} />
                    <TextField 
                        margin = "dense"
                        id="outlined-basic" 
                        label="Date of Birth" 
                        variant="outlined"
                        value={applicantBirthdate}
                        onChange={handleAplicantBirthDate} />
                    <TextField 
                        margin = "dense"
                        id="outlined-basic" 
                        label="City" 
                        variant="outlined"
                        value={applicantCity} 
                        onChange={handleAplicantCity} />
                     <TextField 
                        margin = "dense"
                        id="outlined-basic" 
                        label="Last Work Place" 
                        variant="outlined"
                        value={applicantlastWorkPlace} 
                        onChange={handleAplicantLastWorkPlace} />
                    <TextField 
                        margin = "dense"
                        id="outlined-basic" 
                        label="Date Applied" 
                        variant="outlined"
                        value={applicantDateApplied} 
                        onChange={handleAplicantDateApplied} />
                </CardContent>
                <CardActions>
                    <Button variant="contained" onClick={createNewApplicant} > Create Applicant </Button>

                </CardActions>
            </Card>

        );
    }
}

export default CreateModal;