const app = Vue.createApp({
    data() {
        return {
            numWt: 0,
            numHt: 0,
        };
    },
    computed: {
        numBMI() {
            if (this.numHt > 0) {
                const height = this.numHt / 100;
                return this.numWt / (height * height);
            }
            return 0;
        },
    },
    methods: {
        Message(bmi) {
            if (bmi < 18.5) {
                return "Underweight!! gain more weight ";
            } else if (bmi < 25) {
                return "Normal weight. Good work and maintain it!";
            } else if (bmi < 30) {
                return "Overweight! do some exercise plz!";
            } else {
                return "Obese!!! Get ur ass up and do some exercise";
            }
        },
    },
});
app.mount("#app");