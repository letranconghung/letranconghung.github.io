{
  const GameController = {
    data: {
      scores: {
        bot: 0,
        user: 0
      },
      previousState: {
        winner: 0, // 0 if it's a tie, -1 if user loses, 1 if user wins
        botChange: 0,
        userChange: 0
        //the number of points changed due to the round
      },
      limit: 0,
    },
    handleResults: function(verdict, botChoice, userChoice,botStatement, userStatement, botRoundPoints, userRoundPoints){
      this.data.scores.bot += botRoundPoints;
      this.data.scores.user += userRoundPoints;
      document.getElementById('botscore').textContent = this.data.scores.bot;
      document.getElementById('userscore').textContent = this.data.scores.user;
      let display = `You chose ${userChoice} and the bot chose ${botChoice} so it's a ${verdict}. The bot ${botStatement} and you ${userStatement}.`;
      if(this.data.scores.bot >= this.data.limit){
        display += ` The bot has won.`; 
        main.winnerDecided = true;
        alert(`The bot has won! Restart to play a new game!`);
      }
      if(this.data.scores.user >= this.data.limit){
        display += ` You have won.`;
        main.winnerDecided = true;
        alert(`You have won! Restart to play a new game!`);
      }
      document.getElementById('logs').textContent = display;
      if(main.elimChoice !== ''){
        document.getElementById(main.elimChoice).style.opacity = 1;
        main.elimpressed= false;
        main.elimChoiceMade= false;
        main.elimChoice= '';
      }
      
    },
    handleChoicesCheated: function(botChoice, userChoice){
      let verdict, botRoundPoints, userRoundPoints, botStatement, userStatement;
      if(botChoice===userChoice){
        verdict = 'tie';
        botRoundPoints = 10;
        userRoundPoints = -10;
        botStatement = 'won 10 points';
        userStatement = 'lost 10 points';
      }else if((botChoice==='rock'&& userChoice==='scissors') ||(botChoice==='scissors'&& userChoice==='paper') || (botChoice==='paper'&& userChoice === 'rock')){
        verdict = 'loss for you :(';
        botRoundPoints = 20;
        userRoundPoints = -20;
        botStatement = 'won 20 points';
        userStatement = 'lost 20 points';
      }else{
        verdict = 'victory for you :)'
        botRoundPoints = -80;
        userRoundPoints = 80;
        botStatement = 'lost 80 points';
        userStatement = 'won 80 points';
      }
      this.handleResults(verdict, botChoice, userChoice, botStatement,userStatement, botRoundPoints, userRoundPoints);
    },
    handleChoicesNormal: function(botChoice, userChoice){
      let verdict, botRoundPoints, userRoundPoints, botStatement, userStatement;
      if(botChoice===userChoice){
        verdict = 'tie';
        botRoundPoints = 0;
        userRoundPoints = 0;
        botStatement = 'won 0 points';
        userStatement = 'won 0 points';
      }else if((botChoice==='rock'&& userChoice==='scissors') ||(botChoice==='scissors'&& userChoice==='paper') || (botChoice==='paper'&& userChoice === 'rock')){
        verdict = 'loss for you :(';
        botRoundPoints = 2;
        userRoundPoints = -2;
        botStatement = 'won 2 points';
        userStatement = 'lost 2 points';
      }else{
        verdict = 'victory for you :)'
        botRoundPoints = -2;
        userRoundPoints = 2;
        botStatement = 'lost 2 points';
        userStatement = 'won 2 points';
      }
      this.handleResults(verdict, botChoice, userChoice, botStatement,userStatement, botRoundPoints, userRoundPoints);
    },
    userMadeCheatedChoice: function(elimChoice, event){
      console.log('user made a cheated choice');

      const userChoice = event.srcElement.id;
      console.log(`you chose ${userChoice}`);
      const botChoices = ["rock", "paper", "scissors"].filter(function(value, index, arr){
        return value !== elimChoice;
      });
      console.log(botChoices);
      const botChoice = botChoices[Math.floor(Math.random()*2)];
      this.handleChoicesCheated(botChoice, userChoice);
      main.elimpressed = false;
    },
    userMadeNormalChoice: function(event){
      console.log('user made a normal choice');
      
      const userChoice = event.srcElement.id;
      const botChoice = ["rock", "paper", "scissors"][Math.floor(Math.random()*3)];
      this.handleChoicesNormal(botChoice, userChoice);
    
    }
  }
  const main = {
    elimpressed: false,
    elimChoiceMade: false,
    elimChoice: '',
    winnerDecided: false,
    setUpListeners: function(){
      if(!this.winnerDecided){
        const imgs = document.querySelectorAll('.img-fluid');
        const elimbtn = document.getElementById('elimbtn');
        for(let i = 0;i<imgs.length;++i){
          const img = imgs[i];
          img.addEventListener('click', (event)=>{
            if(this.elimpressed && !this.elimChoiceMade){
              console.log('elimpressed is true');
              img.style.opacity = 0.5;
              const containers = document.querySelectorAll('#headerContainer'+', '+'#scoreboard' + ', '+ '#rulesContainer');
              for(let i = 0;i<containers.length;++i){
                const container = containers[i];
                container.style.opacity = 1; 
              }
              this.elimChoiceMade = true;
              elimbtn.classList.toggle('btn-danger');
              elimbtn.classList.toggle('btn-success');
              document.getElementById('logs').textContent = `You have eliminated ${event.srcElement.id}, now make your choice`;
              this.elimChoice = event.srcElement.id;
              console.log(`the elimChoice is ${this.elimChoice}`);
            }else{
              if(this.elimChoiceMade){
                GameController.userMadeCheatedChoice(this.elimChoice,event);
              }else{
                GameController.userMadeNormalChoice(event);
              }
              
            }  
          });
        }
        elimbtn.addEventListener('click', (event)=>{
          if(!this.elimpressed){
            elimbtn.classList.toggle('btn-danger');
            elimbtn.classList.toggle('btn-success');
            const containers = document.querySelectorAll('#headerContainer'+', '+'#scoreboard' + ', '+ '#rulesContainer');
            for(let i = 0;i<containers.length;++i){
              const container = containers[i];
              container.style.opacity = 0.3; 
            }
            for(let i = 0;i<imgs.length;++i){
              const img = imgs[i];
              img.style.opacity = 1;
            }
            console.log('elim was pressed');
            document.getElementById('logs').textContent = "You chose to eliminate! Now eliminate 1 choice!";
            this.elimpressed = !this.elimpressed;
  
          }
          
        });
      }

    },
    init: function(){
      GameController.data.scores.bot = 0;
      GameController.data.scores.user = 0;
      this.setUpListeners();
      GameController.data.limit = prompt('Enter the number of points for the game to finish!', '100');

      
    }
  }
  main.init();
}

