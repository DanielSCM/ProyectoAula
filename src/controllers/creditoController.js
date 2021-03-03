const express = require('express');
const router = express.Router();
const pool = require('../database');

exports.AgregarCredito = async (req, res) => {
    try {
        const {documento, nombre, fechaN, celular, telefono, referencia, aportes} = req.body;
        const NuevoCredito = {idocumento, nombre, fechaN, celular, telefono, referencia, aportes};
        const Agregar = await pool.query("INSERT INTO credito set ? ",[NuevoCredito]);
        res.status(200).json({NuevoCredito, msg:"Credito agregado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.ListaCredito = async (req, res) =>{
    try {
        const registros = await pool.query("SELECT * from credito");
        res.status(200).json({registros});
    } catch  (err) {
        res.status(401).json({err: err});
    }
}

exports.EditarCredito = async (req, res) => {
    try {
        const {id} = req.params;
        const {documento, nombre, fechaN, celular, telefono, referencia, aportes} = req.body;
        const Nuevo = {documento, nombre, fechaN, celular, telefono, referencia, aportes};
        const Editar = await pool.query('UPDATE credito SET ? WHERE id= ?',[Nuevo, id]);
        res.status(200).json({Editar, msg: "El credito ha sido actualizado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.EliminarCredito = async (req, res) =>{
    try {
        const {id} = req.params;
        const eliminar = await pool.query("DELETE FROM credito WHERE id = ?", [id]);
        res.status(200).json({eliminar, msg:"El credito ha sido eliminado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.BuscarCredito = async (req, res) =>{
    try {
        const {documento} = req.params;
        const BuscarCreditos = await pool.query("SELECT * from credito WHERE documento = ?", [documento]);
        res.status(200).json({BuscarCreditos});
    } catch (err) {
        res.status(401).json({err: err});
    }
}
