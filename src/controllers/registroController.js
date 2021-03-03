const express = require('express');
const router = express.Router();
const pool = require('../database');

exports.AgregarRegistro = async (req, res) => {
    try {
        const {id, documento, nombre, password} = req.body;
        const NuevoRegistro = {id, documento, nombre, password};
        const Agregar = await pool.query("INSERT INTO registro set ? ",[NuevoRegistro]);
        res.status(200).json({NuevoRegistro, msg:"Registro agregado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.ListaRegistro = async (req, res) =>{
    try {
        const registros = await pool.query("SELECT * from registro");
        res.status(200).json({registros});
    } catch  (err) {
        res.status(401).json({err: err});
    }
}

exports.EditarRegistro = async (req, res) => {
    try {
        const {id} = req.params;
        const {documento, nombre, password} = req.body;
        const Nuevo = {documento, nombre, password};
        const Editar = await pool.query('UPDATE registro SET ? WHERE id= ?',[Nuevo, id]);
        res.status(200).json({Editar, msg: "El registro ha sido actualizado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.EliminarRegistro = async (req, res) =>{
    try {
        const {id} = req.params;
        const eliminar = await pool.query("DELETE FROM registro WHERE id = ?", [id]);
        res.status(200).json({eliminar, msg:"El registro ha sido eliminado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.BuscarRegistro = async (req, res) =>{
    try {
        const {documento} = req.params;
        const BuscarRegistros = await pool.query("SELECT * from registro WHERE documento = ?", [documento]);
        res.status(200).json({BuscarRegistros});
    } catch (err) {
        res.status(401).json({err: err});
    }
}
