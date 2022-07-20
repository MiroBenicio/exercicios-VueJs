const app = Vue.createApp({
    data() {
        return {
            myName: "Miro Benício",
            myAge: 20,
           /*  myFutureAge: 20+5, */
            imgUrl:'https://images.pexels.com/photos/11969709/pexels-photo-11969709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    },
    methods: {
        myFavoriteNumber() {
            let randomNumber = Math.random();
            return randomNumber;
        },

        myFutureAge() {
            let myFutureAge = this.myAge + 5;
            return myFutureAge;
        }
    }
})

app.mount('#assignment');