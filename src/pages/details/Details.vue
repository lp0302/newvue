<template>
  <div class='box'>
    <!-- <div @click="$router.push('/detail/4')">ccc</div> -->
    <div>ccc</div>
    <div @click="handleClick">bbb</div>
    <div>aaa</div>

  </div>

</template>

<script>
export default {
  data () {
    return {};
  },

  components: {},

  computed: {},

  methods: {
    handleClick() {
      // let pos = document.body.scrollTop||document.createElement.scrollTop
      // let pos = this.$route.query.pos
    //  console.log(pos);
      // this.$router.push({path:'/index/movies/intheaters'
      this.$router.back()
      }
  }
  // watch: {
  //  $route(to, from){
  //    console.log(from);
  //  }
  // },
  }

</script>
<style lang='stylus' scoped>
.box
  >div:first-child
     height:.5rem
  >div:nth-child(2)
     position sticky 
     top 0
     height .5rem 
     background yellowgreen
  >div:last-child
     height:10rem 
     background #666


</style>