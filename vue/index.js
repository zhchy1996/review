var vm = new Vue({
  el: '#app',
  data () {
      return {
        username: 'PDK'
      }
    },
    methods: {
      handleChangeName () {
        this.username = '彭道宽'
        console.log(this.$refs.username.innerText) // PDK
      }
    }
})




