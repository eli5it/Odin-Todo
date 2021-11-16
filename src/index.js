import './styles/globals.css'

import { createTodo  } from './functions/logic'
import {loadDomElements} from './functions/dom'

// to import a function from date-fns  use 
// import 'your_function_name' from 'date-fns/fp" (or whatever path it is stored in)

const todoArray = [];

// separate array of projects
const projectArray = [];





// This is run when the webpage is initialized
function loadContent() {
    loadDomElements()

}


loadContent();
