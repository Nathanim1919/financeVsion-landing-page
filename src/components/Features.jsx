import React from 'react';
import dashboardImage from '../assets/features/dashboard.png';
import notificationImage from '../assets/features/notification.png';
import transactionImage from '../assets/features/transaction.png';
import goalImage from '../assets/features/goals.png';
import blogImage from '../assets/features/blog.png';
import  landingPageImage from '../assets/features/landingPage.png';
import styled from 'styled-components';


const Container = styled.div`
    width: 80vw;
    margin: 2rem auto;
    display: grid;
    place-items: center;
`

const FeatureContainer = styled.div`
    display: grid;

    .feature{
        display: flex;
        margin: 2rem 0;
        align-items: center;

        .image{
            img{
                width: 100%;
            }
        
        }
    }

    div.feature:nth-child(2), div.feature:nth-child(4), div.feature:nth-child(6){
        flex-direction: row-reverse;
    
    }
`

export default function Features() {
  return (
    <Container>
        <h1>Features</h1>

        <FeatureContainer className="featureList">
            <div className="feature">
                <div className="image">
                    <img src={dashboardImage} alt="Dashboard" />
                </div>
                <div className="content">
                    <h2>Dashboard</h2>
                    <p>Get a comprehensive overview of your finances. Our dashboard provides you with a clear picture of your financial health and helps you make informed decisions.</p>
                </div>
            </div>

            <div className="feature">
                <div className="image">
                    <img src={notificationImage} alt="Notification" />
                </div>
                <div className="content">
                    <h2>Notification</h2>
                    <p>Stay updated with your finances. Our notification feature keeps you informed about your account activities, upcoming bills, and more.</p>
                </div>
            </div>

            <div className="feature">
                <div className="image">
                    <img src={transactionImage} alt="Transaction" />
                </div>
                <div className="content">
                    <h2>Transaction</h2>
                    <p>Track your expenses and income. Our transaction feature allows you to categorize your transactions, set budgets, and monitor your spending.</p>
                </div>
            </div>

            <div className="feature">
                <div className="image">
                    <img src={goalImage} alt="Goal" />
                </div>
                <div className="content">
                    <h2>Goal</h2>
                    <p>Set and achieve your financial goals. Our goal feature helps you plan and save for your short-term and long-term financial objectives.</p>
                </div>
            </div>

            <div className="feature">
                <div className="image">
                    <img src={blogImage} alt="Blog" />
                </div>
                <div className="content">
                    <h2>Blog</h2>
                    <p>Learn and grow with our financial blog. Our blog feature offers valuable insights, tips, and advice on personal finance and money management.</p>
                </div>
            </div>

            <div className="feature">
                <div className="image">
                    <img src={landingPageImage} alt="Landing Page" />
                </div>
                <div className="content">
                    <h2>Attractive Landing Page</h2>
                    <p>Experience our finance app's beautifully designed and intuitive landing page, tailored for effortless navigation and user satisfaction.</p>
                </div>
            </div>

            
        </FeatureContainer>
    </Container>
  )
}
