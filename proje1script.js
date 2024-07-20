"use strict";

let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

//functions (displayMessages, numbers, scores) for the message box and number and score
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const numbers = function (number) {
  document.querySelector(".number").textContent = number;
};

const scores = function (score) {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no number
  if (!guess) {
    displayMessage("No Number!");

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    numbers(secretNumber);
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // score 1 den büyük dedik; score 1 iken bastığımızda mesajın değişmesi, kaybettiniz yazması gerekiyor ve score 0 a eşitleniyor (yani else kısım devreye giriyor.)
      displayMessage(guess > secretNumber ? "Too High!" : "Too Low");
      score--; //displayMessage fonksiyona turnery yöntemini kullandık, guees secretNumber dan büyük mü, büyükse çok büyük, küçükse çok küçük yazılsın,
      scores(score);
    } else {
      displayMessage("You lost the game:(");
      scores(0); // score u 0 a eşitle
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20; //score yeniden 20 ile başlasın
  scores(score); //scoru scores fonksiyonu ile score bölümüne yazık
  secretNumber = Math.floor(Math.random() * 20 + 1); // yeniden farklı bir gizli sayı üretsin
  numbers("?"); // gizli sayı yazılı bölüm ? işareti ile başlasın
  displayMessage("Start guessing..."); //mesaj bölümü
  document.querySelector("body").style.backgroundColor = "#222"; // arkaplan rengi
  document.querySelector(".number").style.width = "15rem"; // gizli sayının yzıldığı yer ilk boyutunu alıyor
  document.querySelector(".guess").value = ""; // numara girdiğimiz yeri boş bırakıyoruz
});
