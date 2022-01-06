function menu__toogle(){
    let sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
    let side_bars = document.querySelector('.side_bars');
    side_bars.classList.toggle('active');
    let side_times = document.querySelector('.side_times');
    side_times.classList.toggle('active');
    let plus__down = document.querySelector('.plus__down');
    plus__down.classList.toggle('active');
    let you_restaurant = document.querySelector('.you_restaurant');
    you_restaurant.classList.toggle('active');
    let nav__bar = document.querySelector('.nav__bar');
    nav__bar.classList.toggle('active');
    let main__body = document.querySelector('.main__body');
    main__body.classList.toggle('active');
    let container = document.querySelector('.container');
    container.classList.toggle('active');
  };
  function puls__down(){
    let plus__down = document.querySelector('.plus__down');
    plus__down.classList.toggle('active');
    let plus__down__ul = document.querySelector('.plus__down__ul');
    plus__down__ul.classList.toggle('active'); 
  }