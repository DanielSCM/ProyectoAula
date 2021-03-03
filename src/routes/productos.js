const express = require('express');
const router = express.Router();
const  productosController = require('../controllers/productosController');

router.post('/agregar/',productosController.AgregarProductos);
router.get('/listar', productosController.ListaProductos);
router.put('/editar/:id', productosController.EditarProductos);
router.delete('/eliminar/:id',productosController.EliminarProductos);
router.get('/buscar/:id', productosController.BuscarProductos);



module.exports = router; 