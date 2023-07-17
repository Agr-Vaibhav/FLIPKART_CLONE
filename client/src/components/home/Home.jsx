import { useEffect } from "react";
//components
import Navbar from "./Navbar";
import Banner from "./Banner";
import Slide from "./slide";
import { Box } from "@mui/material";
import { Fragment } from "react";
import styled from "@emotion/styled";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";
const Component=styled(Box)`
padding:10px;
background:#F2F2F2;
`
const Home=()=>{
    const {products}=useSelector(state=>state.getProducts)
     console.log(products);  
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    return(
        <>
        <Navbar/>
        <Component>
        <Banner/>
        <MidSlide products={products} title='Deal of the Day' timer={true}/>
        <MidSection/>
        <Slide products={products} title='Discounts for You'timer={false}/>
        <Slide products={products} title='Suggesting Items'timer={false}/>
        <Slide products={products} title='Top Selection'timer={false}/>
        <Slide products={products} title='Recommended Items'timer={false}/>
        <Slide products={products} title='Trending Offers'timer={false}/>
        <Slide products={products} title="Season's top picks"timer={false}/>
        <Slide products={products} title='Top Deals on Accessories'timer={false}/>                
        </Component>
        </>
    )
}
export default Home;