import React from 'react'
import styled from 'styled-components'
import Logo from '../../components/Media/face.JPG' 
import cv from '../../components/Media/cv.pdf' 

class About extends React.Component {

    render() {
        return(
            <div>
                <Wrapper>
                
                <Pic src={Logo} alt="Picure of me" />
                <Name>
                    David Björelind
                </Name>
                <Title>
                    - Industrial Engineering & Management student based in Linköping
                </Title>

                <Topic>Education</Topic>
                <hr></hr>
                <h3>Linköping institute of Technology, LiTH, Sweden</h3>
                <ul>
                    <List>Industrial Engineering & Management</List>
                    <List>M.Sc in Machine Learning & Finance</List>

                </ul>
                <h3>City University of Hong kong, CityU, China</h3>
                <ul>
                    <List>Exchange year: Courses in Computer Science</List>
                </ul>

                <Topic>Work Experience</Topic>
                <hr></hr>

                <h3>Quality Assurance Intern, Upsales Technology AB</h3>
                <ul>
                    <List>
                    Developed a testing strategy for the development of Upsales CRM software. During the summer I implemented automated API tests currently running in their daily operation.
                    I was part of a team that practiced agile project methodology.
                    After the summer, I have continued to work with testing for Upsales alongside studies.
                    </List>
                </ul>

                <h3>Summer Intern Production, Orkla</h3>
                <ul>
                    <List>
                    Implemented a digital Kanban-tool at the plant which led to productivity benefits worth 500 000 SEK.
                    Analyzed production data to get insight for decision making.
                    Gained experience in how to achieve structural changes within an organization.
                    </List>
                </ul>

                <Topic>Leadership & Extra-curricular Activities</Topic>
                <hr></hr>

                <h3>Teaching assistant</h3>
                <ul>
                    <List>
                    Teacher, lab & seminar leader in the courses Economic Analysis: Economic Theory and Economic Analysis: Decision- and Financial Methodology.
                    Prepared and carried out digital classes during the pandemic. Constructed and corrected exam questions for aforementioned courses.
                    </List>
                </ul>

                <h3>Project Manager of London Banking Week</h3>
                <ul>
                    <List>
                    Planned and executed a four-day student trip to London for 30 student.
                    Responsible for communication with 8 investment banks and financial institutions
                    </List>
                </ul>

                <h3>President of the Athletic Club</h3>
                <ul>
                    <List>
                    Leading a team of 5 people, planning sports and health activities for over 1000 members. The team averaged 1.5 events per week throughout the school year.
                    </List>
                </ul>

                <hr></hr>
                <h3>On my free time I enjoy:</h3>
                <ul>
                    <List>Biking, Running, Playing Videogames</List>
                </ul>

                <hr></hr>

                <Link href={cv} target="_blank" > Download my CV</Link>

                </Wrapper>

            </div>
        )
    }
}

export default About

const Wrapper = styled.div`

    color: white;
    width: 55%;
    margin-left: auto;
    margin-right: auto;
    padding: 50px;
    padding-top: 10px;

    justify-content: center;
    align-items: center;
`

const Pic = styled.img`
    border-radius: 100%;
    max-width: 30%;
    display: block;
    margin-left: auto;
    margin-right: auto;

    &:hover{
        color: #ff9c00;
        transition: 200ms ease-in;
        @media (prefers-reduced-motion: no-preference) {
            animation: Pic-spin infinite 10s linear;
          }
    }
    @keyframes Pic-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(180deg);
        }
      }
`

const Name = styled.p`
    font-size: 40px;
    text-align: center;

`
const Title = styled.p`
    font-style: italic;
    font-size: 20px;
    display: flex;
    justify-content: center;
`

const Link = styled.a`
    font-size: 18px;
    color: rgb(180, 180, 180);
    text-decoration: none;
    display: flex;
    justify-content: center;

    &:hover{
        color: #ff9c00;
        transition: 200ms ease-in;
    }
`
const List = styled.li`
    list-style: none;
    font-size: 15px;
    font-style: italic;
`

const Topic = styled.h2`
    text-align: center;
`