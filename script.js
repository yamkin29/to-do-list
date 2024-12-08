const addButton = document.querySelector('.add-item__item-input button');
const inputField = document.querySelector('.add-item__item-input input');
const todoList = document.querySelector('.list-item');
const completedList = document.querySelector('.completed-item');

function moveToCompleted(item) {
    completedList.appendChild(item);
}

function moveToTodo(item) {
    todoList.appendChild(item);
}

addButton.addEventListener('click', () => {
    const inputValue = inputField.value.trim();
    if (inputValue) {
        const newItem = document.createElement('div');
        newItem.textContent = inputValue;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                moveToCompleted(newItem);
            } else {
                moveToTodo(newItem);
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.addEventListener('click', () => {
            newItem.remove();
        });

        const editButton = document.createElement('button');
        editButton.textContent = 'Редактировать';
        editButton.addEventListener('click', () => {
            const currentText = newItem.childNodes[1].nodeValue.trim();

            const editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.value = currentText;

            newItem.textContent = '';

            newItem.appendChild(editInput);

            const saveButton = document.createElement('button');
            saveButton.textContent = 'Сохранить';
            saveButton.addEventListener('click', () => {
                const updatedText = editInput.value.trim();
                if (updatedText) {
                    newItem.textContent = updatedText;
                    newItem.prepend(checkbox);
                    newItem.appendChild(deleteButton);
                    newItem.appendChild(editButton);
                }
            });

            const cancelButton = document.createElement('button');
            cancelButton.textContent = 'Отмена';
            cancelButton.addEventListener('click', () => {
                newItem.textContent = currentText;
                newItem.prepend(checkbox);
                newItem.appendChild(deleteButton);
                newItem.appendChild(editButton);
            });

            newItem.appendChild(saveButton);
            newItem.appendChild(cancelButton);

            editInput.focus();
        });

        newItem.prepend(checkbox);
        newItem.appendChild(deleteButton);
        newItem.appendChild(editButton);

        todoList.appendChild(newItem);
        inputField.value = ''
    } else {
        console.log('Введите текст задачи!');
    }
});
