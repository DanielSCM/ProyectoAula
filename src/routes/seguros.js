const express = require('express');
const router = express.Router();

router.get('/seguros',(req, res)=>{
    res.send('seguros');
});

module.exports = router;