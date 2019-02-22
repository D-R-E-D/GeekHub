const ENTER_FIELD = document.getElementById('enter-text__field');
const ENTER_BTN = document.getElementById('enter-text__btn');
const TASK_LIST = document.getElementById('tasks__list');


// Cтворюю LI з відповідними атрибутами і передаю в нього зміст ENTER_FIELD.

ENTER_BTN.addEventListener('click', () => {
    if (ENTER_FIELD.value === '') {
        alert('Enter the task');
    } else {
        const NEW_LI = document.createElement('li');
        NEW_LI.setAttribute('class', 'tasks__item');
        NEW_LI.innerHTML = (ENTER_FIELD.value);

        // Сторюю кнопку DEL з відповідними атрибутами і додаю її в LI.

        const BTN_DEL = document.createElement('input');
        BTN_DEL.setAttribute('type', 'button');
        BTN_DEL.setAttribute('value', 'Delete');
        BTN_DEL.setAttribute('id', 'btn-del');
        BTN_DEL.setAttribute('class', 'tasks__btn-del');
        NEW_LI.appendChild(BTN_DEL);

        // Додаю подію видалення при кліку на кнопку BTN_DEL

        BTN_DEL.addEventListener('click', () => {
            BTN_DEL.parentNode.remove();
        });

        // Додаю новостворений LI в список TASK_LIST першим в черзі.

        TASK_LIST.insertBefore(NEW_LI, TASK_LIST.firstChild);

        // Очищаю ENTER_FIELD після створення таску.

        ENTER_FIELD.value = '';
    }
});

// Додаю перекреслювання тексту по кліку на айтем.

TASK_LIST.addEventListener('click', (e) => {
    const CURRENT_TARGET = e.target;
    CURRENT_TARGET.classList.toggle('line-through');
});

// Додаю можливість створення айтему кнопкою Enter.

ENTER_FIELD.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        ENTER_BTN.click();
    }
});
