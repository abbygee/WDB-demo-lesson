const express = require("express");
const router = express.Router(); // another express feature that allows us to create all of these different routes!

const Class = require("../models/Class");

/** 
 * The general format of an API Request 
 * router.method('url tail/route name', async (request, response) => {try...}) 
 * 
 * 1. method: Get, Post, Delete
 * 
*/

/**
 * @method - POST
 * @description - Add a class
 * @param - class/add
*/
 router.post('/add', async (req, res) => {
    try {
        const name = req.body.name;
        const teacher = req.body.teacher;
        
        let newClass = await Class.create({
            name,
            teacher,
          });

        res.json({class: newClass, message: "class successfully created!"});
    } catch (e) {
        console.log(e);
        throw e;
    }
});

/**
 * @method - GET
 * @description - Retreive all classes created
 * @param - class/all
*/
router.get('/all', async (req, res) => {
    try {
        // Helpful Mongoose documentation when working with models:
        // https://mongoosejs.com/docs/queries.html
        let all = await Class.find({});

        res.json({classes: all, message: "classes successfully retrieved!"});
    } catch (e) {
        console.log(e);
        throw e;
    }
});

module.exports = router;
