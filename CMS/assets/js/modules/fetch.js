'use strict';

const URL = 'https://peppered-lake-thing.glitch.me/api/goods';

const loadPage = async() => {
    const goods = await fetch ('https://peppered-lake-thing.glitch.me/api/goods');
    return goods.json();
}
console.log(loadPage());

export {loadPage};