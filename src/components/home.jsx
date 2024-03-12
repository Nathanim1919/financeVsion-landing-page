import React from 'react'
import DashboardImage from '../assets/m1.jpg'
import styled from 'styled-components'



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
        /* background-color: #172eff; */
        width: 100%;

        ul{
            display: flex;
            list-style: none;
            padding: 0;
            gap: 20px;

            li a{

                color: #1e1d1d;
                text-decoration: none;
            }
        }
    }


    .banner{
        background: linear-gradient(to bottom, transparent 0%, #0000009c 45%, #000000cf 70%, #000000e1 95%, #000000 100%);
        color: #fff;
        position: absolute;
        bottom: 0;
        top: 0;
        padding: 3rem 0;
        display: grid;
        place-items: start;
        align-items: end;
        width: 100%;

        button{
            padding: 10px 30px;
            border: none;
            background-color: #172eff;
            color: #fff;
            font-family: inherit;
        }

        div{
            padding: 0 5%;
            width: 40%;

            h1{
                font-size: 4rem;
                margin: 0;
                line-height: 65px;
            }

            p{
                color: #b3aeae;
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
    
    }
`

function Home() {
  return (
    <Container>
        <div className="header">
            <div className="logo">
                <h2>FVISION</h2>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
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
            <button>Get Started</button>
        </div>

        </div>
    </Container>
  )
}

export default Home