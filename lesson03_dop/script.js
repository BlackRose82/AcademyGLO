"use strict";

let lang = 'ru';
if (lang == 'ru') {
	let arr = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
}
if (lang == 'en') {
	arr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
}
// console.log(arr);

// let lang = 'ru';
switch (lang) {
	case 'ru':
		let arr = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
	break;
	case 'en':
		arr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	break;
}
// console.log(arr);

// let lang = 'ru';
let arr = {
	'ru':['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
	'en':['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
};
console.log(arr[lang]);

let namePerson = 'Артем',
    otherPerson = 'Максим',
    access = namePerson ? "Директор" : otherPerson ? "Преподаватель" : "Студент";
    
console.log( access );
