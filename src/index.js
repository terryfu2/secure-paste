import React from 'react';
import ReactDOM from 'react-dom/client';
import './res/index.css';
import styled from 'styled-components'
import App from './components/App';
import Form from './components/Form';
import {Watermark} from "./components/Watermark";

const Container = styled.form`
  width: 100%;
` 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Container>
    <Form />
    
    <Watermark/>
  </Container>
  
);


