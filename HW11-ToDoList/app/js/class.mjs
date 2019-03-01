const ENTER_FIELD = document.getElementById('enter-text__field');
const ENTER_BTN = document.getElementById('enter-text__btn');
const TASK_LIST = document.getElementById('tasks__list');

class Item {
    constructor() {
        this._title = ENTER_FIELD.value;
    }

    create() {
        TASK_LIST.insertAdjacentHTML('afterbegin', '<li class="tasks__item"><input type="button"'
            + ' value="Delete" id="btn-del" class="tasks__btn-del"></li>');
        const ITEM = TASK_LIST.children[0];
        ITEM.insertBefore(document.createTextNode(this._title), ITEM.firstChild);
    }

    static clear() {
        ENTER_FIELD.value = '';
    }
}

export { Item, ENTER_FIELD, ENTER_BTN };
