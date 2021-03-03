const express = require('express');
const router = express.Router();
const pool = require('../database');

exports.AgregarComercio = async (req, res) => {
    try {
        const { nombre, documento, empresa,fcreacion,aportes} = req.body;
        const NuevoComercio = { nombre, documento, empresa,fcreacion,aportes};
        const Agregar = await pool.query("INSERT INTO comercio set ? ",[NuevoComercio]);
        res.status(200).json({NuevoComercio, msg:"Comercio agregado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.ListaComercio = async (req, res) =>{
    try {
        const comercios = await pool.query("SELECT * from comercio");
        res.status(200).json({comercios});
    } catch  (err) {
        res.status(401).json({err: err});
    }
}

exports.EditarComercio = async (req, res) => {
    try {
        const {id} = req.params;
        const {nombre, documento, empresa,fcreacion,aportes} = req.body;
        const Nuevo = {nombre, documento, empresa,fcreacion,aportes};
        const Editar = await pool.query('UPDATE comercio SET ? WHERE id= ?',[Nuevo, id]);
        res.status(200).json({Editar, msg: "El comercio ha sido actualizado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.EliminarComercio = async (req, res) =>{
    try {
        const {id} = req.params;
        const eliminar = await pool.query("DELETE FROM comercio WHERE id = ?", [id]);
        res.status(200).json({eliminar, msg:"El comercio ha sido eliminado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.BuscarComercio = async (req, res) =>{
    try {
        const {nombre} = req.params;
        const BuscarComercios = await pool.query("SELECT * from comercio WHERE nombre = ?", [nombre]);
        res.status(200).json({BuscarComercios});
    } catch (err) {
        res.status(401).json({err: err});
    }
}
