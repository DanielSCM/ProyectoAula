const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    res.send('WEBANK');
});

module.exports = router;