var app = new Vue({
    el: '#our-app',
    data: {
        bangla: 0,
        english: 0,
        maths: 0,
    },

    methods: {

   

    },
    computed: {

        totalMarks(){
            return parseInt(this.bangla) +  parseInt(this.english) +  parseInt(this.maths)
        }

    },
})