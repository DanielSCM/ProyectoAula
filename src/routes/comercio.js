const express = require('express');
const router = express.Router();
const  comercioController = require('../controllers/comercioController');

router.post('/agregar/', comercioController .AgregarComercio);
router.get('/listar', comercioController .ListaComercio);
router.put('/editar/:id', comercioController .EditarComercio);
router.delete('/eliminar/:id',comercioController.EliminarComercio);
router.get('/buscar/:nombre',comercioController.BuscarComercio);



module.exports = router; 