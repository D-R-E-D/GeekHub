const IMAGES = document.querySelector('[data-slider]').children;
const ITEMS = document.querySelector('[data-picker]').children;
const BTN_NEXT = document.querySelector('.next');
const BTN_PREV = document.querySelector('.prev');
let i = 0;


BTN_NEXT.addEventListener('click', () => {
  IMAGES[i].style.display = 'none';
  ITEMS[i].classList.remove('item-active');
  i++;
  if (i >= IMAGES.length) i = 0;
  IMAGES[i].style.display = 'block';
  ITEMS[i].classList.add('item-active');
});

BTN_PREV.addEventListener('click', () => {
  IMAGES[i].style.display = 'none';
  ITEMS[i].classList.remove('item-active');
  i--;
  if (i < 0) i = IMAGES.length - 1;
  IMAGES[i].style.display = 'block';
  ITEMS[i].classList.add('item-active');
});


// Мої експеременти, компії...


// for (let item of ITEMS) {
//   item.addEventListener('click', () => {
//     item.classList.add('item-active');
//   });
// }


// activate(ITEMS, i);
// activate(IMAGES, i);

// function activate(items, k) {
//   for (let i = 0; i < items.length; i++) {
//     const item = items[i];
//     if (i === k) {
//       item.classList.add('item-active');
//     } else {
//       item.classList.remove('item-active');
//     }
//   }
// }

/*
document.addEventListener('DOMContentLoaded', () => {
  const BTN_PREV = document.querySelector('.prev');
  const BTN_NEXT = document.querySelector('.next');
  let ACTIVE_NUMBER = 3;
  const SLIDES = document.querySelector('[data-slider').children;
  const PICKERS = document.querySelector('[data-picker').children;

  function activate(items, k) {
    for (let i = 0; i < items.length; i++) {
      const ITEM = items[i];
      if (i === k) {
        ITEM.classList.add('item-active');
      } else {
        ITEM.classList.remove('item-active');
      }
    }
  }

  document.addEventListener('slide', (e) => {
    ACTIVE_NUMBER = e.detail.item;
    console.log(`Activate ${ACTIVE_NUMBER} slide`);
    activate(SLIDES, ACTIVE_NUMBER);
    activate(PICKERS, ACTIVE_NUMBER);
  }, false);

  BTN_NEXT.addEventListener('click', (e) => {
    e.preventDefault();
    const I = (ACTIVE_NUMBER + 1) % SLIDES.length;
    const EVENT = new CustomEvent('slide', { detail: { item: I } });
    document.dispatchEvent(EVENT);
  });

  BTN_PREV.addEventListener('click', (e) => {
    e.preventDefault();
    const I = ACTIVE_NUMBER === 0 ? SLIDES.length - 1 : ACTIVE_NUMBER - 1;
    const EVENT = new CustomEvent('slide', { detail: { item: I } });
    document.dispatchEvent(EVENT);
  });
  // function prev() {
  //   SLIDES[i].style.display = 'none';
  //   i--;
  //   if (i < 0) {
  //     i = SLIDES.length - 1;
  //   }
  //   SLIDES[i].style.display = 'block';
  // }
  //
  // function next() {
  //   let i = 0;
  //   SLIDES[i].style.display = 'none';
  //   i++;
  //   if (i >= SLIDES.length) {
  //     i = 0;
  //   }
  //   SLIDES[i].style.display = 'block';
  // }

  function addItemNumber(items) {
    for (let i = 0; i < items.length; i++) {
      items[i].dataset.itemNumber = i;
    }
  }

  for (let item of PICKERS) {
    item.addEventListener('click', (e) => {
      let event = new CustomEvent('slide', { detail: { item: +this.dataset.itemNumber } });
      document.dispatchEvent(event);
    });
  }


  // BTN_PREV.addEventListener('click', prev);
  // BTN_NEXT.addEventListener('click', next);

  addItemNumber(SLIDES);
  addItemNumber(PICKERS);
  activate(SLIDES, ACTIVE_NUMBER);
  activate(PICKERS, ACTIVE_NUMBER);
});
*/
