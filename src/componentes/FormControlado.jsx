import { useRef, useState } from "react";

const FormControlado  = ()=> { 

  const [ todo, setTodo ] = useState({
    todoName: '',
    todoDescripcion: '',
    todoEstado: 'Pendiente',
    todoCheck: false

  })

  const [ error, setError ] = useState(false)
   
  const handleSubmit = (e) => {
    e.preventDefault()

    const { todoName, todoDescripcion } = todo
    if(!todoName.trim() || !todoDescripcion.trim()) {
      return setError(true)
    }
    console.log(todo)
    setTodo({
      todoName: '',
      todoDescripcion: '',
      todoEstado: 'Pendiente',
      todoCheck: false
    })
    setError(false)
  }

  const MensajeError = () => (<div className="alert alert-danger d-flex align-items-center"> Campos Obligatorios</div>)
  
  const handleOnChange = (e) => {
    const { name, type, value, checked} = e.target

    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value
    })
    
  }


    return (
      <>
        <h2> CONTROLADO </h2>
        
        {
          error && <MensajeError /> 
        }

        <form onSubmit={handleSubmit}>
          <input 
              name="todoName" 
              type="text" 
              placeholder="Ingrese su tarea aqui"
              className="form-control"
              onChange={handleOnChange}
              value={todo.todoName}
              
          />
          <textarea 
              name="todoDescripcion" 
              className="form-control mt-2"
              placeholder="Ingrese la descripcion de su tarea aqui"
              onChange={handleOnChange}
              value={todo.todoDescripcion}
          />
          <select 
          name="todoEstado" 
          className="form-control mt-2 mb-2"  
          onChange={handleOnChange}
          value={todo.todoEstado}
          >
              <option value="Pendiente">Pendiente</option>
              <option value="Realizada">Realizada</option>
          </select>
          <div className="form-check">
              <input 
                className="form-check-input" 
                type="checkbox" 
                name="todoCheck"
                id="flexCheckIndeterminate"
                onChange={handleOnChange}
                checked={todo.todoCheck}
              />
              <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                Indeterminate checkbox
              </label>
          </div>
          <button className="btn btn-primary mt-2" type='OnSubmit'>Agregar</button>

        </form>
      </>
    ); 
}

export default FormControlado