const express = require('express');
const router = express.Router();

router.get('/vacaciones',(req, res)=>{
    res.send('vacaciones');
});

module.exports = router;