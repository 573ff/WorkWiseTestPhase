import React, { useState,useEffect } from "react";
import UserCard from './UserCard';
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import CreateModal from './CreateModal'

let data = require('./data.json');


const ApplicationPhase = ({type}) => {

    const [userId,setUserId] = useState(data.users.length);

    const [allUsers,setAllUsers] = useState(data.users);
    
	const [isCreateUserModalOpen,setIsCreateUserModalOpen] = useState(false);

	//open create phase modal
	const handleOpenCreateUserModal = () => {
		setIsCreateUserModalOpen(true);
	};

	//close create phase modal
	const handleCloseCreateUserModal = () => {
		setIsCreateUserModalOpen(false);
	};
    
    const addNewApplicant = (userInfo) => {  
		setUserId(userId+1);

        allUsers.push(
            {
                id:userId,
                name:userInfo.name,
                dateOfBirth:userInfo.dateOfBirth,
                city:userInfo.city,
                lastWorkPlace:userInfo.lastWorkPlace,
                dateApplied:userInfo.dateApplied,
                applicationPhase:type
            },    
        )

	}
    
    return(

        <div>
            <h1> {type} </h1>

            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="stretch"
            >   
        
            {
                allUsers.map(e => {
                    if(e.applicationPhase==type){
                        return(
                            <UserCard key = {e.id} userInfo = {e} />
                        )
                    }
                })
            }

            {(isCreateUserModalOpen)? 
					<CreateModal 
						type="applicant"
						closeModal = {handleCloseCreateUserModal} 
						addApplicant = {addNewApplicant} /> : null}
 

            </Grid>

            <Button 
                style = {{"height":"50px"}} 
                variant="contained" 
                onClick={handleOpenCreateUserModal}> 	
                New Applicant  
			</Button>
        </div>
    )
}

export default ApplicationPhase;