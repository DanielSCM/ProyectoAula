const express = require('express');
const router = express.Router();

router.get('/herramientas',(req, res)=>{
    res.send('Herramientas');
});

module.exports = router;