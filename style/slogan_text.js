const arrText = document.querySelectorAll(".textMove p");
let maxMoveSize = [arrText[0].clientWidth, arrText[0].clientWidth * 2];
let moveAmount = [0, 0];
let moveText = MoveText();

function MoveText(){
  return setInterval(()=>{
    arrText[0].style.transform = `translateX(${-moveAmount[0]++}px)`;
    if(moveAmount[0] > maxMoveSize[0]){
      moveAmount[0] = -maxMoveSize[0];
    }
    arrText[1].style.transform = `translateX(${-moveAmount[1]++}px)`;
    if(moveAmount[1] > maxMoveSize[1]){
      moveAmount[1] = 0;
    }
  }, 7);
}