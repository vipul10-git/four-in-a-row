export function  GameLogic(col,row,player){
    let flagHorizontal = 0;
    let flagDiagonal = 0;
    let flagVertical = 0;
    let winFlg = false;

    //horizontal
    for(let i=col;i<8;i++){
        let idToTest = `col-${i}--row-${row}`
        let userAvailable = document.getElementById(idToTest).getAttribute("data-user" )  
        if(userAvailable == player){
            flagHorizontal++
            if(flagHorizontal === 4){
                winFlg = true
            }
        }else{
            flagHorizontal = 0 
        }
    }

    //vertical
    for(let i=0;i<8;i++){
        let idToTest = `col-${col}--row-${i}`
        let userAvailable = document.getElementById(idToTest).getAttribute("data-user" )  
        if(userAvailable == player){
            flagVertical++
            if(flagVertical === 4){
                winFlg = true
            }
        }else{
            flagVertical = 0 
        }
    }

    //diagonal 
    let initialColumnLeft = col;
    let initialRowLeft = row;
    let finalColumnLeft = col;
    let finalRowLeft = row;
    for(let i =0 ;i<8;i++){
        if(initialColumnLeft <7 && initialRowLeft >0){
            initialColumnLeft++
            initialRowLeft--;
        }
    }
    finalRowLeft = initialColumnLeft;
    finalColumnLeft = initialRowLeft;
    for(let i=0;i<8;i++){
        if(initialColumnLeft >= finalColumnLeft && initialRowLeft <= finalRowLeft){
            let idToTest = `col-${initialColumnLeft--}--row-${initialRowLeft++}`;
            let userAvailable = document.getElementById(idToTest).getAttribute("data-user" )  
            if(userAvailable == player){
                flagDiagonal++
                if(flagDiagonal === 4){
                    winFlg = true
                }
            }else{
                flagDiagonal = 0 
            }
        }
    }

    //diagonal 2
    let initialColumnRight = col;
    let initialRowRight= row;
    for(let i =0 ;i<8;i++){
        if(initialColumnRight >0 && initialColumnRight <=7 && initialRowRight >0 && initialRowRight <=7){
            initialColumnRight--;
            initialRowRight--;
        }
    }
    for(let i=0;i<8;i++){
        if(initialColumnRight <= 7 && initialRowRight <= 7){
            let idToTest = `col-${initialColumnRight++}--row-${initialRowRight++}`;
            let userAvailable = document.getElementById(idToTest).getAttribute("data-user" )  
            if(userAvailable == player){
                flagDiagonal++
                if(flagDiagonal === 4){
                    winFlg = true
                }
            }else{
                flagDiagonal = 0 
            }
        }
    }
    return winFlg;
}