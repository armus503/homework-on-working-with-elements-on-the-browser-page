/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const avdImg = document.querySelectorAll('.promo__adv img'), //вызов списка с рекламой
    promoBg = document.querySelector('.promo__bg'), //получаем элемент для блока с фоном
    promoGenre = promoBg.querySelector('.promo__genre'), //извлекаем элемент из блока с фоном
    promoInteractiveList = document.querySelector('.promo__interactive-list'); //извлекаем элемент(родителя у списка) 

avdImg.forEach(item => { //перебор элементов списка и удаление по одному
    item.remove(); //вместо стрелочной Ф можно использовать безимянную
});
promoGenre.textContent = 'ДРАМА'; //заменяем текст в документе
promoBg.style.backgroundImage = 'url("/img/bg.jpg")'; //заменяем фоновую картинку
promoInteractiveList.innerHTML = ""; //в элемент записываем пустой массив(удаляем предыдущий список)

/*for (let i = 0; i < promoInteractiveList.length; i++) {
    promoInteractiveList[i].textContent = movieDB;
}*/
promoInteractiveList.forEach(item => {
    item.textContent = movieDB;
});