const todoList = document.querySelector('.list-item');
const completedList = document.querySelector('.completed-item ');

const moveToCompleted = (item) => {
    completedList.appendChild(item);
}

const moveToTodo = (item) => {
    todoList.appendChild(item);
}

const addButton = document.querySelector('.add-item__item-input button');
addButton.addEventListener('click', () => {
    console.log('click');
})

const inputField = document.querySelector('.add-item__item-input input');
addButton.addEventListener('click', () => {
    const inputValue = inputField.value;
    console.log(inputValue);
})

addButton.addEventListener('click', () => {
    const inputValue = inputField.value;
    if (inputValue.trim() !== '') {
        const newItem = document.createElement('div');
        newItem.textContent = inputValue;

        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';

        checkBox.addEventListener('change', () => {
            if (checkBox.checked) {
                moveToCompleted(newItem);
            } else {
                moveToTodo(newItem);
            }
        })

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.addEventListener('click', () => {
            newItem.remove();
        })

        const editButton = document.createElement('button');
        editButton.textContent = 'Изменить';
        editButton.addEventListener('click', () => {
            const newText = prompt('Редактировать задачу', inputValue);
            if (inputValue !== null) {
                newItem.textContent = newText;
                newItem.appendChild(checkBox);
                newItem.appendChild(deleteButton);
                newItem.appendChild(editButton);
            }
        })

        newItem.appendChild(checkBox);
        newItem.appendChild(editButton);
        newItem.appendChild(deleteButton);

        todoList.appendChild(newItem);
        inputField.value = '';
    } else {
        alert('Введите текст задачи');
    }
})