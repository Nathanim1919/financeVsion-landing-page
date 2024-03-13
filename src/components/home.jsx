import React,{useState} from 'react'
import DashboardImage from '../assets/m1.jpg'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import { IoMdMenu, IoMdClose } from "react-icons/io";




const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #ffffff;
    display: grid;
    place-items: start;

    .header{
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: #364dfe;
        position: fixed;
        color: #fff;
        z-index: 12;
        top: -.4rem;
        width: 100%;

        .menuIcon{
            display: none;

            @media screen and (max-width:768px){
                display: grid;
                font-size: 2.5rem;
                cursor: pointer;
            }
        }

        ul{
            display: flex;
            list-style: none;
            padding: 0;
            gap: 20px;
            transition: all .2s ease-in-out;


            @media screen and (max-width:768px){
                position: absolute;
                background-color: #ffffff;
                height: 100vh;
                left: ${props => props.openMenu? '0%' : '-100%'};
                flex-direction: column;
                padding: 0 1rem;
                width: 50vw;
                align-items: center;
                padding-top: 2rem;
                box-shadow: 0 7px 24px rgba(0,0,0,.2);

                li a{
                    font-size: 1.3rem;
                }

            }

            a{
                cursor: pointer;
                color: #1e1d1d;
                text-decoration: none;
            }
        }
    }


    .banner{
        background: linear-gradient(to bottom, transparent 0%, #0000009c 55%, #000000cf 80%, #000000e1 95%, #000000 100%);
        color: #fff;
        position: absolute;
        bottom: 0;
        top: 0;
        padding: 3rem 0;
        display: grid;
        place-items: start;
        align-items: end;
        width: 100%;

        @media screen and (max-width:768px){
            padding: 1rem 0;

            h2{
                font-size: 1rem;
                margin: 0;
                margin-bottom: 1rem;
            }
                
            }

        a{
            padding: 10px 30px;
            border: none;
            background-color: #172eff;
            color: #fff;
            font-family: inherit;
            text-decoration: none;
        }

        div{
            padding: 0 5%;
            width: 40%;

            @media screen and (max-width:768px){
                width: 90%;
                
            }

            h1{
                font-size: 4rem;
                margin: 0;
                line-height: 65px;
                @media screen and (max-width:768px){
                    font-size: 1.6rem;
                    line-height: 30px;
                }
            }

            p{
                color: #b3aeae;
                @media screen and (max-width:768px){
                    font-size: .8rem;
                    margin: 0;
                    margin-bottom: 1rem;
                }
            }
        }
    }

    .image{
        width: 900px;
        padding: 0rem;
        place-self: center;
        position: relative;
        top: 3%;
        img{
            width: 100%;
            height: 100%;
            box-shadow: 0px 5px 30px #00000031;
        }

        @media screen and (max-width:768px){
            width: 98vw;
            top: -7%;
            overflow: hidden;

            img{
                width: 200%;
                height: 200%;
                box-shadow: 0px 5px 30px #00000031;
        }
        }
    
    }
`

function Home() {
    const [openMenu, setOpenMenu] = useState(false)
  return (
    <Container openMenu={openMenu} id='home'>
        <div className="header">
            <div className="logo">
                <h2>FVISION</h2>
            </div>
            <div className="menu">
                {!openMenu?<div onClick={()=>setOpenMenu(true)} className='menuIcon'>
                    <IoMdMenu/>
                </div>:<div onClick={()=>setOpenMenu(false)} className='menuIcon'><IoMdClose/></div>}
                <ul>
                    <li><Link onClick={()=>setOpenMenu(false)} to="home" smooth={true} duration={1000}>Home</Link></li>
                    <li><Link onClick={()=>setOpenMenu(false)} to="feature" smooth={true} duration={1000}>Features</Link></li>
                    <li><Link onClick={()=>setOpenMenu(false)} to="about" smooth={true} duration={1000}>About</Link></li>
                    <li><Link onClick={()=>setOpenMenu(false)} to="contact" smooth={true} duration={1000}>Contact</Link></li>
                </ul>
            </div>
        </div>
        <div className='image'>
        <img src={DashboardImage} alt="Dashboard" />
        </div>
       
        <div className="banner">
            <div>
                <h1>Welcome to Finance Vision</h1>
                <h2>Empower Your Financial Journey</h2>
                <p>Finance Vision is your trusted partner in managing and optimizing your finances. With intuitive tools and insightful analytics, we help you take control of your money and achieve your financial goals.</p>
                <a href="https://finance-vision.vercel.app/" target="_blank" rel="noopener noreferrer">Get Started</a>
            </div>
        </div>
    </Container>
  )
}

export default Home