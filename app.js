var app = new Vue({
    el: '#our-app',
    data: {
        count: 0,
    },

    methods: {

        increment(){
            this.count++;
        }
   

    },
    computed: {

        totalMarks(){
            return parseInt(this.bangla) +  parseInt(this.english) +  parseInt(this.maths)
        }

    },
})