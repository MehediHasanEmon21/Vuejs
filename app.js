var app = new Vue({
    el: '#our-app',
    data: {
        x: 0,
        y: 0,
        counter: 0,
    },

    methods: {

        increment(){
            this.counter++;
        },

        submitClick(){
            alert('click');
        }

    },
})