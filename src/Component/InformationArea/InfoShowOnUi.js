import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const InfoShowOnUi = ({data}) => {
    console.log(data)
    const searchSingleInfo = data =>{
        console.log(data)
    }
    return (
        <Box>
            {
                data?.map(info=><Card onClick={()=>searchSingleInfo(info)} sx={{p:2,my:1,boxShadow:5,cursor:"pointer"}}>
                        <Box>
                        <Typography sx={{display:"flex", justifyContent:'space-between'}} variant="body1" gutterBottom>
                            <span>{info.Name} : {info.Location}</span>
                            <span>{info.Date}</span>
                        </Typography>
                        <br />
                        <Typography sx={{textAlign:"start"}} variant="body1" gutterBottom>
                            Person detected
                        </Typography>
                        </Box>
                    
                </Card>)
            }
        </Box>
    );
};

export default InfoShowOnUi;