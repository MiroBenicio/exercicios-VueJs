const app = Vue.createApp({
    data() {
        return {
            result: 0
        }
    },

    watch:{
        result() { setTimeout(() => {
           return this.result = 0;
        }, 5000) }
    },

    computed: {
        resultFunction(){
           /*  if (this.result < 37) {
                return this.result = "Not there yet";
            } else if (this.result == 37) { 
                return this.result;
            } else {
                return this.result = "Too much";
            } */

            if(this.result == 12) {
                return this.result;
            } else if (this.result < 12) {
                return "Ainda não";
            } else {
                return "O número está maior do que devia";
            }

        }
    },
    
    methods: {
        add5(){
          this.result = this.result + 5
        },

        add1(){
            this.result = this.result+ 1
          }
    }
})

app.mount('#assignment');