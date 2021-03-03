const express = require('express');
const router = express.Router();
const  negociosController = require('../controllers/negociosController');

router.post('/agregar/',negociosController.AgregarNegocios);
router.get('/listar', negociosController.ListaNegocios);
router.put('/editar/:id', negociosController.EditarNegocios);
router.delete('/eliminar/:id',negociosController.EliminarNegocios);
router.get('/buscar/:id', negociosController.BuscarNegocios);



module.exports = router; 