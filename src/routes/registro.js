const express = require('express');
const router = express.Router();
const  registroController = require('../controllers/registroController');

router.post('/agregar/',registroController.AgregarRegistro);
router.get('/listar', registroController.ListaRegistro);
router.put('/editar/:id', registroController.EditarRegistro);
router.delete('/eliminar/:id',registroController.EliminarRegistro);
router.get('/buscar/:documento', registroController.BuscarRegistro);



module.exports = router; 