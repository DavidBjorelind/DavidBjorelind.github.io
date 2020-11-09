import React from 'react'
import styled from 'styled-components'

import Logo from '../../components/Media/face.JPG' 
import cv from '../../components/Media/cv.pdf' 

const Wrapper = styled.div`

    color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 140px; /* arbitrary height */

`

const Pic = styled.img`
    border-radius: 100%;
    max-width: 20%;
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

`

const Link = styled.a`
    font-size: 18px;
    color: #ff9c01;
    text-decoration: none;

    &:hover{
        color: #ff9c00;
        transition: 200ms ease-in;
    }
`
const Text = styled.p`
    max-width: 600px;

`

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
                    - Industrial Engineering & Management student, master in Machine Learning & Finance
                </Title>

                <h2>Education</h2>
                <Text>
                orem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark m
                </Text>


                <h2>Learn more about me</h2>
                <Link href={cv} target="_blank" > Download my CV</Link>

                </Wrapper>
                


            </div>
        )
    }
}


export default About