const express = require('express');
const router = express.Router();
const  creditoOnlineController = require('../controllers/creditoOnlineController');

router.post('/agregar/',creditoOnlineController.AgregarOnline);
router.get('/listar', creditoOnlineController.ListaOnline);
router.put('/editar/:id', creditoOnlineController.EditarOnline);
router.delete('/eliminar/:id',creditoOnlineController.EliminarOnline);
router.get('/buscar/:documento', creditoOnlineController.BuscarOnline);



module.exports = router; 