player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementbyId("player1_name").innerHTML = player1_name + " : ";;
document.getElementbyId("player2_name").innerHTML = player2_name + " : ";

document.getElementbyId("player1_score").innerHTML = player1_score;
document.getElementbyId("player2_score").innerHTML = player2_score;

document.getElementbyId("player_quest").innerHTML = "Question Turn - " + player1_name;
document.getElementbyId("player_ans").innerHTML = "Answer Turn - " + player2_name;

question_turn = player1;
answer_turn = player2;

function send() {
    get_word = document.getElementById("word_written").value;
    word = get_word.toLowerCase();
    console.log(word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(word.length / 2);
    charAt2 = word.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_1 = word.length - 1;
    charAt3 = word.charAt(length_minus_1);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);

    //q/a display 
    question_word = "<h4 id='word_display'> Q - " + remove_charAt3 + "</h4>";
    input_box = "<br> Answer : <input type='text' id='input_box'>";
    check_button = "<br> <button class='btn btn-info' onclick='check ()'> Check </button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word_written").value = "";
}




// function check
function check() {
    get_answer = document.getElementById("input_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer guessed = " + answer);

    if (answer == word) {
        if (answer_turn == player1_name) {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
            console.log("P1 Score +1");
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
            console.log("P2 Score +1");
        }
    }

    if (question_turn == player1_name) {
        question_turn = player2_name;
        document.getElementById("player_quest").innerHTML = "Question Turn = " + player2_name;
    }
}