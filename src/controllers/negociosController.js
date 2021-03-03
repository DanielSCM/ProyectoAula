const express = require('express');
const router = express.Router();
const pool = require('../database');

exports.AgregarNegocios = async (req, res) => {
    try {
        const {nombrenegocio,informacion,direccion,nit,telefono,codigopostal} = req.body;
        const NuevoNegocio = {nombrenegocio,informacion,direccion,nit,telefono,codigopostal};
        const Agregar = await pool.query("INSERT INTO negocio set ? ",[NuevoNegocio]);
        res.status(200).json({NuevoNegocio, msg:"Negocio agregado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.ListaNegocios = async (req, res) =>{
    try {
        const negocioss = await pool.query("SELECT * from negocio");
        res.status(200).json({negocioss});
    } catch  (err) {
        res.status(401).json({err: err});
    }
}

exports.EditarNegocios= async (req, res) => {
    try {
        const {id} = req.params;
        const {nombrenegocio,informacion,direccion,nit,telefono,codigopostal} = req.body;
        const Nuevo = {nombrenegocio,informacion,direccion,nit,telefono,codigopostal};
        const Editar = await pool.query('UPDATE negocio SET ? WHERE id= ?',[Nuevo, id]);
        res.status(200).json({Editar, msg: "El registro ha sido actualizado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.EliminarNegocios= async (req, res) =>{
    try {
        const {id} = req.params;
        const eliminar = await pool.query("DELETE FROM negocio WHERE id = ?", [id]);
        res.status(200).json({eliminar, msg:"El negocio ha sido eliminado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.BuscarNegocios = async (req, res) =>{
    try {
        const {id} = req.params;
        const BuscarNegocio = await pool.query("SELECT * from negocio WHERE id = ?", [id]);
        res.status(200).json({BuscarNegocio});
    } catch (err) {
        res.status(401).json({err: err});
    }
}
