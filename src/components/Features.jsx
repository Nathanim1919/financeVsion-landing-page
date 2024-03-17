import React from 'react';
import dashboardImage from '../assets/features/dashboard.png';
import notificationImage from '../assets/features/notification.png';
import transactionImage from '../assets/features/transaction.png';
import goalImage from '../assets/features/goals.png';
import chatImage from '../assets/features/chat.png';
import chatAiImage from '../assets/features/chatAi.png';
import blogImage from '../assets/features/blog.png';
import  landingPageImage from '../assets/features/landingPage.png';
import styled from 'styled-components';


const Container = styled.div`
    width: 80vw;
    margin: 2rem auto;
    display: grid;
    place-items: center;
    padding: 0;
`

const FeatureContainer = styled.div`
    display: grid;

    .feature{
        display: flex;
        margin: 2rem 0;
        align-items: center;

        .content{
            img{
                width: 5rem;
                height: 5rem;
                object-fit: cover;
            }
        }

        
        h2{
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .image{
            img{
                width: 100%;
            }
        
        }
        @media screen and (max-width:768px){
            flex-direction: column;
        }
    }

    div.feature:nth-child(2), div.feature:nth-child(4), div.feature:nth-child(6){
        flex-direction: row-reverse;

        @media screen and (max-width:768px){
            flex-direction: column;
        } 
    }

`

export default function Features() {
  return (
    <Container id='feature'>
        <div className='header'>
           <h1>Features</h1>
        </div>

        <FeatureContainer className="featureList">
            <div className="feature">
                <div className="image">
                    <img src={dashboardImage} alt="Dashboard" />
                </div>
                <div className="content">
                    <h2>
                       <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiMwMDc4ZDQiIGQ9Ik0yMCwyOEg4Yy0xLjEwNSwwLTItMC44OTUtMi0yVjhjMC0xLjEwNSwwLjg5NS0yLDItMmgxMmMxLjEwNSwwLDIsMC44OTUsMiwydjE4CUMyMiwyNy4xMDUsMjEuMTA1LDI4LDIwLDI4eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMzNWMxZjEiIGQ9Ik00MCwxNkgyOGMtMS4xMDUsMC0yLTAuODk1LTItMlY4YzAtMS4xMDUsMC44OTUtMiwyLTJoMTJjMS4xMDUsMCwyLDAuODk1LDIsMnY2CUM0MiwxNS4xMDUsNDEuMTA1LDE2LDQwLDE2eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMzNWMxZjEiIGQ9Ik0yMCw0Mkg4Yy0xLjEwNSwwLTItMC44OTUtMi0ydi02YzAtMS4xMDUsMC44OTUtMiwyLTJoMTJjMS4xMDUsMCwyLDAuODk1LDIsMnY2CUMyMiw0MS4xMDUsMjEuMTA1LDQyLDIwLDQyeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMDc4ZDQiIGQ9Ik00MCw0MkgyOGMtMS4xMDUsMC0yLTAuODk1LTItMlYyMmMwLTEuMTA1LDAuODk1LTIsMi0yaDEyYzEuMTA1LDAsMiwwLjg5NSwyLDJ2MTgJQzQyLDQxLjEwNSw0MS4xMDUsNDIsNDAsNDJ6Ij48L3BhdGg+Cjwvc3ZnPg=="/>
                        Dashboard
                    </h2>
                    <p>Get a comprehensive overview of your finances. Our dashboard provides you with a clear picture of your financial health and helps you make informed decisions.</p>
                </div>
            </div>

            <div className="feature">
                <div className="image">
                    <img src={notificationImage} alt="Notification" />
                </div>
                <div className="content">
                    <h2>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                        <linearGradient id="McOMTfiYL3bOztJQDCSGka_z8yqcMdq4T2h_gr1" x1="24" x2="24" y1="1.993" y2="7.005" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fede00"></stop><stop offset="1" stop-color="#ffd000"></stop></linearGradient><path fill="url(#McOMTfiYL3bOztJQDCSGka_z8yqcMdq4T2h_gr1)" d="M27,7h-6V5c0-1.657,1.343-3,3-3h0c1.657,0,3,1.343,3,3V7z"></path><path fill="#f5be00" d="M39,21c0-8.284-6.716-15-15-15S9,12.716,9,21c0,0.39,0,13,0,13h30C39,34,39,21.39,39,21z"></path><linearGradient id="McOMTfiYL3bOztJQDCSGkb_z8yqcMdq4T2h_gr2" x1="24" x2="24" y1="33.993" y2="39.005" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fede00"></stop><stop offset="1" stop-color="#ffd000"></stop></linearGradient><path fill="url(#McOMTfiYL3bOztJQDCSGkb_z8yqcMdq4T2h_gr2)" d="M39,34H9l-3.875,1.55C4.445,35.822,4,36.48,4,37.211v0C4,38.199,4.801,39,5.789,39h36.422	C43.199,39,44,38.199,44,37.211v0c0-0.731-0.445-1.389-1.125-1.661L39,34z"></path><linearGradient id="McOMTfiYL3bOztJQDCSGkc_z8yqcMdq4T2h_gr3" x1="24" x2="24" y1="42.919" y2="38.859" gradientUnits="userSpaceOnUse"><stop offset=".486" stop-color="#fbc300"></stop><stop offset="1" stop-color="#dbaa00"></stop></linearGradient><path fill="url(#McOMTfiYL3bOztJQDCSGkc_z8yqcMdq4T2h_gr3)" d="M28,39c0,2.209-1.791,4-4,4s-4-1.791-4-4H28z"></path>
                   </svg>
                        Notification
                    </h2>
                    <p>Stay updated with your finances. Our notification feature keeps you informed about your account activities, upcoming bills, and more.</p>
                </div>
            </div>

            <div className="feature">
                <div className="image">
                    <img src={transactionImage} alt="Transaction" />
                </div>
                <div className="content">
                    <h2>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                        <path fill="#009688" d="M4,24C4,12.956,12.956,4,24,4s20,8.956,20,20s-8.956,20-20,20S4,35.044,4,24z"></path><polygon fill="#fff" points="27,13 27,18 12,18 12,22 36,22"></polygon><polygon fill="#fff" points="21,35 21,30 36,30 36,26 12,26"></polygon>
                    </svg>
                        Transaction</h2>
                    <p>Track your expenses and income. Our transaction feature allows you to categorize your transactions, set budgets, and monitor your spending.</p>
                </div>
            </div>

            <div className="feature">
                <div className="image">
                    <img src={goalImage} alt="Goal" />
                </div>
                <div className="content">
                    <h2>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                       <linearGradient id="ypSyVXVQOI6v1d~UaF23Ca_Yt084riMRP1m_gr1" x1="9.858" x2="38.142" y1="9.858" y2="38.142" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f44f5a"></stop><stop offset=".443" stop-color="#ee3d4a"></stop><stop offset="1" stop-color="#e52030"></stop></linearGradient><path fill="url(#ypSyVXVQOI6v1d~UaF23Ca_Yt084riMRP1m_gr1)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><linearGradient id="ypSyVXVQOI6v1d~UaF23Cb_Yt084riMRP1m_gr2" x1="12.879" x2="35.169" y1="12.879" y2="35.169" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafb"></stop><stop offset="1" stop-color="#c8cdd1"></stop></linearGradient><circle cx="24" cy="24" r="16" fill="url(#ypSyVXVQOI6v1d~UaF23Cb_Yt084riMRP1m_gr2)"></circle><linearGradient id="ypSyVXVQOI6v1d~UaF23Cc_Yt084riMRP1m_gr3" x1="15.515" x2="32.485" y1="15.515" y2="32.485" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f44f5a"></stop><stop offset=".443" stop-color="#ee3d4a"></stop><stop offset="1" stop-color="#e52030"></stop></linearGradient><path fill="url(#ypSyVXVQOI6v1d~UaF23Cc_Yt084riMRP1m_gr3)" d="M36,24c0,6.627-5.373,12-12,12s-12-5.373-12-12s5.373-12,12-12S36,17.373,36,24z"></path><linearGradient id="ypSyVXVQOI6v1d~UaF23Cd_Yt084riMRP1m_gr4" x1="18.439" x2="29.585" y1="18.439" y2="29.585" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafb"></stop><stop offset="1" stop-color="#c8cdd1"></stop></linearGradient><circle cx="24" cy="24" r="8" fill="url(#ypSyVXVQOI6v1d~UaF23Cd_Yt084riMRP1m_gr4)"></circle><linearGradient id="ypSyVXVQOI6v1d~UaF23Ce_Yt084riMRP1m_gr5" x1="21.172" x2="26.828" y1="21.172" y2="26.828" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f44f5a"></stop><stop offset=".443" stop-color="#ee3d4a"></stop><stop offset="1" stop-color="#e52030"></stop></linearGradient><path fill="url(#ypSyVXVQOI6v1d~UaF23Ce_Yt084riMRP1m_gr5)" d="M28,24c0,2.209-1.791,4-4,4s-4-1.791-4-4s1.791-4,4-4S28,21.791,28,24z"></path><path d="M36.655,8.517L23.198,21.974c-0.781,0.781-0.781,2.047,0,2.828c0.39,0.391,0.902,0.586,1.414,0.586	s1.024-0.195,1.414-0.586l13.457-13.457C38.636,10.311,37.689,9.364,36.655,8.517z" opacity=".05"></path><path d="M37.028,8.851L23.246,22.633c-0.586,0.586-0.586,1.535,0,2.121c0.293,0.293,0.677,0.439,1.061,0.439	s0.768-0.146,1.061-0.439l13.782-13.782C38.502,10.207,37.793,9.498,37.028,8.851z" opacity=".07"></path><linearGradient id="ypSyVXVQOI6v1d~UaF23Cf_Yt084riMRP1m_gr6" x1="35.003" x2="43.997" y1="8.502" y2="8.502" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3079d6"></stop><stop offset="1" stop-color="#297cd2"></stop></linearGradient><path fill="url(#ypSyVXVQOI6v1d~UaF23Cf_Yt084riMRP1m_gr6)" d="M35.003,12.997V9.243c0-0.796,0.316-1.559,0.879-2.121l2.907-2.907	c0.447-0.447,1.212-0.131,1.212,0.502V8h3.284c0.633,0,0.95,0.765,0.502,1.212l-2.908,2.908c-0.563,0.563-1.327,0.879-2.123,0.879	L35.003,12.997z"></path><path fill="#edbe00" d="M24,25c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l17-17	c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-17,17C24.512,24.902,24.256,25,24,25z"></path>
                    </svg>
                        Goal</h2>
                    <p>Set and achieve your financial goals. Our goal feature helps you plan and save for your short-term and long-term financial objectives.</p>
                </div>
            </div>

            <div className="feature">
                <div className="image">
                    <img src={blogImage} alt="Blog" />
                </div>
                <div className="content">
                    <h2>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                       <ellipse cx="32" cy="61" opacity=".3" rx="19" ry="3"></ellipse><path fill="#37d0ee" d="M46,37H18V10c0-2.209,1.791-4,4-4h20c2.209,0,4,1.791,4,4V37z"></path><path fill="#008aa9" d="M39.5,15h-15c-0.828,0-1.5-0.672-1.5-1.5v0c0-0.828,0.672-1.5,1.5-1.5h15c0.828,0,1.5,0.672,1.5,1.5	v0C41,14.328,40.328,15,39.5,15z"></path><path fill="#bd6300" d="M12,36H6c-1.105,0-2-0.895-2-2v-4c0-1.105,0.895-2,2-2h6V36z"></path><path fill="#bd6300" d="M52,28h6c1.105,0,2,0.895,2,2v4c0,1.105-0.895,2-2,2h-6V28z"></path><path fill="#008aa9" d="M33.5,21h-9c-0.828,0-1.5-0.672-1.5-1.5v0c0-0.828,0.672-1.5,1.5-1.5h9c0.828,0,1.5,0.672,1.5,1.5v0	C35,20.328,34.328,21,33.5,21z"></path><path fill="orange" d="M36,27L36,27c0,1.657,1.343,3,3,3h0.5c1.381,0,2.5,1.119,2.5,2.5v0c0,1.381-1.119,2.5-2.5,2.5h-15	c-1.381,0-2.5-1.119-2.5-2.5v0c0-1.381,1.119-2.5,2.5-2.5H25c1.657,0,3-1.343,3-3v0c0-1.657-1.343-3-3-3H14c-2.209,0-4,1.791-4,4v22	c0,2.209,1.791,4,4,4h36c2.209,0,4-1.791,4-4V28c0-2.209-1.791-4-4-4H39C37.343,24,36,25.343,36,27z"></path><path fill="#fff" d="M18,29c2.762,0,5-2.238,5-5V10c0-1.582-0.749-2.975-1.895-3.891	C19.328,6.517,18,8.1,18,10v14h-4c-1.9,0-3.483,1.328-3.891,3.105C11.025,28.251,12.418,29,14,29H18z" opacity=".3"></path><circle cx="20" cy="41" r="2" fill="#bd6300"></circle><circle cx="28" cy="41" r="2" fill="#bd6300"></circle><circle cx="36" cy="41" r="2" fill="#bd6300"></circle><circle cx="44" cy="41" r="2" fill="#bd6300"></circle><circle cx="24" cy="47" r="2" fill="#bd6300"></circle><circle cx="32" cy="47" r="2" fill="#bd6300"></circle><circle cx="40" cy="47" r="2" fill="#bd6300"></circle><path d="M54,50V36c-2.762,0-5,2.238-5,5v7c0,0.552-0.448,1-1,1h-9c-2.762,0-5,2.238-5,5h16	C52.209,54,54,52.209,54,50z" opacity=".15"></path><path fill="#fff" d="M21.5,18c-0.828,0-1.5-0.672-1.5-1.5v-4c0-0.828,0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5v4	C23,17.328,22.328,18,21.5,18z"></path>
                    </svg>
                        Blog</h2>
                    <p>Learn and grow with our financial blog. Our blog feature offers valuable insights, tips, and advice on personal finance and money management.</p>
                </div>
            </div>
            <div className="feature">
                <div className="image">
                    <img src={chatImage} alt="Blog" />
                </div>
                <div className="content">
                    <h2>
                    <img src={chatAiImage} alt="" />
                    Chat with AI</h2>
                    <p>Connect with our AI chatbot for instant assistance and guidance. Whether you have questions about finance or need advice, our AI is here to help you 24/7.</p>                </div>
            </div>

            <div className="feature">
                <div className="image">
                    <img src={landingPageImage} alt="Landing Page" />
                </div>
                <div className="content">
                    <h2>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                        <path fill="#37d0ee" d="M50,6H14c-3.866,0-7,3.134-7,7v30c0,3.866,3.134,7,7,7h36c3.866,0,7-3.134,7-7V13	C57,9.134,53.866,6,50,6z"></path><path fill="#37d0ee" d="M44,6H20c-5.523,0-10,4.477-10,10v24c0,5.523,4.477,10,10,10h24c5.523,0,10-4.477,10-10V16	C54,10.477,49.523,6,44,6z"></path><ellipse cx="32" cy="61" opacity=".3" rx="20" ry="3"></ellipse><path fill="#9c34c2" d="M50,6H14c-3.866,0-7,3.134-7,7v5h50v-5C57,9.134,53.866,6,50,6z"></path><circle cx="24" cy="13" r="2" fill="#ffa1ac"></circle><circle cx="17" cy="13" r="2" fill="#ffa1ac"></circle><path fill="#37d0ee" d="M47,15H31c-1.105,0-2-0.895-2-2l0,0c0-1.105,0.895-2,2-2h16c1.105,0,2,0.895,2,2l0,0	C49,14.105,48.105,15,47,15z"></path><path fill="#fff" d="M27,11c2.761,0,5-2.238,5-5H14c-3.866,0-7,3.134-7,7v17	c2.761,0,5-2.238,5-5V12.387C12,11.621,12.621,11,13.388,11H27z" opacity=".3"></path><path fill="#fff" d="M10.472,17.472c-0.828,0-1.5-0.672-1.5-1.5v-3.5c0-2.481,2.019-4.5,4.5-4.5h3.5	c0.828,0,1.5,0.672,1.5,1.5s-0.672,1.5-1.5,1.5h-3.5c-0.827,0-1.5,0.673-1.5,1.5v3.5C11.972,16.8,11.3,17.472,10.472,17.472z"></path><path d="M57,43V26h0c-2.761,0-5,2.239-5,5v12c0,1.105-0.895,2-2,2H37c-2.761,0-5,2.239-5,5v0h18	C53.866,50,57,46.866,57,43z" opacity=".15"></path><path fill="#008aa9" d="M28,42H15c-1.657,0-3-1.343-3-3V24c0-1.657,1.343-3,3-3h13c1.657,0,3,1.343,3,3v15	C31,40.657,29.657,42,28,42z"></path><path fill="#008aa9" d="M50,39H37c-1.105,0-2-0.895-2-2v0c0-1.105,0.895-2,2-2h13c1.105,0,2,0.895,2,2v0	C52,38.105,51.105,39,50,39z"></path><path fill="#008aa9" d="M50,32H37c-1.105,0-2-0.895-2-2v0c0-1.105,0.895-2,2-2h13c1.105,0,2,0.895,2,2v0	C52,31.105,51.105,32,50,32z"></path><path fill="#008aa9" d="M50,25H37c-1.105,0-2-0.895-2-2v0c0-1.105,0.895-2,2-2h13c1.105,0,2,0.895,2,2v0	C52,24.105,51.105,25,50,25z"></path>
                    </svg>
                        Attractive Landing Page</h2>
                    <p>Experience our finance app's beautifully designed and intuitive landing page, tailored for effortless navigation and user satisfaction.</p>
                </div>
            </div>

            
        </FeatureContainer>
    </Container>
  )
}
