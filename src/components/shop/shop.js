import React, {useState, useEffect} from 'react';
import {Box, Typography, Button} from '@material-ui/core';
import axios from 'axios';
import History from '../../history';
import ShopItems from './shopItems';
import queryString from 'query-string';

const Shop = () => {
    const search = History.location.search;
    const searchId = queryString.parse(search)
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get('https://fakestoreapi.com/products')
            setData(data?.data)
        } 
        fetchData();
    }, [])
    if(search){
        return <ShopItems id={searchId?.id}/>
    }
    return (
        <>
            {data.map((item) => {
               return (
                   <Box key={item.id}>
                       <Button onClick={() => {
                           History.push(`/shop?id=${item.id}`)
                        }}>
                            <Typography>{item.title}</Typography>
                        </Button>    
                   </Box>    
               ) 
            })}
        </>
    )
}

export default Shop;