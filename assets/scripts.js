// Elementos
const todoFormulario = document.querySelector("#todo-formulario")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-lista")
// Funções
const salvarTodo = (texto) => {
    const todo = document.createElement("div")
    todo.classList.add("todo")

    const tituloTodo = document.createElement("h3")
    tituloTodo.innerText = texto
    todo.appendChild(tituloTodo)

    const botaoFinalizar = document.createElement("button")
    botaoFinalizar.classList.add("todo-finalizar")
    botaoFinalizar.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(botaoFinalizar)

    const botaoRemover = document.createElement("button")
    botaoRemover.classList.add("todo-remover")
    botaoRemover.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(botaoRemover)

    todoList.appendChild(todo)
    todoInput.value = ''
    todoInput.focus()
}
// Eventos
todoFormulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const valorInput = todoInput.value
    if (valorInput) {
        salvarTodo(valorInput)
    } else {
        alert('Você precisa digitar uma tarefa para adicionar!')
    }
})

document.addEventListener("click", (e) => {
    const targetElemento = e.target
    const elementoPai = targetElemento.closest("div")
    if(targetElemento.classList.contains("todo-finalizar")) {
        elementoPai.classList.toggle("realizado")
    }

    if(targetElemento.classList.contains("todo-remover")) {
        elementoPai.remove()
    }
})