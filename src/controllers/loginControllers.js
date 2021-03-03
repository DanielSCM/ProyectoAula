const express = require('express');
const router = express.Router();
const pool = require('../database');

exports.AgregarLogin = async (req, res) => {
    try {
        const { nombre, documento, nit} = req.body;
        const NuevoLogins = { nombre, documento, nit};
        const Agregar = await pool.query("INSERT INTO login set ? ",[NuevoLogins]);
        res.status(200).json({NuevoLogins, msg:"Registro agregado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.ListaLogin = async (req, res) =>{
    try {
        const logins = await pool.query("SELECT * from login");
        res.status(200).json({logins});
    } catch  (err) {
        res.status(401).json({err: err});
    }
}

exports.EditarLogin = async (req, res) => {
    try {
        const {id} = req.params;
        const { nombre, documento, nit} = req.body;
        const Nuevo = { nombre, documento, nit};
        const Editar = await pool.query('UPDATE login SET ? WHERE id= ?',[Nuevo, id]);
        res.status(200).json({Editar, msg: "El login ha sido actualizado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.EliminarLogin = async (req, res) =>{
    try {
        const {id} = req.params;
        const eliminar = await pool.query("DELETE FROM login WHERE id = ?", [id]);
        res.status(200).json({eliminar, msg:"El login ha sido eliminado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.BuscarLogin = async (req, res) =>{
    try {
        const {id} = req.params;
        const BuscarLogins = await pool.query("SELECT * from login WHERE id = ?", [id]);
        res.status(200).json({BuscarLogins});
    } catch (err) {
        res.status(401).json({err: err});
    }
}
