<template>

<div id="app" class="container mt-5">
  <!-- Button trigger modal -->
	<button class="btn btn-dark" @click="showModal=true">Show</button>
  <Bounce>
    <Modal v-if="showModal" @close="showModal = false">
        <div slot="header">Hola Mundo</div>   
        <div slot="body">
                  <input type="text" v-model="euros" @input="Change($event)"
                  @change="Change($event)">
                  <div class="text-danger" v-if="!isValid">caracter invalido</div>
                  <p>El cambio de {{euros}}€ en dolares son {{ euros | toUSD }}</p>
        </div>
        <div slot="footer">
          <button type="button" class="btn btn-primary" @click="Accept()">Accept</button>
        </div>
    </Modal>
   </Bounce>
   <h3 class="mt-5 p-2">{{ message }} </h3>
</div>


  
</template>

<script>
import Modal from './components/Modal.vue'
import Bounce from './components/Animations/Bounce.vue'

export default {
  name: 'App',
  components: {
    Modal,
    Bounce
  },
    data() {
    return {
      euros: 0,
      message:'',
      isValid: true,
      regex: /^$|^[0-9]/,
		  showModal:false

    };
  },

  methods: {
      Accept(){
          this.showModal = false
          this.message = 'Heu tancat el Modal';
      },
      Change: function(e){
          const number = e.target.value
          this.isNumberValid(number);
        },
      isNumberValid: function(inputNumber) {
          this.isValid = this.regex.test(inputNumber);
        } 
  },
    filters: { 
      toUSD: function (value) {
        return `$${value *  1.23}`;
    }
  }
}
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>