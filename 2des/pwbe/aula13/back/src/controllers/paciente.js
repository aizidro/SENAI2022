const con = require('../dao/connect.js');
const Paciente = require('../models/paciente.js')

const cadastrar = (req, res) => {
    con.query(new Paciente(req.body).create(), (err, result) => {
        if (err == null) {
            /*
            
            */
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })}

    const listar = (req, res) => {
        con.query(new Paciente(req.body).read(), (err, result) => {
            if (err == null) {
                res.json(result).status(200).end();
            } else {
                res.json(err).status(400).end();
            }
        })}

        const alterar = (req, res) => {
            con.query(new Paciente(req.body).UPDATE(), (err, result) => {
                if (err == null) {
                    res.json(result).status(200).end();
                } else {
                    res.json(err).status(400).end();
                }
            })}
            const deletar = (req,res) => {
                con.query(new Paciente(req.params).delete(), (err, result) => {
                    if (err == null) {
                        res.json(result).status(200).end();
                    } else {
                        res.json(err).status(400).end();
                    }
                })
            }
        
    module.exports = {
        cadastrar,
        listar,
        alterar,
        deletar
    }
        
    