// 메뉴내비
document.querySelector('.navbar-toggler').addEventListener('click', function() { 
  document.querySelector('.list-group').classList.toggle('show');
});

// 캐러셀
document.querySelector('.btn1').addEventListener('click', function() {
  document.querySelector('.carousel').style.transform = 'translateX(0)';
  no = 1;
});
document.querySelector('.btn2').addEventListener('click', function() {
  document.querySelector('.carousel').style.transform = 'translateX(-100vw)';
  no = 2;
});
document.querySelector('.btn3').addEventListener('click', function() {
  document.querySelector('.carousel').style.transform = 'translateX(-200vw)';
  no = 3;
});

// 다크모드
let cnt = 0;
let mode = document.querySelector('#dark');
document.querySelector('#dark').addEventListener('click', function() {
cnt++;
if(cnt % 2 ===1) {
document.querySelector('#dark').setAttribute('value', '라이트모드'); 
  document.body.style.background = 'black';
  document.body.style.color = 'white';   
} else {
  document.querySelector('#dark').value='다크모드'; 
  document.body.style.background = 'white';
  document.body.style.color = 'black';
}
});