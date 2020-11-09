import React from 'react'
import styled from 'styled-components'
import './Footer.css'

const Container = styled.div`
    background: radial-gradient( rgb(48, 48, 48), rgb(70, 70, 70));
    color: rgb(250, 250, 250);
    padding: 30px 60px;

    @media (max-width: 1000px) {
        padding: 70px 30px;
      }
`;
const Footwrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: 60 px;
`
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 1rem;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

const Link = styled.a`
    color: rgb(180, 180, 180);
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;

    &:hover{
        color: #ff9c00;
        transition: 200ms ease-in;
    }
`
const Title = styled.p`
    font-size: 24px;
    margin-bottom: 40px;
    font-weight: bold;
`

class Footer extends React.Component {

    render() {
        return(
          <Container>
              <Footwrapper>
                  <Row>
                  <Column>

                        <Link href="https://github.com/DavidBjorelind" > <i class="fab fa-github"></i> Check out my work at Github </Link>

                    </Column>
                    <Column>

                        <Link href="https://www.linkedin.com/in/davidbjorelind/" > <i class="fab fa-linkedin"></i> Check out my profile at Linkedin </Link>

                    </Column>

                  </Row>
              </Footwrapper>
          </Container>
        )
    }
}


export default Footer