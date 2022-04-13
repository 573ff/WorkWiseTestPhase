import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const UserCard = ({userInfo}) => {

    const [shadow, setShadow] = useState("black");
    const [bgColor, setbgColor] = useState("white");
    const [borderLine, setBorderLine] = useState("");
  
  
    const changeOver = () => {
      setShadow("#290323")
      setbgColor("#f5f5f5")
      setBorderLine("2px solid #1876D1")
    }
    const changeOut = () => {
      setShadow("black")
      setbgColor("#fffff")

      setBorderLine("")
    }

    const checkProp = (prop) => {

        return ((prop=="")? "unknown": prop);
        
    }

    return(
        <Card
            sx={{ maxWidth: 345, color: shadow, border: "3px",backgroundColor:bgColor}}
            onMouseOver={() => changeOver()}
            onMouseOut={() => changeOut()}
        >
            <CardContent sx={{display:"flex",justifyContent:"center",flexDirection:"column  " }}>
                <AccountCircleIcon/>
                <Typography sx={{ color: shadow }} gutterBottom variant="h5" component="div">
                    {checkProp(userInfo.name)}
                </Typography>
                <Typography sx={{ color: shadow }}  variant="body2" color="text.secondary">
                    Birth Date: {checkProp(userInfo.dateOfBirth)}
                </Typography>
                <Typography sx={{ color: shadow }}  variant="body2" color="text.secondary">
                    City: {checkProp(userInfo.city)}
                </Typography>
                <Typography sx={{ color: shadow }}  variant="body2" color="text.secondary">
                    Last Workplace: {checkProp(userInfo.lastWorkPlace)}
                </Typography>
                <Typography sx={{ color: shadow }}  variant="body2" color="text.secondary">
                    Date applied: {checkProp(userInfo.dateApplied)}
                </Typography>
                <Typography sx={{ color: shadow }}  variant="body2" color="text.secondary">
                    Application Phase: {checkProp(userInfo.applicationPhase)}
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    size="small" 
               > 
                    Edit 
                </Button>
            </CardActions>
        </Card>
    );

}


export default UserCard;
