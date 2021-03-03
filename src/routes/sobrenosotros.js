const express = require('express');
const router = express.Router();

router.get('/sobrenosotros',(req, res)=>{
    res.send('sobrenosotros');
});

module.exports = router;