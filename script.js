

    const flagData = [
      { name: "Australia", flag: "https://flagcdn.com/au.svg" },
      { name: "India", flag: "https://flagcdn.com/in.svg" },
      { name: "China", flag: "https://flagcdn.com/cn.svg" },
      { name: "Egypt", flag: "https://flagcdn.com/eg.svg" },
      { name: "Argentina", flag: "https://flagcdn.com/ar.svg" },
      { name: "South Korea", flag: "https://flagcdn.com/kr.svg" },
      { name: "Sweden", flag: "https://flagcdn.com/se.svg" },
      { name: "Norway", flag: "https://flagcdn.com/no.svg" },
      { name: "New Zealand", flag: "https://flagcdn.com/nz.svg" },
      { name: "Switzerland", flag: "https://flagcdn.com/ch.svg" },
      { name: "Poland", flag: "https://flagcdn.com/pl.svg" },
      { name: "Ukraine", flag: "https://flagcdn.com/ua.svg" },
      { name: "Malaysia", flag: "https://flagcdn.com/my.svg" },
      { name: "Thailand", flag: "https://flagcdn.com/th.svg" },
      { name: "Mexico", flag: "https://flagcdn.com/mx.svg" },
      { name: "Russia", flag: "https://flagcdn.com/ru.svg" },
      { name: "South Africa", flag: "https://flagcdn.com/za.svg" },
      { name: "Nigeria", flag: "https://flagcdn.com/ng.svg" },
      { name: "France", flag: "https://flagcdn.com/fr.svg" },
      { name: "Brazil", flag: "https://flagcdn.com/br.svg" },
      { name: "United States", flag: "https://flagcdn.com/us.svg" },
      { name: "Canada", flag: "https://flagcdn.com/ca.svg" },
      { name: "Germany", flag: "https://flagcdn.com/de.svg" },
      { name: "Italy", flag: "https://flagcdn.com/it.svg" },
      { name: "Japan", flag: "https://flagcdn.com/jp.svg" },
        { name: "United Kingdom", flag: "https://flagcdn.com/gb.svg" },
    { name: "Spain", flag: "https://flagcdn.com/es.svg" },
    { name: "Portugal", flag: "https://flagcdn.com/pt.svg" },
    { name: "Netherlands", flag: "https://flagcdn.com/nl.svg" },
    { name: "Vietnam", flag: "https://flagcdn.com/vn.svg" },
    { name: "Bangladesh", flag: "https://flagcdn.com/bd.svg" },
    { name: "Indonesia", flag: "https://flagcdn.com/id.svg" },
    { name: "Philippines", flag: "https://flagcdn.com/ph.svg" },
    { name: "Israel", flag: "https://flagcdn.com/il.svg" },
    { name: "Cuba", flag: "https://flagcdn.com/cu.svg" },
    { name: "Venezuela", flag: "https://flagcdn.com/ve.svg" },
    { name: "Iran", flag: "https://flagcdn.com/ir.svg" },
    { name: "Iraq", flag: "https://flagcdn.com/iq.svg" },
    { name: "Colombia", flag: "https://flagcdn.com/co.svg" },
    { name: "Peru", flag: "https://flagcdn.com/pe.svg" },
    { name: "Chile", flag: "https://flagcdn.com/cl.svg" },
    { name: "Morocco", flag: "https://flagcdn.com/ma.svg" },
    { name: "Algeria", flag: "https://flagcdn.com/dz.svg" },
    { name: "Ethiopia", flag: "https://flagcdn.com/et.svg" },
    { name: "Kenya", flag: "https://flagcdn.com/ke.svg" },
    { name: "Tanzania", flag: "https://flagcdn.com/tz.svg" },
    { name: "Greece", flag: "https://flagcdn.com/gr.svg" },
    { name: "Turkey", flag: "https://flagcdn.com/tr.svg" },
    { name: "Saudi Arabia", flag: "https://flagcdn.com/sa.svg" },
    { name: "Pakistan", flag: "https://flagcdn.com/pk.svg" },
    { name: "Uganda", flag: "https://flagcdn.com/ug.svg" }

];

let index = 0;
let points = 0;

document.addEventListener("DOMContentLoaded", () => {
  const flagImg = document.getElementById("flag-img");
  const userInput = document.getElementById("user-input");
  const checkBtn = document.getElementById("check-btn");
  const feedback = document.getElementById("feedback");
  const warning = document.getElementById("input-warning");
  const nextBtn = document.getElementById("next-btn");
  const scoreVal = document.getElementById("score-value");

  const showFlag = (i) => {
    flagImg.src = flagData[i].flag;
    userInput.value = "";
    feedback.textContent = "";
    warning.textContent = "";
  };

  const evaluateGuess = () => {
    const guess = userInput.value.trim().toLowerCase();
    const correct = flagData[index].country.toLowerCase();

    if (!guess) {
      warning.textContent = "⚠️ Please enter a country name!";
      return;
    }

    if (guess === correct) {
      feedback.textContent = "🎉 Great job! You guessed it right!";
      feedback.style.color = "green";
      points += 10;
      scoreVal.textContent = points;
      nextFlag();
    } else {
      feedback.textContent = `❌ Oops! It was ${flagData[index].country}.`;
      feedback.style.color = "red";
    }
  };

  const nextFlag = () => {
    index = (index + 1) % flagData.length;
    showFlag(index);
  };

  checkBtn.addEventListener("click", evaluateGuess);
  nextBtn.addEventListener("click", nextFlag);

  userInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      evaluateGuess();
    }
  });

  showFlag(index);
});
