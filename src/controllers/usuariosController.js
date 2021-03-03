const express = require('express');
const router = express.Router();
const pool = require('../database');

exports.AgregarUsuarios = async (req, res) => {
    try {
        const {nombre,numerocuenta,documento,referencia,direccion,nit,telefono,codigopostal} = req.body;
        const NuevoUsuario = {nombre,numerocuenta,documento,referencia,direccion,nit,telefono,codigopostal};
        const Agregar = await pool.query("INSERT INTO usuarios set ? ",[NuevoUsuario]);
        res.status(200).json({NuevoUsuario, msg:"Registro agregado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.ListaUsuarios = async (req, res) =>{
    try {
        const registros = await pool.query("SELECT * from usuarios");
        res.status(200).json({registros});
    } catch  (err) {
        res.status(401).json({err: err});
    }
}

exports.EditarUsuarios = async (req, res) => {
    try {
        const {id} = req.params;
        const {nombre,numerocuenta,documento,referencia,direccion,nit,telefono,codigopostal} = req.body;
        const Nuevo = {nombre,numerocuenta,documento,referencia,direccion,nit,telefono,codigopostal};
        const Editar = await pool.query('UPDATE usuarios SET ? WHERE id= ?',[Nuevo, id]);
        res.status(200).json({Editar, msg: "El registro ha sido actualizado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.EliminarUsuarios = async (req, res) =>{
    try {
        const {id} = req.params;
        const eliminar = await pool.query("DELETE FROM usuarios WHERE id = ?", [id]);
        res.status(200).json({eliminar, msg:"El registro ha sido eliminado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.BuscarUsuarios = async (req, res) =>{
    try {
        const {id} = req.params;
        const BuscarUsuarioss = await pool.query("SELECT * from usuarios WHERE documento = ?", [id]);
        res.status(200).json({BuscarUsuarioss});
    } catch (err) {
        res.status(401).json({err: err});
    }
}
