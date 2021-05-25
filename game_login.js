function addUser(){
    //Variables declaration
    player1 = document.getElementById("plr1Input").value;
    player2 = document.getElementById("plr2Input").value;

    //Local storage use for storing player usernames
    localStorage.setItem("Player_1", player1);
    localStorage.setItem("Player_2", player2);

    //Redirecting back to the HTML file
    window.location.replace("game_page.html");
}