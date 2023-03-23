(function () {
	'use strict';

        // variables for the game elements
        const startGame = document.getElementById('startgame');
        const gameControl = document.getElementById('gamecontrol');
        const game = document.getElementById('game');
        const score = document.getElementById('score');
        const leftScore = document.getElementById('leftscore');
        const rightScore = document.getElementById('rightscore');
        const actionArea = document.getElementById('actions');
        
        // variables for the player characters
        let leftPlayer = document.getElementById('leftplayer');
        let rightPlayer = document.getElementById('rightplayer');        
        let moveLeft = 5;
        let moveRight = 5;
        let moveDist = .7;

        // variables for sound
        const moveSound = new Audio('sounds/step.mp3');
        const buttonSound = new Audio('sounds/oink.mp3');
        const switchSound = new Audio('sounds/grunt.mp3');
        const winSound = new Audio('sounds/chew.mp3');
        const boomSound = new Audio('sounds/creeper-explosion.mp3');

        // game object
        const gameData = 
        {
            dice: ['images/1die.png', 'images/2die.png', 'images/3die.png', 'images/4die.png', 'images/5die.png', 'images/6die.png'],
            players: ['player 1', 'player 2'],
            score: [0,0],
            roll1: 0,
            roll2: 0,
            index: 0,
            gameEnd: 29
        }

        startGame.addEventListener('click', function()
        {
            //randomly set game index here
            gameData.index = Math.round(Math.random());

            gameControl.innerHTML = '<h2 id="gamestatus" class="showing">The Game Has Started</h2>';
            gameControl.innerHTML += '<button id="quit">Wanna Quit?';
            leftScore.innerHTML = `<strong>0</strong>`;
            rightScore.innerHTML = `<strong>0</strong>`;
            document.getElementById('rules').className = 'hidden';
            document.getElementById('footer').className = 'hidden';
            // start button sound
            buttonSound.play();
            
            document.getElementById('quit').addEventListener('click', function()
            {
                location.reload();
            })

            setUpTurn();
        })

        function setUpTurn()
        {
            game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
            actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';

            document.getElementById('roll').addEventListener('click', function()
            {
                throwDice();
            })
        }

        function sendBackPlayer()
        {
            if (gameData.index === 1)
            {
                leftPlayer.style.left = `5%`;
                moveLeft = 5;
            }
            else
            {
                rightPlayer.style.right = `5%`;
                moveRight = 5;
            }
        }

        function revertPlayerImage()
        {
            leftPlayer.src = "images/left-pig.png";  
            rightPlayer.src = "images/right-pig.png";
        }

        function throwDice()
        {
            actionArea.innerHTML = '';
            
            // get random values from 1-6 for the score
            gameData.roll1 = Math.floor(Math.random() * 6) + 1;
            gameData.roll2 = Math.floor(Math.random() * 6) + 1;
            game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
            
            // put the dice images on the screen; the dice array index needs to be one less than roll1 and roll2
            game.innerHTML += `<img id="leftdice" src="${gameData.dice[gameData.roll1-1]}">
                                <img id="rightdice" src="${gameData.dice[gameData.roll2-1]}">`;
            
            gameData.rollSum = gameData.roll1 + gameData.roll2;
            // console.log(gameData.rollSum);

            // if two 1's are rolled
            if (gameData.rollSum === 2)
            {
                console.log('snake eyes');
                game.innerHTML += '<p>Oh snap! Creeper sneak attack!</p>';
                // snake eyes sound
                boomSound.play();

                // swaps image
                if (gameData.index === 0)
                {
                    leftPlayer.src = "images/left-pig-face.png";
                }
                else
                {
                    rightPlayer.src = "images/right-pig-face.png";
                }
                setTimeout (sendBackPlayer, 3000);
                setTimeout (revertPlayerImage, 5000);

                // resets score for that player
                gameData.score[gameData.index] = 0;
                // switches player
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);

                //show the current score
                showCurrentScore();

                setTimeout (setUpTurn, 5000);
            }
            // if either die is a 1
            else if (gameData.roll1 === 1 || gameData.roll2 === 1)
            {
                console.log('one of the two dice is a 1');
                // switch player
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
                // switch player sound
                switchSound.play();

                setTimeout (setUpTurn, 3000);
            }
            // if neither die is a 1
            else
            {
                console.log('the game proceeds');
                console.log(`move = ${moveLeft}, move = ${moveRight}`);
                gameData.score[gameData.index] += gameData.rollSum;
                actionArea.innerHTML = '<button id="rollagain">Roll again</button> <button id="pass">Pass</button>';
                // move player sound
                moveSound.play();

                if (gameData.index === 0)
                {
                    moveLeft += moveDist * gameData.rollSum;
                    leftPlayer.style.left = `${moveLeft}%`;
                    console.log('left player styling changed');
                }
                else
                {
                    moveRight += moveDist * gameData.rollSum;
                    rightPlayer.style.right = `${moveRight}%`;
                    console.log('right player styling changed');
                } 

                document.getElementById('rollagain').addEventListener('click', function()
                {
                    setUpTurn();
                    // roll again button sound
                    buttonSound.play();
                })

                document.getElementById('pass').addEventListener('click', function()
                {
                    // switch player
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    setUpTurn();
                    // pass button sound
                    buttonSound.play();
                })

                checkWinningCondition();
            }
        }

        function checkWinningCondition()
        {
            if(gameData.score[gameData.index] > gameData.gameEnd)
            {
                score.innerHTML = `<h2>${gameData.players[gameData.index]}'s pig gets the carrot!</h2>`;
                document.getElementById('quit').innerHTML = 'Start a New Game';
                document.getElementById('gamestatus').className = 'hidden';
                game.className = 'hidden';
                actionArea.className = 'hidden';
                // player wins sound
                winSound.play();
            }
            else
            {
                showCurrentScore();
            }
        }

        function showCurrentScore()
        {
            leftScore.innerHTML = `<strong>${gameData.score[0]}</strong>`;
            rightScore.innerHTML = `<strong>${gameData.score[1]}</strong>`;
        }
})();