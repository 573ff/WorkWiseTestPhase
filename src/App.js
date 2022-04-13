import './App.css';
import ApplicationPhase from './ApplicationPhase';
import { Grid } from "@mui/material";
import React, { useState } from "react";
import Button from '@mui/material/Button';
import CreateModal from './CreateModal';



let data = require('./data.json');


function App() {

	const [phaseNb,setPhaseNb] = useState(data.phases.length);
	const [newPhaseBtnClicked,setNewPhaseBtnClicked] = useState(false);

	const [phases,setPhases] = useState(data.phases);

	const [isCreatePhaseModalOpen,setIsCreatePhaseModalOpen] = useState(false);

	//open create phase modal
	const handleOpenCreatePhaseModal = () => {
		setIsCreatePhaseModalOpen(true);
	};

	//close create phase modal
	const handleCloseCreatePhaseModal = () => {
		setIsCreatePhaseModalOpen(false);
	};

	const addNewPhase = (phaseTitle) => {  

		phases.push({name:phaseTitle,id:phaseNb+1});
		setPhaseNb(phaseNb+1);
		console.log(phases);
	}

	return (
		<div> 
			
			<Grid
                container
                direction="row"
				justifyContent="center"
                alignItems="stretch"
                >
				
				{
					phases.map((e)=>{
						return(
							<ApplicationPhase key = {e.id} type={e.name}> </ApplicationPhase>
						)
					})
				}
			
				{(isCreatePhaseModalOpen)? 
					<CreateModal 
						type="phase"
						closeModal = {handleCloseCreatePhaseModal} 
						addPhase = {addNewPhase} /> : null}
 
				<Button 
					style = {{"height":"50px"}} 
					variant="contained" 
					onClick={handleOpenCreatePhaseModal}> 	
					New Phase 
				</Button>
            </Grid>
		
		</div>
	);
}

export default App;
