<template>
   <section data-page=".movie" class="movie singleton page active">
    <div class="page-wrap n-hot active">
      <div class="tab-block">
        <div class="tab-content">
          <div class="list-wrap" >
             <slot></slot>   
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {};
  },

  components: {},

  computed: {},

  methods: {}
}
</script>
<style lang='stylus'>
section
  flex 1
  position static !important

  .main-block 
    padding-right 0.16rem
  

  .tab-content .list-wrap .item .content-wrapper 
    max-height 1.15rem
    height 1.15rem
  .list-wrap 
    padding-bottom 0.5rem
    background-color #fff
  .page-wrap 
    position static !important
    height 100%

    .tab-block 
      height 100%
      .tab-content 
        height 100%
        overflow hidden
        position relative
.van-loading 
  position absolute
  left 45%
  top 0
  bottom 0
  margin auto
  width 0.4rem
  height 0.4rem
.toast
  .van-loading__spinner
    display none
</style>