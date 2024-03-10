const btnList = document.getElementsByClassName("like-btn");

window.onload = () => {
  refreshList();
};

// 찜버튼 클릭 시, localStorage에 배열로 저장되게 event 설정
Array.from(btnList).forEach((element) => {
  element.addEventListener("click", () => {
    var movieInfoList = element.parentElement.innerText.split("\n");

    const data = {
      title: movieInfoList[0],
      genre: movieInfoList[1],
      director: movieInfoList[2],
      runningTime: movieInfoList[3],
    };

    addToLocalStorageArray("movies", data);

    // localStorage 내용을 가져와서 보여줌
  });
});

// localStorage에 배열로 저장
function addToLocalStorageArray(key, value) {
  // 기존에 저장된 배열 가져오기
  var existing = localStorage.getItem(key);

  // 기존 값이 없으면 빈 배열 생성, 있으면 배열로 변환
  existing = existing ? JSON.parse(existing) : [];

  // 이미 들어간 영화인지 체크
  var has = false;

  // 배열을 돌며 들어올 title과 같은 title이 있는 지 체크
  for (let i = 0; i < existing.length; i++) {
    if (value.title === existing[i].title) {
      has = true;
      break;
    }
  }

  // 배열에 있지 않으면 추가
  if (!has) {
    existing.push(value);
  }

  // 다시 배열을 localStorage에 저장
  localStorage.setItem(key, JSON.stringify(existing));

  refreshList();
}

function refreshList() {
  var itemList = document.querySelector(".content-movie-like");
  var child = document.querySelector(".content-movie-like > div");
  itemList.removeChild(child);

  const storageList = JSON.parse(localStorage.getItem("movies"));

  var div = document.createElement("div");

  for (let i = 0; i < storageList.length; i++) {
    var str =
      storageList[i].title +
      " | " +
      storageList[i].genre +
      " | " +
      storageList[i].director +
      " | " +
      storageList[i].runningTime +
      " \n";

    var li = document.createElement("li");

    li.appendChild(document.createTextNode(str));
    div.appendChild(li);
  }

  itemList.appendChild(div);
}
