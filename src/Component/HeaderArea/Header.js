import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Header = ({data}) => {
    
    return (
        <Box>
           
            <Typography sx={{textAlign:'start',p:1,mb:0}} variant="h4" gutterBottom>
              Design
            </Typography>
            <Box sx={{bgcolor:"#001C7B",display:"flex", justifyContent:"space-between",alignItems:'center'}}>
                <Box>
                    <Typography sx={{ fontSize:"18px",textAlign:'start',p:1,color:"#008585", fontWeight:"600"}} variant="h6" gutterBottom>
                        <span style={{fontSize:"22px"}}>S</span>ECQUR
                        <span style={{fontSize:"22px",color:"#FE0000"}}>AI</span>SE
                    </Typography>
                </Box>
                <Box sx={{mr:2}}>
                    <button style={{border:"0",padding:"5px 10px", borderRadius:"5px",backgroundColor:"green",color:"black",fontSize:"18px",margin:"2px",background:"#92D050"}}>
                        25
                    </button>
                   
                    <button style={{border:"0",padding:"5px 10px", borderRadius:"5px",backgroundColor:"green",color:"#fff",fontSize:"18px",margin:"2px",background:"#FF0000"}}>25</button>

                </Box>
            </Box>
        </Box>
    );
};

export default Header;