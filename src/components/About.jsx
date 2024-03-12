import React from 'react';
import aboutImage from '../assets/about.png'
import styled from 'styled-components';


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
      <div className="teams">
            <h2>Meet the Team</h2>
            <ul>
              <li><a href="https://www.linkedin.com/in/team-member-1/" target="_blank" rel="noopener noreferrer">LinkedIn - Team Member 1</a></li>
              <li><a href="https://github.com/team-member-1" target="_blank" rel="noopener noreferrer">GitHub - Team Member 1</a></li>
              <li><a href="https://twitter.com/team_member_1" target="_blank" rel="noopener noreferrer">Twitter - Team Member 1</a></li>
              {/* Add similar links for other team members */}
            </ul>
            <p>
              Explore our individual profiles to learn more about our expertise and contributions to the project. For code collaboration and contributions, visit our <a href="https://github.com/team-name/project-name" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
            </p>
          </div>
    </Container>
  );
}

export default AboutSection;
