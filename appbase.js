const App = {
    data() {
        return {
            title: "Список заметок",
            sPlaceholder: "Введите название заметки",
            inputValue: "",
            notes: ["Заметка 1"]
        }
    },
    methods: {
        onAddNewNote() {
            this.notes.push(this.inputValue);
            this.inputValue = "";
        },
        onDeleteNote(index) {
            this.notes.splice(index);
        }
    },
    computed: {
        doubleCountComputed() {
            return this.notes.length;
        }
    },
    watch: {
        inputValue(value) {
            if (value.length > 10) {
                this.inputValue = "";
            }
        }
    }
}

Vue.createApp(App).mount("#app")