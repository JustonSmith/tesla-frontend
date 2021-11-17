import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(true)
    const cars = useSelector (selectCars)
    console.log(cars)

    return (
        <Container>
            <a href="#">
                <img src= "/images/logo.svg" alt="" />
            </a>
            <Menu>

                { cars && cars.map((car, index)=>( 
                <a key= { index } href="#"> { car }</a>
                ))}

            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick= {() => setBurgerStatus(false)}  />
            </RightMenu>
            <BurgerNav show= {burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick= {() => setBurgerStatus(true)} />
                </CloseWrapper>

                { cars && cars.map ((car, index) => (
                <li key= { index }><a href="#"> { car }</a></li>
                ))}

                <li><a href="#"> Existing Inventory</a></li>
                <li><a href="#"> Used Inventory</a></li>
                <li><a href="#"> Trade-In</a></li>
                <li><a href="#"> CyberTruck</a></li>
                <li><a href="#"> Roadster</a></li>
                <li><a href="#"> Semi</a></li>
                <li><a href="#"> Charging Station</a></li>
                <li><a href="#"> Utilities</a></li>
                <li><a href="#"> Test Drive</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header


const Container = styled.div` 
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
`

const Menu = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin-top: 20px;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        flex: 1;
    }

    @media(max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center:
    text-transform: uppercase;

    a { 
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 20px;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding:20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(100%)': 'translateX(0)'};
    transition: transform 0.5s ease-in-out;

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        
    }

    a {
        font-weight: 600;
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

`