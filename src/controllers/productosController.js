const express = require('express');
const router = express.Router();
const pool = require('../database');

exports.AgregarProductos= async (req, res) => {
    try {
        const {nombreproducto,tipo,referencia,categoria} = req.body;
        const NuevoProducto = {nombreproducto,tipo,referencia,categoria};
        const Agregar = await pool.query("INSERT INTO productos set ? ",[NuevoProducto]);
        res.status(200).json({NuevoProducto, msg:"Producto agregado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.ListaProductos = async (req, res) =>{
    try {
        const productoss = await pool.query("SELECT * from productos");
        res.status(200).json({prodcutoss});
    } catch  (err) {
        res.status(401).json({err: err});
    }
}

exports.EditarProductos = async (req, res) => {
    try {
        const {id} = req.params;
        const {nombreproducto,tipo,referencia,categoria} = req.body;
        const Nuevo = {id,nombreproducto,tipo,referencia,categoria};
        const Editar = await pool.query('UPDATE productos SET ? WHERE id= ?',[Nuevo, id]);
        res.status(200).json({Editar, msg: "El prodcutos ha sido actualizado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.EliminarProductos = async (req, res) =>{
    try {
        const {id} = req.params;
        const eliminar = await pool.query("DELETE FROM productos WHERE id = ?", [id]);
        res.status(200).json({eliminar, msg:"El producto ha sido eliminado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.BuscarProductos = async (req, res) =>{
    try {
        const {id} = req.params;
        const BuscarProductoss = await pool.query("SELECT * from registro WHERE documento = ?", [id]);
        res.status(200).json({BuscarProductoss});
    } catch (err) {
        res.status(401).json({err: err});
    }
}
