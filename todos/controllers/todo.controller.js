'use strict'

const todoModel = require('../models/todo.model');
exports.getAllTODOs = (request, response) => {

    console.log('received getAllproducts request');
    todoModel.getTODOs().then((products, error) => {
        if (error) { 
            throw error.message;
        }
        if (products) { 
            return response.status(200).send(products);
        } else {
            //204 no hay resultados
            return response.status(204);
        }
    }).catch(error => {
        throw error.message;
    })
}

exports.addTODO = (request, response) => {
    console.log('received addProduct request');
    //se pasan los datos del nuevo producto a traves de request.body.info al productModel 
    //
    todoModel.addTODO(request.body).then((todo, error) => {

        
        if (error) {
            throw error.message;
        }
        if (todo) { 
            return response.status(200).send({ info: true });
        } else {
            console.error('error adding product');
            //500 error interno servidor 
            return response.status(500);
        }
    }).catch(error => {
        throw error.message;
    })
}

exports.deleteTODO = (request, response) => {
    console.log('received deleteProduct request');
    todoModel.deleteTODO(request.params.id).then((product, error) => {
        if (error) {
            throw error.message;
        }
        if (product) {
            return response.status(200).send({ ínfo: true });
        } else {
            console.error('error on deleteProduct');
            //500 error interno del servidor
            return response.status(500);
        }
    }).catch(error => {
        throw error.message;
    })
}


exports.putTODO = (request, response) => { 
    console.log("received put product request");
    console.log(request.body);
    
    todoModel.putTODO(request.body).then((todo, error) => {
        if (error) {
            throw error.message;
        }
        if (todo) {
            return response.status(200).send({ ínfo: true });
        } else {
            console.error('error on putProduct');
            return response.status(500);
        }
    }).catch(error => {
        throw error.message;
    })
    
}


