var appInstance = Vue.createApp({
  data(){
    return {bulbStatus:false};
  },
  methods:{
    toggleBulb(){
      this.bulbStatus = !this.bulbStatus;
    }
  }
}).mount('#app') 