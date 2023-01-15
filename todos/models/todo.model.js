'use strict'
const mongoose = require('../../common/services/mongoose.service').mongoose;
const todosSchema = new mongoose.Schema({
    description: {
        type:mongoose.Schema.Types.String

    },

    date: {
        type:mongoose.Schema.Types.String

    },

    time: {

        type:mongoose.Schema.Types.String
    }
}, {versionKey:false})

todosSchema.set('toJSON', { virtuals: false });
const TODOs = mongoose.model('todos', todosSchema, 'todos');

exports.getTODOs = () => {
    return new Promise((resolve, reject) => {
        TODOs.find({}).exec((error, result) => {
            if (error) { 
                reject(error.message);
                throw error.message;
            }
            if (result) { 
                resolve(result);
            }
        })
    }).catch(error => {
        throw error.message;
    })
}

exports.addTODO = (info) => {
    try {
        
        const tarea =
        {
            description: info.description,
            date: info.created_at.slice(0,10),
            time: info.created_at.slice(11,16)
        };
        const todo = new TODOs(tarea);  
        return todo.save().catch(error => { error.message });

    }catch(error){
        throw error.message;
    }
}

exports.deleteTODO = (id) => {
    return new Promise((resolve, reject) => {
        TODOs.deleteOne({ _id: id }).exec((error, result) => {
            if (error) {
                reject(error.message);
                throw error.message;
            }
            if (result.deletedCount) {
                resolve(true);
            } else {
                resolve(false);
            }
        })
    }).catch(error => {
        throw error.message;
    })
}
// TODO buscar funcion en mongoose 

exports.putTODO = (data) => {
    return new Promise((resolve, reject) => {
        
       // Products.updateOne({ _id: data.id },{$set:{name:data.name,price:data.price,description:data.description}}).exec((error, result) => {
        TODOs.updateOne({ _id: data.id }, { $set:data}).exec((error, result) => {  
            if (error) { 
                reject(error.message);
                throw error.message;
            }
            //OJO 
            if (result.modifiedCount) { 
                resolve(true);
            } else {
                resolve(false);
            }
        })
    }).catch(error => {
        throw error.message;
    })
}
