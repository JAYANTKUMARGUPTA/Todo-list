const todoInput = document.getElementById('todoInput')
const addButton = document.getElementById('addButton')
const todoList = document.getElementById('todoList')

addButton.addEventListener('click',function()
{
    const todoText = todoInput.value.trim()
    if(todoText!=='')
    {
            const todoItem = document.createElement('li')
            todoItem.textContent = todoText

            const deletebtn = document.createElement('button')
            deletebtn.textContent = 'Remove'

            todoItem.appendChild(deletebtn)

            deletebtn.addEventListener('click',function()
        {
            todoItem.remove()
        })
        todoList.appendChild(todoItem)
        todoInput.value = ''
    }else if(todoText == '')
        {
            alert("Enter the item")
        }
})