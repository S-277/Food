window.addEventListener('DOMContentLoaded', () => {

        const   tabs        = document.querySelector('.tabheader__items'),
                tabsContent = document.querySelectorAll('.tabcontent'),
                tabsItem    = document.querySelectorAll('.tabheader__item');

  function hideTabContent () {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'slide-top');
    });

    tabsItem.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent (i = 0) {
    tabsContent[i].classList.add('show', 'slide-top');
    tabsItem[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();


  tabs.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
      tabsItem.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        } 
      });
    }
  });

});