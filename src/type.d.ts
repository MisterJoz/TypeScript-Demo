//type declaration file so that this interface
//can be used throughout our app
//*.d.ts will be recognized as global to the project
//so we do not need to import or exmport them explicitly

interface Todo {
  text: string;
  complete: boolean;
}
//type declaration for function ToggleTodo
type ToggleTodo = (SelectionTodo: Todo) => void;

//type declaration for function AddTodo
type AddTodo = (text: string) => void;
