Vue.directive('custom-directive',{
    bind(el,binding,unbind){
        console.log(el)
        el.style.backgroundColor = 'blue';
        el.style.fontSize = '20px';
        el.title = 'title is changed';
        console.log(binding)
    },
    update(object1,object2){
        console.log('running update method')
        var data = JSON.parse(JSON.stringify(object2));
        console.log(object2)
    },
    unbind(){

    }
})


var app = new Vue({
    el: '#our-app-1',
    data: {
        message: "this is custom call"
    },

    methods: {

        changeValue(){
            this.message = 'This is updated';
        }
   

    },
    computed: {

        
        
        

    },
})

