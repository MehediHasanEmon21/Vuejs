


var app = new Vue({
    el: '#our-app-1',
    data: {
        fname: '',
        lname: '',
        test: 'old'
    },

    methods: {

        
   

    },
    computed: {

        fullName: {
            get(){
                return this.fname+' '+this.lname;
            },
            set(){
                this.test = 'update';
            }
            
        },
        
        

    },
})

