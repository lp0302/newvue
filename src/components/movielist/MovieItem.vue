<template>

  <div class="item" @click="handleClick">
    <div class="main-block">
      <div class="avatar" sort-flag>
        <div class="default-img-bg">
          <img
            :src="movie.img | wh(256.256)"
            onerror="this.style.visibility='hidden'"
          />
        </div>
      </div>
      <div class="mb-outline-b content-wrapper">
        <div class="column content">
          <div class="box-flex movie-title">
            <div class="title line-ellipsis v3dimax_title">{{movie.nm}}</div>

            <span class="version" :class="movie.version"></span>
          </div>

          <div class="detail column">
            <div class="score line-ellipsis">
              <span class="score-suffix">观众评</span>
              <span class="grade">{{movie.sc}}</span>
            </div>

            <div class="actor line-ellipsis">{{movie.star}}</div>

            <div class="show-info line-ellipsis">{{movie.showInfo}}</div>
          </div>
        </div>

        <div class="button-block" data-id="3606">
          
          <Button :movie="movie"></Button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Button from './Button'
export default {
  props: {
    movie: {
      type:Object
    },
    index: Number,
    bscroll: Object
  },
  

  methods: {
    handleClick() {
      // console.log(this.bscroll.y);
      this.$router.push({
        path:'/detail'
      })
    }
  },
  
  components: {
    Button
  }
};
</script>
<style lang='stylus' ></style>