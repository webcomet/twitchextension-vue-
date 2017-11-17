
<template class="streampets">
  <div class="pet-cont">
    <div class="trow" >
      <div class="states-text">
        <h2>{{pet.alias}}</h2>
      </div>
    </div>
    <div class="trow">
      <div class="col-sm-4">
        Hunger
        <div id="hunger">
          <div class="barOuter"><div class="barInner"  v-bind:style="{ width: stats.hunger + '%' }"></div></div>
        </div>
      </div>

      <div class="col-sm-4">
        Happiness
        <div id="happiness">
          <div class="barOuter"><div class="barInner"  v-bind:style="{ width: stats.happiness + '%' }"></div></div>
        </div>
        
      </div>

      <div class="col-sm-4">
        Boredom
        <div id="boredom">
          <div class="barOuter"><div class="barInner"  v-bind:style="{ width: stats.boredom + '%' }"></div></div>
        </div>
      </div>

    </div>

   


    <myPetComponent :myPet="pet"  ></myPetComponent>


     
    <div class="button-group" >
      <div class="col-sm-1 col-xs-12"col-xs-0>
      </div>
      <div class="col-sm-2 col-xs-4">
        <div class="trow"><button class="heal btn" v-on:click="heal('boredom')">Play</button></div>
      </div>
      <div class="col-sm-2 col-xs-4">
        <div class="trow"><button class="heal btn" v-on:click="heal('hunger')">Feed</button></div>
      </div>
      <div class="col-sm-2 col-xs-4">
        <div class="trow"><button class="heal btn" v-on:click="heal('happiness')">Hug</button></div>
      </div>      
      <div class="col-sm-2 col-xs-4">
      </div>
 
      <div class="col-sm-2 col-xs-4">
        <div class="trow">
          <button class="buy btn row">Buy</button>
        </div>
      </div>
      <div class="col-sm-1 col-xs-4">
      </div>
    </div>
    <div class="footer">
      <div>
 
      </div>
    </div>  

  </div>
</template>






<script>
import PetComponent from "./PetComponent.vue";

export default {
  name: "streampets",
  data() {
    return {
      pet: {
        kind:  "dog",
        alias: "My Pretty", 
        level: "1",      
        action: "playing",
      },
      channelId: null,
      clientId: null,
      token: null,
      userId: null,
      twitchHeaders: {},
      streamLabsHeaders: {},
      stats: {
        happiness: 100,
        boredom: 100,
        hunger: 100
      },
    }
  },

  mounted() {
    this.load();
  },

  methods: {
    load: function() {
      if (window.Twitch && window.Twitch.ext) {
        var $vm = this;
        window.Twitch.ext.onAuthorized(({ channelId, clientId, token, userId }) => {
          this.channelId = channelId
          this.clientId = clientId
          this.token = token
          this.userId = userId

          this.twitchHeaders =  {
            'headers': {
              'Client-ID': this.clientId,
              'Accept': 'application/vnd.twitchtv.v5+json'
            }
          }

          this.streamLabsHeaders = {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }

          this.$http.get('https://streamlabs.dev/api/v5/twitch-extensions/streampet/pet', {
              headers: { Authorization: `Bearer ${token}` }
          })
          .then(response => {
            var response = response.body;
            $vm.stats.happiness = response.happiness;
            $vm.stats.hunger = response.hunger;
            $vm.stats.boredom = response.boredom;
          },
          err => {
            console.log(err);
          });
        });

        window.Twitch.ext.listen('broadcast', (topic, content, message) => {
          var data = JSON.parse(message);
          $vm.stats.happiness = Math.round(data.payload.happiness);
          $vm.stats.hunger = Math.round(data.payload.hunger);
          $vm.stats.boredem = Math.round(data.payload.boredom);
        })
      }

    },
 
    heal: function(stat) {
      var $vm = this;
      $('.heal').attr('disabled', true);
      setTimeout(() => {
        $('.heal').removeAttr('disabled');
      }, 5000);
      this.$http.post('https://streamlabs.dev/api/v5/twitch-extensions/streampet/pet/heal',
          { stat: stat },
          { headers: { Authorization: `Bearer ${$vm.token}` } }
        ).then(response => {
          
          // Fake heal in frontend for user satisfication
      });
      $vm.pet.action="eating";
      console.log($vm.pet.action);
    }
  },
  
  components:{ 
    'myPetComponent': PetComponent
  }

}





</script>
