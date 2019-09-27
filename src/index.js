import Tooltip from './ninja_uI/tooltip';
import Dropdown from './ninja_uI/dropdown';
import Tabs from './ninja_uI/tabs'
import Snackbar from './ninja_uI/snackbar';

// create tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
})

// create Tabs
const tabs = new Tabs(document.querySelector('.tabs'))
tabs.init();

// create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click', () =>{
    snackbar.show('you clicked me :)');
})