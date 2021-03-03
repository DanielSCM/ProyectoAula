const express = require('express');
const router = express.Router();

router.get('/cvdolares',(req, res)=>{
    res.send('CompraDolares');
});

module.exports = router;