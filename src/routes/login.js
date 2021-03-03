const express = require('express');
const router = express.Router();
const  loginControllers = require('../controllers/loginControllers');

router.post('/agregar/', loginControllers.AgregarLogin);
router.get('/listar',  loginControllers.ListaLogin);
router.put('/editar/:id',  loginControllers.EditarLogin);
router.delete('/eliminar/:id',loginControllers.EliminarLogin);
router.get('/buscar/:id', loginControllers.BuscarLogin);



module.exports = router; 