import React from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import './ML.css';
import {kaggle_info} from './Kaggle-info'

class ML extends React.Component {

    render() {
        return(
            <Wrapper>
                <Kaggle>
                    Check out my ML work on Kaggle!
                    <Ital> <a data-tip={kaggle_info.text}> What is Kaggle? </a> </Ital>
                    <ReactTooltip place="top" type="dark" effect="float" border="true" multiline="true"/>

                    <Link href="https://www.kaggle.com/dbjrelind2"> My profile on Kaggle</Link>
                </Kaggle>

            </Wrapper>

        )
    }
}

export default ML

const Wrapper = styled.div`

    color: white;

    width: 50%;
    margin-left: auto;
    margin-right: auto;
    padding: 50px;
    padding-top: 10px;

    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;

    min-height: 70vh; /* arbitrary height */
`
const Kaggle = styled.div`
    background: rgb(0,0,100);
    padding: 50px;
    border-style: solid;
    border-color: rgb(180, 180, 180);
    border-radius: 15px;

    font-size: 18px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const Link = styled.a`
    color: #ff9c00;
    margin-bottom: 20px;
    
    text-decoration: none;

    &:hover{
        color: rgb(0, 150, 0);
        transition: 200ms ease-in;
    }
`
const Ital = styled.b`
    font-style: italic;
    font-size: 14px;
    color: rgb(180, 180, 180);
`
    