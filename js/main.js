function updateTime() {
    let today = new Date();   

    let hours = today.getHours(); // 시
    let minutes = today.getMinutes();  // 분
    let seconds = today.getSeconds();  // 초

    // 시간이 한 자리일 경우 앞에 0을 추가해주는 코드
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    // .nav-time 요소에 시간을 표시
    $('.nav-time').text(hours + ':' + minutes + ':' + seconds);
}

for (let i = 0; i < $('.tab-button').length; i++){

    $('.tab-button').eq(i).on('click', function(){
      $('.tab-button').removeClass('tab-show');
      $('.tab-button').eq(i).addClass('tab-show');
      $('.tab-page').removeClass('show');
      $('.tab-page').eq(i).addClass('show');
    })
};

// 최초 시간 업로드
updateTime();
setInterval(updateTime, 100);