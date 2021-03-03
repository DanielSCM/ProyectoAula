const express = require('express');
const router = express.Router();

router.get('/tarjetacredito',(req, res)=>{
    res.send('tarjetacredito');
});

module.exports = router;