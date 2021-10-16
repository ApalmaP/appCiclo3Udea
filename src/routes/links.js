const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/add', (req, res) => {
    const { vendedor, precio, producto } = req.body;
    const newSale = {
        vendedor,
        precio,
        producto,
    };
    pool.query('INSERT INTO ventas set ?', [newSale]);
    res.render('links/add');
});

router.post('/add', (req, res) =>{
    res.send('Recibido');   
});

module.exports = router;