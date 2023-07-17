import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from "@mui/system";
import { Box,IconButton,Drawer, ListItemButton,List,ListItem } from '@mui/material';
import {Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import {Menu} from '@mui/icons-material';
import { useState } from 'react';
 import Search from './Search';
import CustomButtons from './CustomButtons';

const StyleHeader=styled(AppBar)`
background:#2874f0;
height:55px;
`
const Component=styled(Link)`
    margin-left:12%;
    line-height:0;
    text-decoration:none;
`
const SubHeading=styled(Typography)`
font-size:10px;
font-style:italic;

`;
const PlusImage=styled('img')(
    {
        width:10,
        height:10,
        marginLeft:4
    }
);
const CustomButtonWrapper=styled(Box)(({theme})=>({
    margin:'0 5% 0 auto',
    [theme.breakpoints.down('sm')]:{
        display:'none'
    }

}));  

const MenuButton=styled(IconButton)(({theme})=>({
        display:'none',
        [theme.breakpoints.down('md')]:{
            display:'block'
        }
}));


const Header=()=>{
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const [open,setOpen]=useState(false);
    const handleOpen=()=>{
        setOpen(true);
    }
    const handleClose=()=>{
        setOpen(false);
    }
    const list=()=>{
        return(
        <Box style={{width:200}} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButtons/>
                </ListItem>
            </List>
        </Box>);
    };

    return(
        <StyleHeader>
            <Toolbar style={{minHeight:55}}>
            
            <MenuButton color="inherit" onClick={handleOpen}>
            <Menu/>
            </MenuButton>
            <Drawer open={open} onClose={handleClose}>
                {list()}
            </Drawer>
                <Component to='/'>
                    <img src={logoURL} alt="logo" style={{width:75 }}/>
                    <Box style={{display:'flex'}}>
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{color:'#FFE500'}}>Plus</Box>
                            
                            </SubHeading>
                            <PlusImage src={subURL} alt="sub-logo"/>
                    </Box>

                </Component>
                <Search/>
                <CustomButtonWrapper>
                    <CustomButtons/>
                </CustomButtonWrapper>
            </Toolbar>
        </StyleHeader>
    )
}
export default Header;