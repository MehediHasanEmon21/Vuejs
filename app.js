var app = new Vue({
    el: '#our-app',
    data: {
        fname: "Emon",
        lname: "Hasan",
    },

    methods: {

        test(){
            return 'this is test method';
        },
        getvalue(){
            return 'My name is '+this.fname+ ' '+this.lname;
        }
    },
})