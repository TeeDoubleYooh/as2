
let restart = document.querySelector('.restart')
restart.style.display = 'none';
let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

const main = document.querySelector('main');

//Player = 2, Wall = 1, Enemy = 3, Point = 0
let maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 7, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

console.log(maze)

//Random Enemy Testing
// function randomEnemy() {
//     let row = Math.floor(Math.random() * maze.length);
//     let column = Math.floor(Math.random() * maze[row].length);

//     if (maze[row][column] !== maze[0]) {
//         maze[row][column] = 3;
//     }
// }
function randomEnemy() {
    let row, column;
    do {
        row = Math.floor(Math.random() * maze.length);
        column = Math.floor(Math.random() * maze[row].length);
    } while (maze[row][column] !== 0);
    maze[row][column] = 3;
}



randomEnemy();
randomEnemy();
randomEnemy();

//random enemy movement




// enemies.forEach(enemy => {
//     let enemyPos = enemy.getBoundingClientRect();
//     let enemyTop = parseInt(enemy.style.top)  0; //PARSE INT SO ITS NOT RETURNING A STRING!!!!
//     let enemyLeft = parseInt(enemy.style.left)  0;
//     let direction = enemy.direction || randomNumber();

// if (randomNumber == 1) {
//     let position = enemy.getBoundingClientRect()
//     let newBottom = position.bottom + 1;

//     let btmL = document.elementFromPoint(position.left, newBottom)
//     let btmR = document.elementFromPoint(position.right, newBottom)
//     if (btmL.classList.contains('wall') == false && btmR.classList.contains('wall') == false) {
//         enemyTop++;
//         enemy.style.top = enemyTop + 'px';
//     }
// }




// setInterval(function () {
//     let enemies = document.querySelectorAll('.enemy')
//     for (const enemy of enemies){
//         const enemyPosition = enemy.getBoundingClientRect();
//     }
//         if (randomNumber == 1) {
//             let position = enemy.getBoundingClientRect()
//             let enemyBottom = position.bottom + 1;

//             let btmL = document.elementFromPoint(position.left, enemyBottom)
//             let btmR = document.elementFromPoint(position.right, enemyBottom)
//             if (btmL.classList.contains('wall') == false && btmR.classList.contains('wall') == false) {
//                 enemyTop++;
//                 enemy.style.top = enemyTop + 'px';
//             }
//         }
//         else if (randomNumber == 2) {
//             let position = enemy.getBoundingClientRect()
//             let enemyTop = position.top - 1;

//             let topL = document.elementFromPoint(position.left, enemyTop)
//             let topR = document.elementFromPoint(position.right, enemyTop)
//             if (topL.classList.contains('wall') == false && topR.classList.contains('wall') == false) {
//                 enemyTop--;
//                 enemy.style.top = enemyTop + 'px';
//             }
//         }
//         else if (randomNumber == 3) {
//             let position = enemy.getBoundingClientRect()
//             let enemyLeft = position.left - 1;

//             let topL = document.elementFromPoint(enemyLeft, position.top)
//             let btmL = document.elementFromPoint(enemyLeft, position.bottom)
//             if (topL.classList.contains('wall') == false && btmL.classList.contains('wall') == false) {
//                 enemyLeft--;
//                 enemy.style.left = enemyLeft + 'px';
//             }
//         }
//         else if (rightPressed) {
//             let position = enemy.getBoundingClientRect()
//             let enemyRight = position.right + 1;

//             let topR = document.elementFromPoint(enemyRight, position.top)
//             let btmR = document.elementFromPoint(enemyRight, position.bottom)
//             if (topR.classList.contains('wall') == false && btmR.classList.contains('wall') == false) {
//                 enemyLeft++;
//                 enemy.style.left = enemyLeft + 'px';
//             }
//         }
// }, 100);
let enemyTop = 0;
let enemyLeft = 0;

function randomNumber() {
    return Math.floor(Math.random() * 4) + 1;
}

let enemies = document.querySelectorAll('.enemy');
let holdEnemy = true;
setInterval(function moveEnemy() {
    if (holdEnemy) return;

    enemies = document.querySelectorAll('.enemy');

    enemies.forEach(enemy => {
        let posEnemy = enemy.getBoundingClientRect();
        let direction = enemy.direction || randomNumber();
        let topEnemy = parseInt(enemy.style.top) || 0;
        let leftEnemy = parseInt(enemy.style.left) || 0;

        switch (direction) { // Enemy moving down
            case 1: 
                newBottom = posEnemy.bottom + 1;
                btmL = document.elementFromPoint(posEnemy.left, newBottom);
                btmR = document.elementFromPoint(posEnemy.right, newBottom);

                if (!btmL.classList.contains('wall') && !btmR.classList.contains('wall')) {
                    topEnemy++;
                } else {
                    direction = randomNumber();
                }
                break;
                // Enemy moving up
            case 2: 
                newTop = posEnemy.top - 1;
                topL = document.elementFromPoint(posEnemy.left, newTop);
                topR = document.elementFromPoint(posEnemy.right, newTop);

                if (!topL.classList.contains('wall') && !topR.classList.contains('wall')) {
                    topEnemy--;
                } else {
                    direction = randomNumber();
                }
                break;
                // Enemy moving left
            case 3: 
                newLeft = posEnemy.left - 1;
                leftTop = document.elementFromPoint(newLeft, posEnemy.top);
                leftBottom = document.elementFromPoint(newLeft, posEnemy.bottom);

                if (!leftTop.classList.contains('wall') && !leftBottom.classList.contains('wall')) {
                    leftEnemy--;
                } else {
                    direction = randomNumber();
                }
                break;
                // Enemy moving right
            case 4: 
                newRight = posEnemy.right + 1;
                rightTop = document.elementFromPoint(newRight, posEnemy.top);
                rightBottom = document.elementFromPoint(newRight, posEnemy.bottom);

                if (!rightTop.classList.contains('wall') && !rightBottom.classList.contains('wall')) {
                    leftEnemy++;
                } else {
                    direction = randomNumber();
                }
                break;
        }

        enemy.style.top = topEnemy + 'px';
        enemy.style.left = leftEnemy + 'px';
        enemy.direction = direction;
    });
}, 10);


//Populates the maze in the HTML
for (let y of maze) {
    for (let x of y) {
        let block = document.createElement('div');
        block.classList.add('block');

        switch (x) {
            case 1:
                block.classList.add('wall');
                break;
            case 2:
                block.id = 'player';
                let mouth = document.createElement('div');
                mouth.classList.add('mouth');
                block.appendChild(mouth);
                break;
            case 3:
                //
                //
                block.classList.add('enemy');
                break;
            default:
                block.classList.add('point');
                block.style.height = '1vh';
                block.style.width = '1vh';
        }

        main.appendChild(block);
    }
}

//Player movement
function keyUp(event) {
    if (event.key === 'ArrowUp') {
        upPressed = false;
    } else if (event.key === 'ArrowDown') {
        downPressed = false;
    } else if (event.key === 'ArrowLeft') {
        leftPressed = false;
    } else if (event.key === 'ArrowRight') {
        rightPressed = false;
    }
}

function keyDown(event) {
    if (event.key === 'ArrowUp') {
        upPressed = true;
    } else if (event.key === 'ArrowDown') {
        downPressed = true;
    } else if (event.key === 'ArrowLeft') {
        leftPressed = true;
    } else if (event.key === 'ArrowRight') {
        rightPressed = true;
    }
}

const player = document.querySelector('#player');
const playerMouth = player.querySelector('.mouth');
let playerTop = 0;
let playerLeft = 0;

setInterval(function () {

    pointCheck();

    if (downPressed) {
        let position = player.getBoundingClientRect()
        let newBottom = position.bottom + 1;

        let btmL = document.elementFromPoint(position.left, newBottom)
        let btmR = document.elementFromPoint(position.right, newBottom)
        if (btmL.classList.contains('wall') == false && btmR.classList.contains('wall') == false) {
            playerTop++;
            player.style.top = playerTop + 'px';
        }
        playerMouth.classList = 'down';
    }
    else if (upPressed) {
        let position = player.getBoundingClientRect()
        let newTop = position.top - 1;

        let topL = document.elementFromPoint(position.left, newTop)
        let topR = document.elementFromPoint(position.right, newTop)
        if (topL.classList.contains('wall') == false && topR.classList.contains('wall') == false) {
            playerTop--;
            player.style.top = playerTop + 'px';
        }
        playerMouth.classList = 'up';
    }
    else if (leftPressed) {
        let position = player.getBoundingClientRect()
        let newLeft = position.left - 1;

        let topL = document.elementFromPoint(newLeft, position.top)
        let btmL = document.elementFromPoint(newLeft, position.bottom)
        if (topL.classList.contains('wall') == false && btmL.classList.contains('wall') == false) {
            playerLeft--;
            player.style.left = playerLeft + 'px';
        }
        playerMouth.classList = 'left';
    }
    else if (rightPressed) {
        let position = player.getBoundingClientRect()
        let newRight = position.right + 1;

        let topR = document.elementFromPoint(newRight, position.top)
        let btmR = document.elementFromPoint(newRight, position.bottom)
        if (topR.classList.contains('wall') == false && btmR.classList.contains('wall') == false) {
            playerLeft++;
            player.style.left = playerLeft + 'px';
        }
        playerMouth.classList = 'right';

    } 
    enemyCollision();
}, 10);


let score = 0;
function pointCheck() {
    const position = player.getBoundingClientRect();
    const points = document.querySelectorAll('.point');

    for (let i = 0; i < points.length; i++) {
        let pos = points[i].getBoundingClientRect();
        if (
            position.right > pos.left &&
            position.left < pos.right &&
            position.bottom > pos.top &&
            position.top < pos.bottom
        ) {
            points[i].classList.remove('point');
            score++;
            document.querySelector('.score p').textContent = score;
        }
    }
    if (points.length <= 0) {

        endGame();
    }
}

// custom colour changing start
const colours = document.querySelectorAll('li');
for (let i = 0; i < colours.length; i++) {
    colours[i].addEventListener('click', setColor);
}
function setColor() {
    player.style.backgroundColor = this.id;
}
// end
let lives = 3
function livesFunc() {
    let lives = document.querySelectorAll('.lives ul li');
    lives[0].parentNode.removeChild(lives[0]);
}
let hit = false;
function enemyCollision() {
    if(hit) return;
    let position = player.getBoundingClientRect();
    let enemies = document.querySelectorAll('.enemy');
    for (const enemy of enemies) {
        const posEnemy = enemy.getBoundingClientRect();

        if (
            position.right > posEnemy.left &&
            position.left < posEnemy.right &&
            position.bottom > posEnemy.top &&
            position.top < posEnemy.bottom
        ) {
            player.classList.add('hit');
            hit = true;
            lives--;
            livesFunc();

            setTimeout(() =>{
                player.classList.remove('hit');
                hit = false;
            }, 1500)
            if(lives<= 0){
                endGame();
                
            }
        }
    }
}









        function endGame() {
            
            myHeader.innerText = "Game Over";
            player.classList.add('dead')
            holdEnemy = true;
            restart.style.display = 'flex';
            restart.addEventListener('click', reload);
            document.removeEventListener(('keydown', keyDown), 10);
            document.removeEventListener(('keyup', keyUp), 10);

        }

        function reload() {
            location.reload();

        }


        const start = document.querySelector('#startButton');
        function startGame() {
            
            start.style.display = 'none';
            holdEnemy = false;
            document.addEventListener('keydown', keyDown);
            document.addEventListener('keyup', keyUp);




        }

        start.addEventListener('click', startGame);

