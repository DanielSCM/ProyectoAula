const express = require('express');
const router = express.Router();

router.get('/tarjetadebito',(req, res)=>{
    res.send('TarjetaD');
});

module.exports = router;