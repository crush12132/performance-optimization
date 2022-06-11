import React from 'react';
import Typography from '@material-ui/core/Typography';
import model from './model.js';
import Page from './Page.jsx';

const Pages = {};

model.forEach(page => {
  Pages[page.name] = () => 
    <Page name={page.name} body={page.body} image={page.image} key={page.name} pros={page.pros} cons={page.cons} />;
});

export default Pages;
