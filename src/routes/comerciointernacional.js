const express = require('express');
const router = express.Router();

router.get('/comerciointernacional',(req, res)=>{
    res.send('Internacional');
});

module.exports = router;