<template>
  <div @click='handleClick'>test</div>
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
       this.$router.push('/detail?pos='+ this.$route.query.pos)
   }
  }
}
</script>
<style lang='stylus' scoped>

</style>