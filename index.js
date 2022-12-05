const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];



let taskList = document.querySelector('.tasks-list')
for (let i = 0; i < tasks.length; i++) {
    let taskItem = document.createElement('div')
    taskList.append(taskItem)
    taskItem.className = 'task-item'
    taskItem.setAttribute('data-task-id', tasks[i].id)
    let taskItemMainContainer = document.createElement('div')
    taskItemMainContainer.className = 'task-item__main-container'
    taskItem.prepend(taskItemMainContainer)
    let taskItemMainContent = document.createElement('div')
    taskItemMainContent.className = "task-item__main-content"
    taskItemMainContainer.prepend(taskItemMainContent)
    let checkBoxForm = document.createElement('form')
    checkBoxForm.className = 'checkbox-form'
    taskItemMainContent.prepend(checkBoxForm)
    let inputCheckBox = document.createElement('input')
    inputCheckBox.className = "checkbox-form__checkbox"
    inputCheckBox.type = "checkbox"
    inputCheckBox.id = tasks[i].id
    checkBoxForm.prepend(inputCheckBox)
    let label = document.createElement('label')
    label.htmlFor = tasks[i].id
    checkBoxForm.append(label)
    let taskText = document.createElement('span')
    taskText.className = "task-item__text"
    taskText.innerText = tasks[i].text
    taskItemMainContent.append(taskText)
    let button = document.createElement('button')
    button.className = "task-item__delete-button"
    button.classList.add('default-button')
    button.classList.add('delete-button')
    button.dataset.deleteTaskId = '5'
    button.innerText = 'Удалить'
    taskItemMainContainer.append(button)

}

console.log(taskList)




