var app = new Vue({
    el: '#our-app',
    data: {
        x: 0,
        y: 0,
        active: false,
    },

    methods: {

        getpos(event){
            console.log(event)
            this.x = event.offsetX;
            this.y = event.offsetY;
        },

        hover(){
            this.active = true;
        },

        out(){
            this.active = false; 
        }

    },
})