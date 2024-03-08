// 네이게이션 바 변수
const login = document.getElementById("link_login");
const confirmOff = document.getElementById("header_nav_confirm_off");
const confirmOn = document.getElementById("header_nav_confirm_on");

// 왼쪽 content 변수
const profileImg = document.getElementById("profile_img");
const storeDisplayOn = document.getElementById("store_display_on");
const storeDisplayOff = document.getElementById("store_display_off");
const storeItemSub = document.getElementsByClassName("store_item_sub");

window.onload = function () {
  changeVote();
};

// 네비게이션 바 함수
login.addEventListener("click", () => {
  let id = prompt("아이디 입력");
  if (id === "ssafy") {
    let pw = prompt("비밀번호 입력");
    if (pw === "1234") {
      alert("로그인 성공!!!");
      // 기존 네비게이션 바 숨김
      confirmOff.style.display = "none";
      // 로그아웃 네비게이션 바 표시
      confirmOn.style.display = "";
      // 프로필 이미지 변경
      profileImg.src = "img/profile.png";
    }
  }
});

function pollMake() {
  window.open("./pollmake.html", "투표하기", "width=300,height=250");
}

////////////////////////////////////////////////////////////////////////////////////
// 왼쪽 content 함수
function allSlide(statue) {
  const btnOn = document.getElementsByClassName("store_display_on");
  const btnOff = document.getElementsByClassName("store_display_off");
  const storeItemSub = document.getElementsByClassName("store_item_sub");

  // 메뉴 펼치기
  if (statue === "on") {
    btnOn[0].style.display = "none";
    btnOff[0].style.display = "";

    for (value in storeItemSub) {
      storeItemSub[value].style.display = "";
    }
    // 메뉴 닫기
  } else {
    btnOn[0].style.display = "";
    btnOff[0].style.display = "none";

    for (value in storeItemSub) {
      storeItemSub[value].style.display = "none";
    }
  }
}

function slideDown(id) {
  // 펼치기
  if (id.style.display === "none") {
    id.style.display = "";
    // 닫기
  } else {
    id.style.display = "none";
  }
}

/////////////////////////////////////////////////////////////////
// 팝업창 함수
function addAnswer() {
  const question = document.getElementById("question");
  const pollAnswerList = document.getElementById("poll_answer_list");

  // div 태그 생성
  var div = document.createElement("div");
  div.classList.add("poll_answer_item");

  // input 태그 생성
  var input = document.createElement("input");
  input.type = "text";
  input.value = question.value;

  // div 안에 input 넣기
  div.appendChild(input);

  // list에 추가
  pollAnswerList.appendChild(div);
}

function makePoll() {
  var answerList = document.getElementsByClassName("poll_answer_item");

  for (let i = 0; i < answerList.length; i++) {
    if (answerList[i].childNodes[0].value) {
      localStorage.setItem(`answer${i}`, answerList[i].childNodes[0].value);
    }
  }

  self.close();
  opener.changeVote();
}

function changeVote() {
  if (!localStorage.length) {
    return;
  }
  var vote = document.querySelector(".vote");
  var div = document.createElement("div");
  var voteDate = document.querySelector(".vote_date");

  vote.innerText = "";

  for (let i = 0; i < localStorage.length; i++) {
    var input = document.createElement("input");
    var label = document.createElement("label");
    var br = document.createElement("br");

    input.type = "radio";
    input.name = "vote";
    input.id = localStorage.getItem(`answer${i}`);
    input.value = localStorage.getItem(`answer${i}`);

    label.for = input.id;
    label.innerText = input.id;

    div.appendChild(input);
    div.appendChild(label);
    div.appendChild(br);
  }

  vote.appendChild(div);
  vote.appendChild(voteDate);
}
