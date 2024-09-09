import React,{useState} from 'react'
import DashboardImage from '../assets/m1.jpg'
import PhoneImage from '../assets/phone.png'
import Phone2Image from '../assets/phone2.png'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { MdFeaturedPlayList, MdContactPhone } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";




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
        background: linear-gradient(to bottom,#fff, transparent);
        position: fixed;
        color: #333;
        z-index: 12;
        top: -.4rem;
        width: 100%;
        position: relative;
        z-index: 100;

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
            color: #333;

            li{
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: 0.4rem 1rem;
                transition: all .3s ease-in-out;

                &:hover{
                    background-color: #fff;
                    color: #242323;
                }
            }

            .getStarted{
                display: none;
            }


            @media screen and (max-width:768px){
                position: fixed;
                background-color: #ffffff;
                height: 100vh;
                left: ${props => props.openMenu? '0%' : '-100%'};
                flex-direction: column;
                padding: 0 1rem;
                width: 50vw;
                padding-top: 2rem;
                box-shadow: 0 7px 24px rgba(0,0,0,.2);
                color: #333;
                font-weight: 600;
                top: -2rem;
                bottom: 0;
                backdrop-filter: blur(10px);

                li{
                    &:hover{
                    background-color: blue;
                    color: #fff;

                    a{
                        color: #fff;
                    }
                }
                }

                

                li a{
                    font-size: 1.3rem;
                }

                a.getStarted{
                    display: grid;
                    background-color: blue;
                    color: #fff;
                    padding: 0.5rem 1rem;
                    box-shadow: 0 6px 23px rgba(0,0,0,.2);
                    border-radius: 5px;
                }

            }

            a{
                cursor: pointer;
              
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
        z-index: 20;

        .blue{
            color: #707eff;
        }

        .orange{
            color: #d0ff50;
        }

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
        top: -10%;
        img{
            width: 100%;
            height: 100%;
            box-shadow: 0px 5px 30px #00000031;
        }

        img.phoneImage{
            position: absolute;
            top: 10%;
            right: -20%;
            width: 240px;
            height: auto;
            z-index: 1;
            box-shadow: 0px 5px 30px #00000031;
        }

        img.phone2Image{
            position: absolute;
            top: -13%;
            left: -27%;
            width: 240px;
            height: auto;
            z-index: 1;
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
          img.phoneImage{
            width: 50vw;
          }

          img.phone2Image{
            display: none;
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
                    <li><FaHome/><Link onClick={()=>setOpenMenu(false)} to="home" smooth={true} duration={1000}>Home</Link></li>
                    <li><MdFeaturedPlayList/><Link onClick={()=>setOpenMenu(false)} to="feature" smooth={true} duration={1000}>Features</Link></li>
                    <li><IoPersonSharp/><Link onClick={()=>setOpenMenu(false)} to="about" smooth={true} duration={1000}>About</Link></li>
                    <li><MdContactPhone /><Link onClick={()=>setOpenMenu(false)} to="contact" smooth={true} duration={1000}>Contact</Link></li>
                    <a className='getStarted' href="https://fvision.nathanimt.me" target="_blank" rel="noopener noreferrer">Get Started</a>
                </ul>
            </div>
        </div>
        <div className='image'>
            <img className='phone2Image' src={Phone2Image} alt="Phone" />
            <img src={DashboardImage} alt="Dashboard" />
            <img className='phoneImage' src={PhoneImage} alt="Phone" />
        </div>

        <div className="banner">
            <div>
                <h1>Welcome to <span className='blue'>Finance</span> <span className='orange'>Vision</span></h1>
                <h2>Empower Your Financial Journey</h2>
                <p>Finance Vision is your trusted partner in managing and optimizing your finances. With intuitive tools and insightful analytics, we help you take control of your money and achieve your financial goals.</p>
                <a href="https://fvision.nathanimt.me/" target="_blank" rel="noopener noreferrer">Get Started</a>
            </div>
        </div>
    </Container>
  )
}

export default Home
