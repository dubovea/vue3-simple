const App = {
    data: () => ({
        title: "Я есть грут",
        myHtml: "<h1> Vue 3 App </h1>",
        oPerson: {
            firstName: "Eduard",
            lastName: "Dubov",
            age: 24
        },
        items: [1, 2, 3, 4, 5, 6]
    }),
    methods: {
        addItem() {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ""
        },
        remove(index) {
            this.items.splice(index,1)
        },
        log(i) {
            console.log(i);
        }
    },
    computed: {
        evenItems() {
            return this.items.filter(i => i % 2 === 0)
        }
    },
    watch: {}
}

Vue.createApp(App).mount("#app")