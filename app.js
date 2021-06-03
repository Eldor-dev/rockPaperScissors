    let userScore = 0;
    let computerScore = 0;
    const userScore_span = document.getElementById("user-score");
    const computerScore_span = document.getElementById("computer-score");
    const scoreBoard_div = document.querySelector(".score-board");
    const result_p = document.querySelector(".result > p");
    const rock_div = document.getElementById("r");
    const paper_div = document.getElementById("p");
    const scissors_div = document.getElementById("s");
    
    function getComputerChoice() {
        const choices = ["r", "p", "s"];
        const randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }
     
    function convert(letter) {
        if (letter === "r") return "Rock";
        if (letter === "p") return "Paper";
        return "Scissors";
    }

    function win(user, computer) {
       userScore++;
       userScore_span.innerHTML = userScore;
       computerScore_span.innerHTML = computerScore;
       const user_div = document.getElementById(user);
       result_p.innerHTML = `${convert(user)}(user) beats ${convert(computer)}(computer) . You win!`; 
       user_div.classList.add("green-glow");
       setTimeout(() => user_div.classList.remove("green-glow"), 300);
    }

    function lose(user, computer) {
       computerScore++;
       userScore_span.innerHTML = userScore;
       computerScore_span.innerHTML = computerScore;
       const user_div = document.getElementById(user);
       result_p.innerHTML = `${convert(user)}(user)  loses to ${convert(computer)}(computer) . You lose!`;
       user_div.classList.add("red-glow");
       setTimeout(() => user_div.classList.remove("red-glow"), 300);
    }

    function draw(user, computer) {
       computerScore_span.innerHTML = computerScore;
       result_p.innerHTML = `${convert(user)}(user)  equals to  ${convert(computer)}(computer) . It's a draw!`;
       const user_div = document.getElementById(user);
       user_div.classList.add("grey-glow");
       setTimeout(() => user_div.classList.remove("grey-glow") , 300);
    }

    function game(userChoice) {
        const computerChoice = getComputerChoice();
        switch(userChoice + computerChoice) {
            case "rs":
            case "pr":
            case "sp":
                win(userChoice, computerChoice);
                break;
            case "sr":
            case "rp":
            case "ps":
                lose(userChoice, computerChoice);
                break;
            case "rr":
            case "pp":
            case "ss":
                draw(userChoice, computerChoice);
                break;    
                    
        }

    }

    function main() {
        rock_div.addEventListener('click', () => game('r'));

        paper_div.addEventListener('click', () => game('p'));

        scissors_div.addEventListener('click', () => game('s'));
    }

    main();