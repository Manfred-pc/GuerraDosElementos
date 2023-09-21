let userScore = 0;
let computerScore = 0;
const userScore_spam = document.getElementById("user-score");
const computerScore_spam = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const sangue_div = document.getElementById("s");
const morte_div = document.getElementById("m");
const conhecimento_div = document.getElementById("c");
const energia_div = document.getElementById("e");

function getComputerChoice() {
  const choices = ['s', 'm', 'c', 'e'];
  const randomNumber = Math.floor(Math.random() * 4);
  return choices[randomNumber];
}

function converterLetra(letra) {

  if (letra === 's') {
    return "Sangue";
  }
  else if (letra === 'm') {
    return "Morte";
  }
  else if (letra === 'c') {
    return "Conhecimento";
  }
  else {
    return "Energia";
  }
}

function win(userChoice, computerChoice) {
  userScore++;
  const letraPequenaUser = "Realidade".fontsize(3).sub();
  const letraPequenaPc = "Outro lado".fontsize(3).sub();
  userScore_spam.innerHTML = userScore;
  computerScore_spam.innerHTML = computerScore;
  result_p.innerHTML = `${converterLetra(userChoice)}${letraPequenaUser}é eficaz contra ${converterLetra(computerChoice)}${letraPequenaPc}.<br>Você venceu.`;

  if (userScore === 10) {
    mudaPagina(1);
  }
}
function lose(userChoice, computerChoice) {
  computerScore++;
  const letraPequenaUser = "Realidade".fontsize(3).sub();
  const letraPequenaPc = "Outro lado".fontsize(3).sub();
  userScore_spam.innerHTML = userScore;
  computerScore_spam.innerHTML = computerScore;
  result_p.innerHTML = `${converterLetra(userChoice)}${letraPequenaUser}é ineficaz contra ${converterLetra(computerChoice)}${letraPequenaPc}.<br>Você perdeu.`;

  if (computerScore === 3) {
    mudaFundo(1);
  } else if (computerScore === 6) {
    mudaFundo(2);
  } else if (computerScore === 8) {
    mudaFundo(3);
  } else if (computerScore === 10) {
    mudaPagina(2);
  }
}
function draw(userChoice, computerChoice) {
  const letraPequenaUser = "Realidade".fontsize(3).sub();
  const letraPequenaPc = "Outro lado".fontsize(3).sub();
  userScore_spam.innerHTML = userScore;
  computerScore_spam.innerHTML = computerScore;
  result_p.innerHTML = `${converterLetra(userChoice)}${letraPequenaUser}e ${converterLetra(computerChoice)}${letraPequenaPc}mantém o equilíbrio.<br>Empate.`;
}




function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case ("sc"):
    case ("ms"):
    case ("ce"):
    case ("em"):
      win(userChoice, computerChoice);
      break;

    case ("sm"):
    case ("me"):
    case ("cs"):
    case ("ec"):
      lose(userChoice, computerChoice);
      break;

    case ("ss"):
    case ("mm"):
    case ("cc"):
    case ("ee"):
      draw(userChoice, computerChoice);
      break;

    default:
      draw(userChoice, computerChoice);
      break;


  }

}


function main() {
  sangue_div.addEventListener('click', function () {
    game("s");
  });
  morte_div.addEventListener('click', function () {
    game("m");
  });
  conhecimento_div.addEventListener('click', function () {
    game("c");
  });
  energia_div.addEventListener('click', function () {
    game("e");
  });
}
main();


function mudaFundo(grau) {

  if (grau === 1) {
    document.body.style.backgroundImage = "url('')";
  } else if (grau === 7) {
    document.body.style.backgroundImage = "url('../images/Membrana.jpeg')";
  } else {
    document.body.style.backgroundImage = "url('../images/Membrana.jpeg')";
  }

}
function mudaPagina(rotas) {
  if (rotas === 1) {
    window.location.href = "./realidade.html";
    /*http://localhost:8158/index.html*/
  } else {
    window.location.href = "./outro_lado.html";
  }
}
