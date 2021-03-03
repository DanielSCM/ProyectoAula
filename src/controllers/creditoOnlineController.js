const express = require('express');
const router = express.Router();
const pool = require('../database');

exports.AgregarOnline = async (req, res) => {
    try {
        const {documento, nombre,password,celular,telefono,direccion,referencia,aportes,nitEmpresa} = req.body;
        const NuevoOnline = {documento, nombre,password,celular,telefono,direccion,referencia,aportes,nitEmpresa};
        const Agregar = await pool.query("INSERT INTO creditoonline set ? ",[NuevoOnline]);
        res.status(200).json({NuevoOnline, msg:"Online agregado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.ListaOnline = async (req, res) =>{
    try {
        const onlines = await pool.query("SELECT * from online");
        res.status(200).json({onlines});
    } catch  (err) {
        res.status(401).json({err: err});
    }
}

exports.EditarOnline = async (req, res) => {
    try {
        const {id} = req.params;
        const {documento, nombre,password,celular,telefono,direccion,referencia,aportes,nitEmpresa} = req.body;
        const Nuevo = {documento, nombre,password,celular,telefono,direccion,referencia,aportes,nitEmpresa};
        const Editar = await pool.query('UPDATE creditoonline SET ? WHERE id= ?',[Nuevo, id]);
        res.status(200).json({Editar, msg: "El credito online ha sido actualizado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.EliminarOnline = async (req, res) =>{
    try {
        const {id} = req.params;
        const eliminar = await pool.query("DELETE FROM creditoonline WHERE id = ?", [id]);
        res.status(200).json({eliminar, msg:"El credito online ha sido eliminado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.BuscarOnline = async (req, res) =>{
    try {
        const {documento} = req.params;
        const BuscarOnline = await pool.query("SELECT * from creditoonline WHERE documento = ?", [documento]);
        res.status(200).json({BuscarOnline});
    } catch (err) {
        res.status(401).json({err: err});
    }
}
