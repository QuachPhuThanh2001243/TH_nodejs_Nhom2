import express from 'express';
const getHomepage = (req, res, next) =>{
    return res.render('home'), {data: {title: 'Home page' , page: 'main'}}}
export default getHomepage