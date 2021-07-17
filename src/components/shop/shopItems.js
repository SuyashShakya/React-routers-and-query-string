import React, {useState, useEffect} from 'react';
import {Box, Typography} from '@material-ui/core';

import axios from 'axios';

const ShopItems = ({id}) => {
    const [data, setData] = useState({})
    // const id = match?.params?.id

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setData(data?.data)
        } 
        fetchData();
    }, [id])

  
    return (
        <Box>
            <Typography variant='subtitle1'>{data.title}</Typography>
            <Typography variant='subtitle2'>{data.category}</Typography>
            <Typography variant='body2'>{data.description}</Typography>
        </Box>
    )
}

export default ShopItems;