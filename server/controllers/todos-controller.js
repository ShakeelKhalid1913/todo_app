import Todo from "../models/todos-model.js";
//read all todos from database
export const readTodos = async (req, res) => {
   Todo.find()
       .then(todos => res.status(200).json(todos))
       .catch(err => res.status(404).json({error: err.message}))
}

//create todos in database
export const createTodo = async (req, res) => {
   const todo = new Todo(req.body);
   await todo.save()
       .then(todo => res.status(201).json(todo))
       .catch(err => res.status(404).json({error: err.message})
       )
}

export const findById = async (req, res) => {
   let id = req.params.id;
   await Todo.findById(id)
       .then(todo => res.status(200).json(todo))
       .catch(err => res.status(404).json({err: err.message}))
}

export const updateById = async (req, res) => {
   let id = req.params.id;
   await Todo.findById(id)
       .then(todo => {
          todo.title = req.body.title;
          todo.description = req.body.description

          todo.save()
              .then(todo => res.status(201).json(todo))
              .catch(err => res.status(404).json({error: err.message})
              )
       })
       .catch(err => res.status(404).send("Data is not found"))
}

export const deleteById = async (req, res) => {
   let id = req.params.id;
   Todo.deleteOne({_id: id})
       .then(() => res.status(200).send("Deleted"))
       .catch(err => res.status(404).json({error: err.message}))
}