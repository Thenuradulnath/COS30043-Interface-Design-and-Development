const app = Vue.createApp({
    data() {
        return {
            guess: null,
            message: 'Start guessing',
            numberToGuess: this.getRandomInt(1, 100) // Generate initial random number
        };
    },
    methods: {
        checkGuess() {
            if (this.guess === this.numberToGuess) {
                this.message = 'You got it!';
            } else if (this.guess > this.numberToGuess) {
                this.message = 'Guess lower';
            } else {
                this.message = 'Guess higher';
            }
        },
        giveUp() {
            this.message = `The number was ${this.numberToGuess}`;
        },
        startOver() {
            this.numberToGuess = this.getRandomInt(1, 100); // Generate new random number
            this.guess = null;
            this.message = 'Start guessing';
        },
        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }
});
  
app.mount("#app");
