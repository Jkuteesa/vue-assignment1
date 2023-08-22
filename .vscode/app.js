const app = new Vue({
  el: '#app',
  data: {
    isBulbOn: false
  },
  methods: {
    toggleBulb() {
      this.isBulbOn = !this.isBulbOn;
    }
  }
});