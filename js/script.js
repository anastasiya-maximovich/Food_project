window.addEventListener('DOMContentLoaded', ()=>{

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabContent = document.querySelectorAll('.tabcontent'),
          tabHeader = document.querySelector('.tabheader__items');

    function hideTabContent (){
        tabContent.forEach(item =>{
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item =>{
            item.classList.remove('tabheader__item_active'); // кроме скрыть все табы, удаляем Класс Активности у Каждого таба
        });
    }

    function showTabContent(i = 0){   // передаем акгумент по умолчанию, если в вызове функции мы не передаем аргументы
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabHeader.addEventListener('click', (event) =>{
        const target = event.target;

        if(target && target.classList.contains('tabheader__item')){ //пользователь кликнул именно в Таб
            tabs.forEach((item, i) => {
                if(target == item){                  // проверяем, чтобы элемент в Табе такой же, в который кликнул пользователь
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

});


    /* логика такая:
    1. создать функцию, чтобы скрыть Весь контент, и убрать класс активности у Всех табов;
    2. создать функцию, чтобы отобразить контент и назначить класс активности на 1 таб;
    3. делегирование событий, сделать обратотчик события по клику;
    */
