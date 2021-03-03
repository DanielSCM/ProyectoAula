const express = require('express');
const router = express.Router();
const  creditoController =require('../controllers/creditoController');

router.post('/agregar/',creditoController.AgregarCredito);
router.get('/listar', creditoController.ListaCredito);
router.put('/editar/:id', creditoController.EditarCredito);
router.delete('/eliminar/:id',creditoController.EliminarCredito);
router.get('/buscar/:documento', creditoController.BuscarCredito);



module.exports = router; 