<template class="animationpet">
     <div  v-bind:style="anipet">{{myPet.action}}</div>
</template>

<script>

export default {
  name: "animationpet",
  data() {
    spriteData: {};
    return {
        imagePath: "",
        startX:0,
        startY:0,
        pWidth:619,
        pHeight:500,
        frames:77,
        interval:0.6,
        currentFrame:0        
    }
  },
  props: ['myPet'],

  computed: {
 
		anipet () {

      var style = document.createElement('style');
      style.type = 'text/css';
      var keyFrames = '\
        @keyframes sprite {\
            from {\
                background-position: ' + this.startX+'px ' + this.startY +'px;\
            }\
            to {\
                background-position: -'+ this.pWidth*this.frames +'px  ' + this.startY +'px;\
            }\
        }';
      

        style.innerHTML = keyFrames;
        document.getElementsByTagName('head')[0].appendChild(style);
        console.log(document.getElementsByTagName('head')[0]);

			return {
        position: `absolute`,
        width: `${this.pWidth}px`,
        height: `${this.pHeight}px`,
        frames: `${this.frames}`,
        background:`url(${this.imagePath}) no-repeat 0 0%`,
        animation:  `sprite ${this.interval}s steps(${this.frames}) infinite`,
        transform: `translateX(-50%) translateY(-50%)`,
        top:`50%`,  left:`50%`
			}
		}
  },
  
  mounted() {
    this.load();
  },

  methods: {

    load: function() {
      var $vm=this;
      this.$http.get('assets/sprite.json').then(function(response) {
          
          $vm.spriteData= response.body;
          $vm.imagePath =  $vm.spriteData[$vm.myPet.kind][$vm.myPet.action].imagePath;
          $vm.startX =  $vm.spriteData[$vm.myPet.kind][$vm.myPet.action].startX;
          $vm.startY =  $vm.spriteData[$vm.myPet.kind][$vm.myPet.action].startY;          
          $vm.pWidth =  $vm.spriteData[$vm.myPet.kind][$vm.myPet.action].width;
          $vm.pHeight =  $vm.spriteData[$vm.myPet.kind][$vm.myPet.action].height;
          $vm.frames =  $vm.spriteData[$vm.myPet.kind][$vm.myPet.action].frames;
          $vm.interval =  $vm.spriteData[$vm.myPet.kind][$vm.myPet.action].interval;
          $vm.currentFrame =  0;

      });
    },
    
    
    
 
  }   
}


 





</script>
