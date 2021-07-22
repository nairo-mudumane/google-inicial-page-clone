jQuery(document).ready(function () {
  const input = document.getElementById('search');
  const fruits = document.querySelectorAll('.hintItem');
  let arrayFruit = [];
  const hintWrapper = $('.hint');

  for (let i = 0; i <= fruits.length - 1; i++) {
    arrayFruit = [...arrayFruit, fruits[i].innerHTML];
  }
  let lowerFruit = [];
  for (let i = 0; i <= arrayFruit.length - 1; i++) {
    lowerFruit = [...lowerFruit, arrayFruit[i].toLowerCase()];
  }


  $('input#search').on('keyup', function () {
    if (this.value !== '') {
      hintWrapper.css({ display: 'block' });
      /* lowerFruit.map((fruit) => {
        // console.log(fruit); 
        for (let i = 0; i <= fruit.length - 1; i++) {
          console.log($('.hintItem')[i]);
          // console.log(fruit[i]);
          if (this.value === fruit[i]) {
            $('.hintItem')[i].style.display = 'block';
            break;
          } else {
            $('.hintItem')[i].style.display = 'none';
            break;
          }
        } 
      });*/
      /* $('.hintItem').map((i) => {
        document.querySelectorAll('.hintItem')[i].style.display = 'none';
      }); */
    } else {
      hintWrapper.css({ display: 'none' });
    }
  });

  $('input#search').focus();
});
