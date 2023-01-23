import React, { useEffect, useState } from 'react';
import { dataRef } from '../../firebase';
import Box from '@mui/material/Box';
import Header from '../HeaderArea/Header';
import InformationAll from '../InformationArea/InformationAll';

const Home = () => {
    let allData= [];
    const [data,setData] = useState([]);

    useEffect(()=>{
        dataRef.ref().child("11BwPKgLGAmNPRfxJ_xGcW-4041Myicb6kww6WDEhzvM").on('value',data=>{
            const getData = Object.values(data.val());
            setData(getData[0])
        })
    },[])

    Object.entries(data).map(data => allData.push(data[1]))


    return (
        <Box>
            <Header data={data}></Header>
            <InformationAll allData={allData}></InformationAll>
        </Box>
    );
};

export default Home;