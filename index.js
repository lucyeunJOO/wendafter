
// function getEmotionsArray(cats){
//     const emotionsArray = []
//     for (let i = 0; i < cats.length; i++){
//         for (let j=0; j < cats[i].emotionTags.length; j++){
//                 emotionsArray.push(cats[i].emotionTags[j])
//         }
//     }
// console.log(emotionsArray)
// }

// getEmotionsArray(catsData)

// const arr = ["apple","banana","car","driver"];
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for (let item of arr){
//     console.log(item);
// }


// import { catsData } from "./data.js";

// const emotionRadios = document.getElementById("emotion-radios");

// emotionRadios.addEventListener("change",function(e){
//     //내가 선택한 녀석의 id : e.target.id
//     //내가 선택한 엘리먼트의 부모 엘리먼트 .parentElement
//     //엘리먼트에 클래스 추가 방법 .classList.add("클래스이름")
//     //엘리먼트에 클래스 제거 방법 .classList.remove("클래스이름")

//    const radios = document.getElementsByClassName("radio");
//    for(let radio of radios){
//     radio.classList.remove("highlight");
//    } 
//     const selectedElement = document.getElementById(e.target.id);
//     const selectedParentE1 = selectedElement.parentElement;
//     selectedParentE1.classList.add("Highlight");
// });


// function getEmotionsArray(cats){//큰 배열의 이모션만 뽑아서 새로운 배열 만들기
//     const emotionsArray = [];
//     for (let item of cats){
//         for(let emotion of item.emotionTags){
//         //     emotionsArray.push(emotion);
//         if(!emotionsArray.includes(emotion)){
//             emotionsArray.push(emotion);
//         }
//         }
//     }
//     return emotionssArray;
// }

// function renderEmotionRadios(cats){//화면 렌더링
//     const emotions = getEmotionsArray(cats);
//     let radioITems = ""
//     for (let emotion of emotions){
//         radioITems += `
//           <div class = "radio">
//              <label for="${emotion}">${emotion}</label>
//              <input 
//               type="radio"
//               id="${emotion}"
//               value="${emotion}"
//               mane="emotions">
//           </div>
//         `;
//     }
//      emotionRadios.innerHTML = radioITems;
// }

// renderEmotionRadios(catsData);

// let arr1 = ['a','a','b','c','d','d']; //중복 있는 배열
// let newArr = []; //새로 만들 빈 배열
// // console.log(arr1.includes(newArr)); 
// for (let item of arr1){ //중복 배열 값을 하나씩 빼서
//     if(!newArr.includes(item)){//새 배열상에 중복되는게 없다면
//          newArr.push(item);//새 배열에 집어넣기
//     }
// }
// console.log(newArr);

//Get Image 버튼을 누르면
//getMatchingCatsArray() 라는 함수가 동작하는데
//라디오에서 선택된 애의 값(내용 ex:moody) 콘솔에 출력하기
//이벤트리스너(이벤트이름. 콜백함수이름)
//function 콜백함수이름(){}

// const imBtn = document.getElementById("get-image-btn");
// const giftsOnlyoption = document.getElementById("gift-only-option");

// imBtn.addEventListener("click", getMatchingCatsArray(){
//     console.log(document.querySelector(`input[type="radio"]:checked`))
// });

// function getMatchingCatsArray(){
//     const ifGif = giftsOnlyoption.ariaChecked;
//     const selectedEmotion = document.querySelector(
//         `input[type="radio]:checked`
//         ),value;
    
// }

// const matchingCatsArray = catsData.filter(function(cat){
//     if(isGif){//체크박스 체크 됐는지 여부
//         if(cat.emotionTags.includes(selectedEmotion)){
//            return cat.emotionTags.includes(selectedEmotion) && cat.isGif; //cat.ifGif는 catdata에 isGif가 true인지
//         }
//     }else{
//         if(cat.emotionTags.includes(selectedEmotion)){
//             return true;
//         }
//     }
// }

//filter : 배열에서 조건을 만족하는 값들만 새배열로 추출하는 함수
// const age = [8,12,34,45];
// //조건이 true 인것만 남김
// const adults = age.filter(function(age){
//    if(age >= 18){     
//     // return age >= 18;
//     return true;
//    }
// });

// console.log(adults);

// const children = age.filter(function (age) {
//     return age < 18;
//   });
//   console.log(children); //8 12 15 1
// console.log(children);

// const series = [
//     {genre: ["action","thriller"], name: "The Wire"},
//     {genre: ["fantasy","action"], name: "Game of Thrones"},
// ];

// const thrillers = series.filter(function (show){
//     return show.name === "The Wire";
// });
// console.log(thewire); //object 첫번째꺼만 

//let 새로운배열이름 = 기존배열이름.filter(function (매개변수) {
//return 새로운배열에추가되는조건식})

import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");
const getImageBtn = document.getElementById("get-image-btn");
const gifsOnlyOption = document.getElementById("gifs-only-option");
const memeModal = document.getElementById("meme-modal");
const memeModalInner = document.getElementById("meme-modal-inner");
const meanModalClobtn = document.getElementById("meme-modal-close-btn");

meanModalClobtn.addEventListener("click", closeModal)
function closeModal(){
  memeModal.style.display = "none";
}

getImageBtn.addEventListener("click", renderCat);

emotionRadios.addEventListener("change", function (e) {
  const radios = document.getElementsByClassName("radio");
  for (let radio of radios) {
    radio.classList.remove("highlight");
  }
  const selectedElement = document.getElementById(e.target.id);
  const selectedParentEl = selectedElement.parentElement;
  selectedParentEl.classList.add("highlight");
});
function renderCat() {
  const catObject = getSingleCatObject();
  memeModalInner.innerHTML = `
  <img
  class="cat-img"
  src="./images/${catObject.image}"
  >
  `;
  memeModal.style.display = "flex";
}

function getSingleCatObject() {
  const catsArray = getMatchingCatsArray();
  if (catsArray.length === 1) {
    return catsArray[0];
  } else {
    const randomNumber = Math.floor(Math.random() * catsArray.length);
    return catsArray[randomNumber];
  }
}

function getMatchingCatsArray() {
  const isGif = gifsOnlyOption.checked;
  const selectedEmotion = document.querySelector(
    `input[type="radio"]:checked`
  ).value;
  const matchingCatsArray = catsData.filter(function (cat) {
    if (isGif) {
      return cat.emotionTags.includes(selectedEmotion) && cat.isGif;
    } else {
      return cat.emotionTags.includes(selectedEmotion);
    }
  });
  return matchingCatsArray;
}

function getEmotionsArray(cats) {
  const emotionsArray = [];
  for (let item of cats) {
    for (let emotion of item.emotionTags) {
      if (!emotionsArray.includes(emotion)) {
        emotionsArray.push(emotion);
      }
    }
  }
  return emotionsArray;
}

function renderEmotionRadios(cats) {
  const emotions = getEmotionsArray(cats);
  let radioItems = "";
  for (let emotion of emotions) {
    radioItems += `
    <div class="radio">
        <label for="${emotion}">${emotion}</label>
        <input 
            type="radio"
            id="${emotion}"
            value="${emotion}"
            name="emotions"
        >
    </div>
    `;
  }
  emotionRadios.innerHTML = radioItems;
}

renderEmotionRadios(catsData);


//for of
//import export
//radio & checkbox inputs
//querySelector
//getElementByClassName
//ClassList.remove ClassList.add
//.includes()
//.filter()
//.parentElement