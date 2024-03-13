import React from 'react';
import aboutImage from '../assets/about.png'
import myImage from '../assets/me.jpg'
import styled from 'styled-components';
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";



const Container = styled.div`
width: 80vw;
margin: auto;
    .container{
        display: flex;
        justify-content: space-between;
        padding: 5% 0;

        .image{
            img{
                width: 100%;
                height: 100%;
              }
              
        
        }
    }

    .footer{
      margin-top: 2rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem 0;

      .links{
        display: flex;
        align-items: center;
        gap: .3rem;

        a{
          background-color: blue;
          color: #fff;
          padding: 0.4rem 1rem;
          text-decoration: none;

        }
      }


      p{
        font-size: 1rem;
        font-weight: 400;
       
        
      }
      a{
        gap: .4rem;
        display: flex;
        align-items: center;
        color: #1f1e1e;
        cursor: pointer;
       
      }
    }

    .team-member{
      display: flex;
      justify-content: space-between;

      img{
          box-shadow: 0 10px 40px #00000060;
        }

      .content{
        padding: 0 2%;
        display: flex;
        flex-direction: column;
        align-items: center;

        >*{
          margin:0;
        }

       

        .contactme{
          display: flex;
          flex-direction: column;
          align-items: end;
          width: 100%;
          margin-top: 1rem;

          div.social{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: end;
            gap: 2rem;
            width: 100%;
            margin-top: 1rem;

            a{
              color: #1f1e1e;
              font-size: 1.5rem;
              cursor: pointer; 
            }
          }

          
          >*{
            margin:0;
          }
        }

        div{
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 1rem;

          >*{
            margin:0;
          }
        }
        h3{
          font-size: 1.5rem;
          font-weight: 600;
        }
        p{
          font-size: 1rem;
          font-weight: 400;
        }
      
      }
    }
`

const AboutSection = () => {
  return (
    <Container id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>About Us</h2>
            <p>
              Our project is born from a deep-seated passion for fintech and the transformative power of digital finance solutions. In an era where financial transactions are rapidly shifting to online platforms, we recognize the pivotal role of technology in democratizing access to financial services and empowering individuals to take control of their finances.
            </p>
            <p>
              Inspired by the burgeoning field of fintech and driven by our collective vision for financial inclusion, our team embarked on this journey to create a user-centric platform that simplifies financial management and fosters financial literacy. Our mission is to bridge the gap between traditional banking systems and modern digital solutions, making financial empowerment accessible to all.
            </p>
            <p>
              Developed as a Portfolio Project for Holberton School, this endeavor reflects our commitment to excellence in software development and our aspiration to contribute meaningfully to the fintech landscape. To learn more about our journey and motivations, visit our Holberton School <a href="https://www.holbertonschool.com/" target="_blank" rel="noopener noreferrer">portfolio</a>.
            </p>
          </div>
        </div>
        <div className="image">
            <img src={aboutImage} alt="About Us" />
        </div>
      </div>
      <div className="teams" id='contact'>
              <h2>Meet the Team</h2>
              <div className="team-member">
                <div>
                   <img src={myImage} alt="Team Member" />
                </div>
                <div className="content">
                  <div>
                    <h3>Nathanim Tadele</h3>
                    <p>Full Stack Developer</p>
                  </div>
                  <div>
                    <p>Highly motivated Full Stack Developer with a Computer Science degree seeking to leverage backend development expertise. Currently enrolled in the Full Stack Software Engineering program at ALX Africa to further specialize in back-end technologies. Proficient in JavaScript, Node.js, the MERN stack </p>
                    <div className="contactme">
                      <h2>Contact me</h2>
                      <div className="social">
                        <a href="https://www.instagram.com/na.tha.n21/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/in/nathanim-tadele-762099247/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://www.github.com/Nathanim1919" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                      </div>
                    </div>
                  </div>
                </div>
                </div>

                <div className="footer">
                  <p>
                    For code collaboration and contributions, visit our 
                  </p>
                  <div className="links">
                    <a href="https://github.com/Nathanim1919/FinanceVision" target="_blank" rel="noopener noreferrer"><FaGithub/>GitHub repository</a>.
                    <a href="https://finance-vision.vercel.app/" target="_blank" rel="noopener noreferrer"><CgWebsite/>Live Preview</a>.
                  </div>
                </div>
          </div>
    </Container>
  );
}

export default AboutSection;