
Vue.component('test',{
    template: '<div><p>This is test component</p>My name is {{ name }}.<h2>{{ testMethod() }}</h2><button @click="testclick">click</button></div>',
    data(){
        return {
            name: 'Emon'
        }
    },
    methods: {
        testMethod(){
            return 'this is running from test';
        },
        testclick(){
            this.name = 'change';
        }
    },
    computed: {

    },

})


var app = new Vue({
    el: '#our-app-1',
    data: {

    },

    methods: {

        
   

    },
    computed: {

        

    },
})

var app = new Vue({
    el: '#our-app-2',
    data: {

    },

    methods: {

        
   

    },
    computed: {

        

    },
})