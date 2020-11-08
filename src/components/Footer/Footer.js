import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background: radial-gradient( rgb(48, 48, 48), rgb(70, 70, 70));
    color: rgb(180, 180, 180);
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`
const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60 px;
`

const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 30px;

    @media (max-width: 1000px {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    })
`

const Link = styled.div`
    color: #fff;
    margin-bottom: 15px;
    font-size: 12px;
    text-decoration: none;

    &:hover{
        color: #ff9c00;
        transition: 200ms ease-in;
    }
`
const Title = styled.div`
    font-size: 24px;
    margin-bottom: 40px;
    font-weight: bold;
`

class Footer extends React.Component {

    render() {
        return(
          <Container>
              <Wrapper>
                  <Row> 
                    <Column>
                        <Title>Footer</Title>
                        <Link> Github</Link>
                        <Link> LinkedIn</Link>
                    </Column>
                    <Column>
                        <Title>Footer2</Title>
                        <Link> Github2</Link>
                        <Link> LinkedIn2</Link>
                    </Column>
                    <Column>
                        <Title>Footer3</Title>
                        <Link> Github3</Link>
                        <Link> LinkedIn3</Link>
                    </Column>
                  </Row>

              </Wrapper>
          </Container>
        )
    }
}


export default Footer