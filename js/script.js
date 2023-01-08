// 메뉴내비
document.querySelector('.navbar-toggler').addEventListener('click', function() { 
  document.querySelector('.list-group').classList.toggle('show');
});

// 캐러셀
document.querySelector('.btn1').addEventListener('click', function() {
  document.querySelector('.carousel').style.transform = 'translateX(0)';
  document.querySelector('.btn2').style.background = 'white';
  document.querySelector('.btn3').style.background = 'white';
  document.querySelector('.btn1').style.background = 'pink';
  no = 1;
});
document.querySelector('.btn2').addEventListener('click', function() {
  document.querySelector('.carousel').style.transform = 'translateX(-100vw)';
  document.querySelector('.btn1').style.background = 'white';
  document.querySelector('.btn3').style.background = 'white';
  document.querySelector('.btn2').style.background = 'pink';
  no = 2;
});
document.querySelector('.btn3').addEventListener('click', function() {
  document.querySelector('.carousel').style.transform = 'translateX(-200vw)';
  document.querySelector('.btn1').style.background = 'white';
  document.querySelector('.btn2').style.background = 'white';
  document.querySelector('.btn3').style.background = 'pink';
  no = 3;
});
let no = 1;
document.querySelector('.previous').addEventListener('click', function() {
    if(no>1) {
      document.querySelector('.carousel').style.transform = 'translateX(-'+(no-2)+'00vw)';
      // ????버튼색 바꾸는 코드????
      document.querySelector('.btn1').style.background = 'white';
      document.querySelector('.btn2').style.background = 'white';
      document.querySelector('.btn3').style.background = 'white';
        no--;
    }
});
document.querySelector('.next').addEventListener('click', function() {
    if(no<3) {
     document.querySelector('.carousel').style.transform = 'translateX(-' +no+ '00vw)';
     document.querySelector('.btn1').style.background = 'white';
     document.querySelector('.btn2').style.background = 'white';
     document.querySelector('.btn3').style.background = 'white';
        no++;
    }
});

//시계
let clock = document.querySelector('.clock');
function showClock() {
    const date = new Date();

    let hour = String(23-date.getHours());
    let minute = String(59-date.getMinutes());
    let second = String(60-date.getSeconds());

    clock.innerHTML = `${hour}시간 ${minute}분 ${second}초`;
}
showClock();
setInterval(showClock, 1000);

// 로그인 모달
function setCookie(name, value, expiredays){
	var today = new Date();
	console.log(today.getDate())
	today.setDate(today.getDate() + expiredays); // 현재시간에 하루를 더함 
	document.cookie = name + '=' + escape(value) + '; expires=' + today.toGMTString();
}
	
function getCookie(name) {
	var cookie = document.cookie;
	if (document.cookie != "") {
		var cookie_array = cookie.split("; ");
		console.log(cookie_array)
		for ( var index in cookie_array) {
			var cookie_name = cookie_array[index].split("=");
			if (cookie_name[0] == "mycookie") {
				return cookie_name[1];
			}
		}
	}
	return;
}
document.querySelector(".modal-today-close").addEventListener('click', function() {
  document.querySelector(".black-bg").classList.remove('show');
	setCookie("mycookie", 'popupEnd', 1);
  window.close();
  window.open("index.html");
});

var checkCookie = getCookie("mycookie");
	
if(checkCookie == 'popupEnd') {
	document.querySelector(".black-bg").classList.remove('show');
} else {
    document.querySelector('.play-btn').addEventListener('click', function() {
      document.querySelector('.black-bg').classList.add('show');
  });
  document.querySelector('.close-btn').addEventListener('click', function() {
      document.querySelector('.black-bg').classList.remove('show');
  });
}

// 다크모드
let cnt = 0;
let mode = document.querySelector('#dark');
document.querySelector('#dark').addEventListener('click', function() {
cnt++;
if(cnt % 2 ===1) {
document.querySelector('#dark').innerHTML='<i class="fa-solid fa-sun"></i> 라이트모드';
document.querySelector('.fa-sun').style.color = 'rgb(255, 155, 6)';
document.querySelector('#dark').title = '밝은 화면';
document.querySelector('#dark').addEventListener('mouseover', function() {
  document.querySelector('.fa-sun').style.color = 'rgb(255, 155, 6)';
});
document.querySelector('#dark').addEventListener('mouseout', function() {
  document.querySelector('.fa-sun').style.color = 'rgb(94, 94, 94)';
});
document.body.style.background = 'black';
document.body.style.color = 'white';
} else {
  document.querySelector('#dark').innerHTML='<i class="fa-solid fa-moon"></i> 다크모드';
  document.querySelector('#dark').title = '시력 보호';
  document.querySelector('#dark').addEventListener('mouseover', function() {
    document.querySelector('.fa-moon').style.color = 'yellow';
    });
  document.querySelector('#dark').addEventListener('mouseout', function() {
    document.querySelector('.fa-moon').style.color = 'rgb(94, 94, 94)';
  });
  document.body.style.background = 'white';
  document.body.style.color = 'black';
}
});

