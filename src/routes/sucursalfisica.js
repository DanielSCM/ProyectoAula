const express = require('express');
const router = express.Router();

router.get('/sucursalfisica',(req, res)=>{
    res.send('Fisica');
});

module.exports = router;