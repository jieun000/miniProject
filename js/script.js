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
let no = 1;
document.querySelector('.previous').addEventListener('click', function() {
    if(no>1) {
      document.querySelector('.carousel').style.transform = 'translateX(-'+(no-2)+'00vw)';
        no--;
    }
});
document.querySelector('.next').addEventListener('click', function() {
    if(no<3) {
     document.querySelector('.carousel').style.transform = 'translateX(-' +no+ '00vw)';
        no++;
    }
});

// 다크모드
let cnt = 0;
let mode = document.querySelector('#dark');
document.querySelector('#dark').addEventListener('click', function() {
cnt++;
if(cnt % 2 ===1) {
document.querySelector('#dark').innerHTML='<i class="fa-solid fa-sun"></i> 라이트모드';
document.querySelector('#dark').addEventListener('mouseover', function() {
  document.querySelector('.fa-sun').style.color = 'rgb(255, 155, 6)';
});
document.body.style.background = 'black';
document.body.style.color = 'white';
} else {
  document.querySelector('#dark').innerHTML='<i class="fa-solid fa-moon"></i> 다크모드';
  document.querySelector('#dark').title = '시력 보호';
  document.querySelector('#dark').addEventListener('mouseover', function() {
    document.querySelector('.fa-moon').style.color = 'yellow)';
    });
  document.body.style.background = 'white';
  document.body.style.color = 'black';
}
});