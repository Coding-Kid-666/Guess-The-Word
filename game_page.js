//Declaring variables
var player_1 = localStorage.getItem("Player_1");
var player_2 = localStorage.getItem("Player_2")

var score1 = 0;
var score2 = 0;

var question_turn = "player1";
var answer_turn = "player2";

var lives1 = 3;
var lives2 = 3;

//Giving text in html 
document.getElementById("plr1_name").innerHTML = player_1 + ":";
document.getElementById("plr2_name").innerHTML = player_2 + ":";

document.getElementById("plr1_score").innerHTML = score1;
document.getElementById("plr2_score").innerHTML = score2;

document.getElementById("player_question").innerHTML = "Question turn : " + player_1;
document.getElementById("player_answer").innerHTML = "Answer turn : " + player_2;

//Function send(complicated)
function send(){
    //Getting the typed word from Text Input
    get_word = document.getElementById("wordSend").value;

    //Making lowercase cuz case-sensitive answer
    Word = get_word.toLowerCase();
    console.log("User's word = "+get_word);
    console.log("LowerCase word = "+Word);

    //Declaring charAt1 and many other variables
    charAt1 = Word.charAt(1);
    lengthDivide = Math.floor(Word.length / 2);
    charAt2 = Word.charAt(lengthDivide);
    lengthMinus = Word.length - 1;
    charAt3 = Word.charAt(lengthMinus);

    //Replacing the 3 charAts with "_"
    remove_charAt1 = Word.replace(charAt1,"_");
    remove_charAt2 = remove_charAt1.replace(charAt2,"_");
    remove_charAt3 = remove_charAt2.replace(charAt3,"_");
    console.log(remove_charAt3);

    //The question and space for answer
    Question_Word = '<h4 id="word_replace">Q.' + remove_charAt3 + '</h4>';
    Input_Box = '<br>Answer:<input type="text" id="input_CheckBox">';
    Check_Button = '<br> <br> <button class="btn btn-info" onclick="check()">Check</button>';
    row = Question_Word + Input_Box + Check_Button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("wordSend").value = "";
}

function check(){
    var get_answer = document.getElementById("input_CheckBox").value;
    var answer = get_answer.toLowerCase();
    if(Word == answer){
        if(answer_turn == "player1"){
            score1 = score1 + 1;
            document.getElementById("plr1_score").innerHTML = score1;
        }else{
            score2 = score2 + 1;
            document.getElementById("plr2_score").innerHTML = score2;
        }
    }else{
        if(answer_turn == "player1"){
            lives1 = lives1 - 1;
            document.getElementById("if_wrong").innerHTML = "The answer is not correct," + player_1 + ". You have " + lives1 + " chances left"; 
            if(lives1 == 0){
                document.getElementById("if_wrong").innerHTML = "Your chances are now 0,"+player_1+". You will lose a point and the turns will switch."
                score1 = score1 - 1;
                score2 = score2 + 1;
                document.getElementById("plr2_score").innerHTML = score2;
                document.getElementById("plr1_score").innerHTML = score1;
                lives1 = 3;
            }
        }
        if(answer_turn == "player2"){
            lives2 = lives2 - 1;
            document.getElementById("if_wrong").innerHTML = "The answer is not correct," + player_2 + ". You have " + lives2 + " chances left"; 
            if(lives1 == 0){
                document.getElementById("if_wrong").innerHTML = "Your chances are now 0,"+player_2+". You will lose a point and the turns will switch."
                score2 = score2 - 1;
                score1 = score1 + 1;
                document.getElementById("plr1_score").innerHTML = score1;
                document.getElementById("plr2_score").innerHTML = score2;
                lives2 = 3;
            }
        }
    }
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn:"+player_2;
    }else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn:"+player_1;
    }
    if(answer_turn == "player1"){
        if(score2 >= 10){
            document.getElementById("unlock").innerHTML = player_2+", You have unlocked: Hints"
            button_hint = "<button id='hint' class='btn btn-success' onclick='giveHint()'>Hint</button>";
            document.getElementById("unlocked").innerHTML = button_hint;
        }
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn:"+player_2;
    }else{
        if(score1 >= 10){
            document.getElementById("unlock").innerHTML = player_1+", You have unlocked: Hints"
            button_hint = "<button id='hint' class='btn btn-success' onclick='giveHint()'>Hint</button>";
            document.getElementById("unlocked").innerHTML = button_hint;
        }
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn:"+player_1;
    }
    document.getElementById("output").innerHTML = "";
}

function giveHint(){
    hint_charAt = Word.charAt(1);
    remove_charAt4 = remove_charAt3.replace("_", hint_charAt);
    Question_Word = '<h4 id="word_replace">Q.' + remove_charAt4 + '</h4>';
    Input_Box = '<br>Answer:<input type="text" id="input_CheckBox">';
    Check_Button = '<br> <br> <button class="btn btn-info" onclick="check()">Check</button>';
    row = Question_Word + Input_Box + Check_Button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("wordSend").value = "";
    button_hint = "";
    document.getElementById("unlocked").innerHTML = button_hint;
}