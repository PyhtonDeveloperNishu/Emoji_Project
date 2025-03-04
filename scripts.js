import { emojiList } from "./emojiList.js";

const resultsDiv = document.querySelector("#results");
const form = document.querySelector("form");
const input = form.querySelector("input");
const btn = document.querySelectorAll(".tag")

window.addEventListener("load", () => displayEmojis(emojiList));
//DOMContentLoaded

form.addEventListener("submit", searchEmojis);
input.addEventListener("keyup", searchEmojis);

btn.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        e.preventDefault();
        const btnCat = e.target.value.toLowerCase();
        // console.log(btnCat)
        filterEmoji(btnCat);
    })
})

function filterEmoji(btnCat){
    if(btnCat==="all"){
        displayEmojis(emojiList);
        return
    }
    const filteredArr = emojiList.filter((obj)=>
        obj.description.toString().includes(btnCat));
    displayEmojis(filteredArr);
}

function searchEmojis(e) {
  e.preventDefault();
  const inputValue = input.value.toLowerCase();

  const filteredArr = emojiList.filter((obj) => {
    return (
      obj.description.includes(inputValue) ||
      obj.tags.toString().includes(inputValue) ||
      obj.aliases.toString().includes(inputValue)
    );
  });

  console.log(filteredArr);
  displayEmojis(filteredArr);
}

function displayEmojis(arr) {
  resultsDiv.innerHTML = "";

  const fragment = document.createDocumentFragment();
  arr.forEach((obj) => {
    const parent = document.createElement("div");
    const icon = document.createElement("p");
    const alias = document.createElement("p");
    const desc = document.createElement("p");

    parent.classList.add("parent");
    icon.classList.add("icon");
    // alias.classList.add("alias");
    // desc.classList.add("desc");

    icon.innerText = obj.emoji;
    // alias.innerText = obj.aliases.toString();
    // desc.innerText = obj.description;

    parent.append(icon, alias, desc);
    fragment.append(parent);
  });
  resultsDiv.append(fragment);
}


// some()