import React from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import './ML.css';
import {kaggle_info} from './Kaggle-info'
import thesis from '../../components/Media/thesis.pdf' 

class ML extends React.Component {

    render() {
        return(
            <Wrapper>
                <Kaggle>

                    <Title>
                        Check out my ML work on Kaggle!
                    </Title>
                    
                    <Ital> <a data-tip={kaggle_info.text}> What is Kaggle? </a> </Ital>
                    <ReactTooltip place="top" type="dark" effect="float" border="true" multiline="true"/>

                    <Link href="https://www.kaggle.com/dbjrelind2"> My profile on Kaggle</Link>
                </Kaggle>

                <Kaggle>
                    
                    <Title>
                        Master's Thesis: Clustering and Summarization of Chat Dialogues
                    </Title>
                    

                    <Text>
                    My Master's Thesis was written within the area of NLP. Deep Contextualized Text Representations (S-BERT and FastText) in combination with clustering algorithms was used to extract problem areas within a data set of customer chat dialogues. It was shown that stable results were achieved when using more than 1,000 chats. A supervised approach would be interesting to investigate if more labeled data was available.
                    </Text>
        
                    <ReactTooltip place="top" type="dark" effect="float" border="true" multiline="true"/>

                    <Link href={thesis} target="_blank" > Read my thesis </Link>
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

    justify-content: space-evenly;
    align-items: center;
    display: flex;
    flex-direction: column;

    min-height: 75vh; /* arbitrary height */
`
const Kaggle = styled.div`
    background: rgb(0,0,100);
    padding: 40px;
    border-style: solid;
    border-color: rgb(180, 180, 180);
    border-radius: 15px;

    font-size: 22px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const Link = styled.a`
    color: #ff9c00;
    margin-bottom: 20px;
    
    text-decoration: none;

    font-size: 18px;

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
    
const Text = styled.b`
    font-size: 18px;
    text-align: center;
    font-style: bold;
    color: #F2E6D0;
    padding-bottom: 20px;
`
const Title = styled.b`
    padding-bottom: 20px;
`