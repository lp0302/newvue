<template>
  <div class='index-wrap'>
    <main>
       <keep-alive>

        <router-view></router-view>
       </keep-alive>
     
    </main>
    <van-tabbar v-model="active" active-color="#e54748" route>
      <van-tabbar-item badge="3" replace to="/index/movies" >
        <span >电影</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="search" replace to="/index/theaters" class="animate__animated animate__bounce animate__delay-1s">影院</van-tabbar-item>
      <van-tabbar-item icon="setting-o" replace to="/index/profile"  >我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'
Vue.use(Tabbar).use(TabbarItem)
import movieImg from 'assets/movie.png'
import movieActiveImg from 'assets/movie-active.png'
export default {
  data() {
    return {
      active: 0,
      icon: {
        active: movieActiveImg,
        inactive: movieImg,
      },
    };
  }
}

</script>
<style lang='stylus' scoped>
@import "~assets/stylus/border.styl"
.index-wrap
  display flex 
  flex-direction column
  height 100%
  main
    flex 1  
    background #fff
    height 100%
    > div 
      height 100%
    
  img
    width auto



     
</style>