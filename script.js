let buttons=document.querySelectorAll(".btn-option");
let message=document.getElementById("message");
let popup=document.getElementById("popup");
let current_player="X";
let restart=document.getElementById("restart").addEventListener("click",restartFo);
let userc1=document.getElementById("us1");
let userc2=document.getElementById("us2");
let game_over=false;
let c1=0;
let c2=0;
let board=["","","","","","","","",""];

for (let i = 0; i < buttons.length; i++) {
    let btn =buttons[i];
    btn.addEventListener("click",function() {
        main(btn);
    });
}
function main(btn){
    if(btn.innerHTML != ""){ // if box is already filled
        return; // return early
    }
    btn.innerHTML=current_player;
    board[btn.id - 1]=current_player;
    check();
    change_player();
}
function check(){
    check_horizontal();
    check_vertical();
    check_diaganal();
    check_draw();
}
function check_horizontal(){
    if(allEqual([board[0], board[1], board[2], current_player])){
        message.innerHTML=current_player+" won";
        popup.classList.remove("hide");
        count_point();
        game_over=true;
    }else if(allEqual([board[3], board[4], board[5],current_player])){
        message.innerHTML=current_player+" won";
        popup.classList.remove("hide");
        count_point();
        game_over=true;
    }else if(allEqual([board[6], board[7], board[8], current_player])){
        message.innerHTML=current_player+" won";
        popup.classList.remove("hide");
        count_point();
        game_over=true;
    }
}
function check_vertical(){
    if(allEqual([board[0], board[3], board[6], current_player])){
        message.innerHTML=current_player+" won";
        popup.classList.remove("hide");
        count_point();
        game_over=true;
    }else if(allEqual([board[1], board[4], board[7],current_player])){
        message.innerHTML=current_player+" won";
        popup.classList.remove("hide");
        count_point();
        game_over=true;
    }else if(allEqual([board[2], board[5], board[8], current_player])){
        message.innerHTML=current_player+" won";
        popup.classList.remove("hide");
        count_point();
        game_over=true;
    }
}
function check_diaganal(){
    if(allEqual([board[0], board[4], board[8], current_player])){
        message.innerHTML=current_player+" won";
        popup.classList.remove("hide");
        count_point();
        game_over=true;
    }else if(allEqual([board[2], board[4], board[6],current_player])){
        message.innerHTML=current_player+" won";
        popup.classList.remove("hide");
        count_point();
        game_over=true;
    }
}
function check_draw(){
    let check_exists=board.includes("");
    if(allEqual(board)==false && check_exists==false){
        if(game_over != true){
            message.innerHTML="Draw";
            popup.classList.remove("hide");
            game_over=true;
        }
    }
}
function change_player(){
    if(current_player=="O"){
        current_player="X";
    }else{
        current_player="O";
    }
}
function restartFo(){
    popup.classList.add("hide");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML="";
        board[i]="";
    }
    game_over=false;
}
function count_point(){
    if(current_player=="O"){
        c1+=1;
        userc1.innerHTML=c1;
    }else{
        c2+=1;
        userc2.innerHTML=c2;
    }
}
function allEqual(array) {
    if (!Array.isArray(array)) {
      return false;
    }
    const result = array.every((element) => {
      if (element === array[0]) {
        return true;
      }
    });
    return result;
}