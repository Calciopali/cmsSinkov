"use strict";


import {getStorage} from "./modules/localStorage.js";
import {renderItems} from "../js/modules/render.js";
import {popupControl, formControl, deleteFunction, editItemsFunction} from "./modules/starting.js";
import {filter} from "../js/modules/filter.js";
import { getData} from "./modules/data.js";
import { loadPage } from "./modules/fetch.js";

const data = await loadPage();

let addProductBtn = document.querySelector(".add-product-btn");
let popup = document.querySelector(".pop-up");
let closeBtn = document.querySelector(".pop-up__close");
const form = document.querySelector(".pop-up__main");



const init = () => {
	loadPage()
	getStorage();
	popupControl(addProductBtn, closeBtn, popup);
	renderItems();
	formControl(form, data);
	deleteFunction();
	editItemsFunction();
	filter();
	getData();
}

init();

export {data, popup}










