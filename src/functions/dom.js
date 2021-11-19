


// add group to dom

function createNewDomsGroup(str) {
    console.log('I created a new group on the dom')
}







function setModalButtonEventListener() {
    let button = document.querySelector('.modal-button');
    button.addEventListener('click', () => {
        createDomTodo();
        toggleModalVisibilities();
    })
}


function setModalListEventListener() {
    let listButton = document.querySelector('.modal-list');
    let listModal = document.querySelector('.list-modal')
    
    listButton.addEventListener('click', () => {
        toggleModalVisibility(listModal);
    })
    

}


function setModalListlEventListener() {
    
}

function setModalOverlayListener() {
    let overlay = document.querySelector('.modal-overlay');
    overlay.addEventListener('click', () => {
        toggleModalVisibilities(overlay)
    })
}


function setNewProjectListener() {
    let project = document.getElementById('project-add-text-container');
    let cancelButton = document.querySelector('.cancel-button');
    let createButton = document.querySelector('.create-button');
    let overlay = document.querySelector('.modal-overlay');
    let modal = document.querySelector('#new-project-modal')
    let textbox = document.querySelector('.project-textarea');
    let listButton = document.querySelector('.modal-list')
    let listOverlay = document.querySelector('.small-modal-overlay')
    let listModal = document.querySelector(".list-modal")
    
    project.addEventListener('click', () => {
        toggleModalVisibility(overlay)
        toggleModalVisibility(modal)
    })
    cancelButton.addEventListener('click', () => {
        toggleModalVisibility(overlay)
        toggleModalVisibility(modal)
    })
    createButton.addEventListener('click', () => {
        if (checkTextContent(textbox.value)) {
            const textContent = textbox.value
            createProjectElement(textContent)
            toggleModalVisibility(overlay)
            toggleModalVisibility(modal)
        }
        
    })
    listButton.addEventListener('click', () => {
        toggleModalVisibility(listOverlay)
        toggleModalVisibility(listModal)
    })
    
}

function createProjectElement(text)  {
    const container = document.querySelector('.projects-container');
    const newProject = document.createElement('button');
    
    newProject.classList.add('new-project-button')
    newProject.textContent = text
    container.appendChild(newProject);
}

function checkTextContent(textbox) {
    console.log(textbox)
    return (textbox.length !== 0)
}






function setNewTodoListener() {
    let todo = document.getElementById('new-todo-button');
    let overlay = document.querySelector('.modal-overlay');
    let modal = document.querySelector('#new-todo-modal')
    todo.addEventListener('click', () => {
        toggleModalVisibility(overlay)
        toggleModalVisibility(modal)
    })
    
}

function toggleModalVisibility(modal) {
    modal.classList.toggle('modal-closed')
}





function toggleModalVisibilities() {
    let modalList = document.querySelectorAll('.modals');
    modalList.forEach((modal) => {
        if (!(modal.classList.contains('modal-closed')))
        {toggleModalVisibility(modal)}
    })
}

// function setAddNewTodoListener() {
//     let addButton = document.getElementById('new-todo-button');
//     addButton.addEventListener('click', () => {
//        displayTodoForm();
//       })

// }



function setTodoItemListener(todoItem) {
    let secondPanel = document.querySelector('.selected-todo')
    todoItem.addEventListener('click', () => {
        secondPanel.classList.toggle('selected-todo-on')
      })

}

function setTodoItemListeners() {
    let todos = document.querySelectorAll('.todo-item');
    todos.forEach((todo) => {
        setTodoItemListener(todo)
    })
}





function setCheckboxListener(checkbox) {
    checkbox.addEventListener('click', () => {
        console.log('imma delete this thing later')
      })
      
}

function setCheckboxListeners() {
    let checkboxes = document.querySelectorAll('.checkbox')
    checkboxes.forEach((checkbox) => {
        setCheckboxListener(checkbox)
    })  
}

function setButtonHovers() {
    let buttons = document.querySelectorAll('.sidebar-button, .project-button')
    buttons.forEach((button) => {
        setHover(button)
    })  
}

function setDivHovers() {
    let divs = document.querySelectorAll('.todo-item')
    divs.forEach((div) => {
        setHover(div)
    })
}

// sets hover toggle for an individual button
function setHover(button) {
    button.addEventListener('mouseenter', () => {
        button.classList.toggle('button-on-hover')
      })
    button.addEventListener('mouseleave', () => {
    button.classList.toggle('button-on-hover')})
}

function setHovers() {
    setDivHovers();
    setButtonHovers();
}






// function displayTodoForm() {
//     console.log('I will ask people questions about their todo item')
// }
// // 



// when you click a todo item, toggles the second panel

function toggleCurrentTodo() {
    let currentTodo = document.querySelector(".selected-todo");
    currentTodo.classList.toggle('selected-todo-on')
}


function setCurrentTodoContent(todo)  {
    console.log('i will soon insert the corect information');
}
function displayCurrentTodo(todo) {
    setCurrentTodoContent(todo)
    toggleCurrentTodo();
    console.log('i will soon display the correct information')
    
}








// so I think it makes sense to associate todo deletebuttons
// w/ their parent element on the dom
// so you add eventlistener on click to trigger corresponding todo
// deletion
function setDeleteButtons() {

}



// takes input from findTodo
// locates dom element and deletes it
function domDeleteTodo(dom_element) {
    
}



// takes an exported todo from addtodo and creates
// a dom element that corresponds to it
// crucially, does not actually place that todo into the dom
// createDomTodo's output is the input for appendChildTodo
function createDomTodo(todo) {
    console.log('imma create a todo on the dom')
}



// takes an inputted todo element
// based on it's group property places in correct group
// based on date, places into correct date location
// (remember, main is the default place where todos are placed)


function appendChildTodo(todo) {
    
    // calling both the group finder and date finder



    // query selector for date element

    // query selector for group element

    // append to do to parent element

}


// todo ------> correct dom element
// takes in a todo element and identifies which date category it
// fits into
// returns the string name of the dom elements


function translateTodoDate(todo) {

}

// todo ------> correct dom element
// takes in a todo element and identifies which date category it
// fits into
// returns the string name of the dom elements

function translateTodoGroup(todo) {
    
}




// takes in the big array of todos and appends them 
// to their correct parent element
// (I wonder if we couold sort the array first as it's being made)
// seems pretty complicated




// loop through array 
// on each todo call translate date & group
// 



// currrent plan is to call this when the web page is loaded
// (the first time?)

function displayTodos(arr) {
    for (let i = 0; i < arr.length; i++) {
        currentTodo = arr[i];
        appendChildTodo(currentTodo)
    }
}


// based on the val (1-5), sets the coloring of the todo element
// priority
function setPriorityStyling(todo) {

}


// first off, how do I store todos by group
// not sure that it makes terribly much sense to loop through
// the entire array, and then sort it by group each time



function sortTodobyGroup(todo_array) {}



function setTodoContainer(todo_array) {}



// delete group from dom





// toggle selectedtodo


// initial load

function loadDomElements() {
    setHovers()
    setCheckboxListeners()
    setTodoItemListeners()
    setNewTodoListener();
    setNewProjectListener();
    setModalOverlayListener();
    setModalButtonEventListener();
    setModalListEventListener() 
    
}



function stringIsTooLong(str) {
    return (str.length < 31)
}


export {loadDomElements, displayCurrentTodo}