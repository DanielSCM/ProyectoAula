const express = require('express');
const router = express.Router();

router.get('/sucursalphone',(req, res)=>{
    res.send('Phone');
});

module.exports = router;