new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack: function() {
      var damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: "Player hits Monster for " + damage
      });
      if (this.checkWin()) return;

      this.monsterAttaks();
    },
    specialAttack: function() {
      var damage = this.calculateDamage(10, 20);
      this.monsterHealth -= damage;
      if (this.checkWin()) return;

      this.monsterAttaks();
      this.turns.unshift({
        isPlayer: true,
        text: "Player hits Monster hard for " + damage
      });
    },
    heal: function() {
      this.playerHealth = Math.min(this.playerHealth + 10, 100);
      this.monsterAttaks();
      this.turns.unshift({
        isPlayer: true,
        text: "Player heals for 10"
      });
    },
    giveUp: function() {
      this.gameIsRunning = false;
    },
    monsterAttaks: function() {
      var damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;
      this.checkWin();
      this.turns.unshift({
        isPlayer: false,
        text: "Monster hits Player for " + damage
      });
    },
    calculateDamage: function(mn, mx) {
      return Math.floor(Math.random() * (mx - mn) + mn);
    },
    checkWin: function() {
      if (this.monsterHealth <= 0) {
        if (confirm("You won! New Game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm("You Lost! New Game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  }
});
