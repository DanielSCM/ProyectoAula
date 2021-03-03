const express = require('express');
const router = express.Router();


router.get('/tasas',(req, res)=>{
    res.send('Tasas');
});

module.exports = router;