import mongoose from "mongoose";
const Schema = mongoose.Schema;

let todoSchema = new Schema({
   title: {
      type: String
   },
   description: {
      type: String
   }
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;