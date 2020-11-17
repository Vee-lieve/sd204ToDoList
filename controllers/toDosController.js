const ToDos = require("../models/Todos");
const parseRequestBody = require("../utils/parseRequestBody");

const getToDos = async(req, res) => {
    try {
        const todos = await ToDos.find();
        if(!todos) {
            return res.status(400).json({
                error: "Error in getting tasks!",
            });
        }    
        res.render('index',{data: todos});
    } catch (e) {
        res.status(400).json({
            error: e,
        });
    }
};

const getToDosById = async(req, res) => {
    try {
        const todo = await ToDos.find({_id: req.params.id });

        if (!todo || todo.length === 0) {
            return res.status(400).json({
                error: "Task not found!",
            });
        }

        res.status(200).json({
            todo: todo,
        });
    } catch (e) {
        res.status(400).json({
            error: e,
        });
    }
};

const addToDo = async(req, res) => {
    try {
        const todo = {
            day: req.body.day,
            task: req.body.task
        };

        const newToDo = new ToDos(todo);
        const result = await newToDo.save();

        if (!result) {
            return res.status(400).json({
                error: "Error in adding new task!",
            });
        }
        res.redirect("/");
    } catch (e) {
        res.status(200).json({
            error: e,
        });
    }
};
 
const updateTodosForm = async (req,res) => {
    try {
        const todos = await ToDos.find({_id:req.params.id});
        console.log(todos.task)
        if(!todos) return res.status(400).send("Error in updating task by id");
        res.render('update',{ 
            tasks: todos
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

const updateToDos = async (req, res) => {
    const updates = parseRequestBody(req.body);
    try {
        const result = await ToDos.updateOne(
            { _id: req.body.id },
            { $set: updates}
        );

        if (!result) {
            return res.status(400).json({
                error: "Error in updating task!",
            });
        }
        res.redirect('/')
    } catch (e) {
        return res.status(400).json({
            error: e,
        });
    }
};

const deleteToDos = async (req, res) => {
    try {
        await ToDos.deleteOne({ _id: req.body.id }, (error, data) => {
            if (error) {
                res.status(400).json({
                    error: error,
                });
            }
        });
        res.redirect("/");

    } catch (e) {
        res.status(400).json({
            error: e,
        });
    }
};

module.exports = {
    getToDos,
    addToDo,
    getToDosById,
    updateTodosForm,
    updateToDos,
    deleteToDos
};
