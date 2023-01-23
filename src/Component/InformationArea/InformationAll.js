import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';


const InformationAll = ({allData}) => {
    const [searchedDataPick,setSearchedDataPick]= useState();
    const [singlePersonInfo,setSinglePersonInfo] = useState();

    useEffect(()=>{
        setSinglePersonInfo(allData[0])
    },[allData])

    const [datePicked, setDatePicked] = useState("");
    const date = new Date(datePicked).toDateString();
    useEffect(()=>{
        setSearchedDataPick(allData)
    },[allData])
    const searchInfo = {
        gender:"",
        location:""
    }
    const [search,setSearch]=useState({...searchInfo})
    
    let searchAllInfo = {
        Gender : search.gender,
        Location: search.location,
        Date:date
    }

    const handleOnBlur= e =>{
        const name = e.target.name;
        const value = e.target.value;
        let updateSearchInfo = {...search};
        updateSearchInfo[name]=value;
        setSearch(updateSearchInfo)
    }


   const dataChecker = (date,searchedDate) =>{
    const dateString = new Date(date).toDateString();
    if(dateString===searchedDate){
        return true
    }
   }
     
    const searchData = dataAll=>{
        const {Gender,Location,Date}= dataAll; 
        //search by all gender, location and date
       if(Gender && Location && Date!=="Invalid Date"){
           const searchBasedAll = allData.filter(data=>{return(data.Gender===Gender && data.Location===Location && dataChecker(data.Date,Date) )})
           return searchBasedAll; 
        }
        
        //gender and location base search
        else if(Gender && Location && Date==="Invalid Date"){
            const searchBasedGenderLocation = allData.filter(data=>{return(data.Gender===Gender && data.Location===Location)})
            return searchBasedGenderLocation;
        }
        //gender & date base search
        else if(Gender && Location==='' && Date!=="Invalid Date"){
            const searchBasedGender = allData.filter(data=>{return(data.Gender===Gender && dataChecker(data.Date,Date))})
            return searchBasedGender;
        }
        //location and date base filtration
        else if(Gender==='' && Location && Date!=="Invalid Date"){
            const searchBasedLocation = allData.filter(data=>{return(data.Location===Location && dataChecker(data.Date,Date))})
            return searchBasedLocation;
        }
        //gender or location or date base search
        else if(Gender || Location || Date){
            const searchBasedDate = allData.filter(data=>{return( data.Gender===Gender || data.Location===Location || dataChecker(data.Date,Date) )})
            return searchBasedDate;
        } 
        else{
            return allData;
        }
        
    }


    return (
        <Box sx={{display:'flex'}}> 
            <Box sx={{bgcolor:"#00B8F1",width:"50px",height:"83vh",display:'grid', alignContent:"space-between", justifyItems:'center'}}>
               <MenuIcon sx={{my:1,color:'#d8d1d1'}}/>
               <LogoutIcon sx={{my:2,color:'#d8d1d1'}}/>
            </Box>
        <Grid container >
            
            <Grid sx={{p:4}} item xs={12} sm={6} md={4}>
                <Box sx={{textAlign:"start"}}>
                <Typography  sx={{fontSize:"25px",fontWeight:600}} variant="h5" gutterBottom>
                    {singlePersonInfo?.ID}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Person Detected
                </Typography>
                <Typography sx={{fontSize:"18px"}} variant="subtitle1" gutterBottom>
                    <span>Name: {singlePersonInfo?.Name}</span>
                    <br />
                    <span>Location: {singlePersonInfo?.Location}</span>
                    <br />
                    <span>Date: {new Date(singlePersonInfo?.Date).toLocaleDateString()}</span>
                    <br />
                    <span>Time: {new Date(singlePersonInfo?.Time).toLocaleTimeString()}</span>
                </Typography>
                <br />
                <Typography  sx={{fontSize:"18px"}} variant="subtitle1" gutterBottom>
                   Description: <br />
                   {singlePersonInfo?.Name} detected at <br />{singlePersonInfo?.Location} on {new Date(singlePersonInfo?.Date).toLocaleDateString()}
                </Typography>
                </Box>
            </Grid>


            <Grid item xs={12} sm={6} md={4}>
            <Box sx={{textAlign:"start"}}>
                <Typography  sx={{fontWeight:600}} variant="h5" gutterBottom>
                {singlePersonInfo?.Gender}
                </Typography>
                <img style={{width:"80%",height:"70vh"}} src={singlePersonInfo?.img} alt="" />
            </Box>
               
            </Grid>



            <Grid sx={{border:"5px solid gray"}} item xs={12} sm={6} md={4}>
                <Box sx={{display:'flex',alignItems:"center", justifyContent:"space-between"}}>
                    <Box>
                        <Typography sx={{textAlign:'start',p:1,color:""}} variant="h5" gutterBottom>
                            Events
                        </Typography>
                    </Box>
                    <Box>
                    <PopupState  variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <React.Fragment>
                            <Button sx={{color:"black",p:0}} {...bindTrigger(popupState)}>
                                <DehazeIcon sx={{fontSize:'30px'}}/>
                            </Button>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem sx={{py:2}}>
                                    <form id="myForm">
                                        <legend>Gender:</legend>
                                        <input onChange={handleOnBlur} type="radio" id="male" name="gender" value="Male"/> <label for="male">Male</label>
                                        <br />
                                        <input onChange={handleOnBlur} type="radio" id="female" name="gender" value="Female"/><label for="female">Female</label>
                                        <br />
                                        <br />

                                        <legend>Location:</legend>
                                        <input onChange={handleOnBlur} type="radio" id="Chennai" name="location" value="Chennai"/> <label for="Chennai">Chennai</label>
                                        <br />
                                        <input onChange={handleOnBlur} type="radio" id="Hyderabad" name="location" value="Hyderabad"/><label for="Hyderabad">Hyderabad </label>
                                        <br />
                                        <input onChange={handleOnBlur} type="radio" id="Bangalore" name="location" value="Bangalore"/><label for="Bangalore">Bangalore</label>
                                        <br />
                                        <br />

                                        <legend style={{marginBottom:"10px",color:'black'}}>Select Date:</legend>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                label="Date"
                                                name="date"
                                                value={datePicked}
                                                onChange={(newValue) => {
                                                    setDatePicked(newValue);
                                                    
                                                }}
                                                renderInput={(params) => <TextField {...params} />}
                                            /> 
                                        </LocalizationProvider>
                                        <br />
                                        <br />
                                        <Box onClick={()=>{
                                                setSearchedDataPick(searchData(searchAllInfo));
                                                }} >
                                            <Button 
                                           onClick={popupState.close}
                                            sx={{width:'100%'}}
                                            variant="contained" type="button">Search</Button>
                                        </Box>
                                        
                                    </form>
                                </MenuItem>
                                
                            </Menu>
                            </React.Fragment>
                        )}
                    </PopupState>
                    </Box>

                </Box>
                {/* searched value show  */}
                <Box sx={{height:"70vh",overflow:'scroll'}}>
                   
                    {
                searchedDataPick?.map(info=><Card key={info.Name} onClick={()=>setSinglePersonInfo(info)} sx={{p:2,my:1,boxShadow:5,cursor:"pointer"}}>
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
            </Grid>
        </Grid>
        </Box>
    );
};

export default InformationAll;