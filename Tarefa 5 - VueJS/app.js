const app = Vue.createApp({
    
    data(){
        return {
        inputTask: '',
        myTasks: [],
        toggleRender: true,
        }
    },

    computed: {
        buttonCap() {
        return this.toggleRender ? 'Hide List' : 'Show List'
        }
    },

    methods: {
        addTasks() {
            this.myTasks.push(this.inputTask);
        },

        toggleList() {
            this.toggleRender = !this.toggleRender;
        }
    }
});

app.mount('#assignment');

