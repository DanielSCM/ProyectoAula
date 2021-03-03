const express = require('express');
const router = express.Router();
const  usuariosController = require('../controllers/usuariosController');

router.post('/agregar/',usuariosController.AgregarUsuarios);
router.get('/listar', usuariosController.ListaUsuarios);
router.put('/editar/:id',usuariosController.EditarUsuarios);
router.delete('/eliminar/:id',usuariosController.EliminarUsuarios);
router.get('/buscar/:id', usuariosController.BuscarUsuarios);



module.exports = router; 