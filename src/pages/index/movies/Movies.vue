<template>
  <div class="movie-wrap">
    <header>猫眼电影</header>
    <Ad v-if="!$store.state.isSticky"></Ad>
    <nav>
      <div @click="handleClick">
        <span>{{$store.state.cities.nm}}</span>
        <i class="yo-ico">&#xf033;</i>
      </div>
      <div>
        <ul>
          <router-link to="/index/movies/intheaters" tag="li" active-class="active">正在热映</router-link>
          <router-link :to="{path:'/index/movies/comingsoon'}" tag="li" active-class="active">即将上映</router-link>
        </ul>
      </div>
      <div>
        <i class="yo-ico">&#xf067;</i>
      </div>
    </nav>
 

     <router-view></router-view>
   
  </div>
</template>

<script>
import MovieList from 'components/movielist/MovieList'
import Ad from './Ad'
export default {
  components: {
    MovieList,
    Ad
  },
  methods: {
    handleClick() {
      this.$router.push('/city')
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~assets/stylus/border.styl';
@import '~assets/stylus/ellipsis.styl';

.movie-wrap {
  display: flex;
  flex-direction: column;

  header {
    height: 0.44rem;
    background: #e54847;
    text-align: center;
    line-height: 0.44rem;
    font-size: 0.18rem;
    color: #fff;
  }

  nav {
    height: 0.44rem;
    display: flex;
    $border(0 0 1px 0);

    >div:first-child {
      flex: 80;
      padding-left: 0.16rem;
      font-size: 0.16rem;
      line-height: 0.44rem;
      display: flex;
      align-items: center;
      color: #666;
      overflow hidden
      span {
        ellipsis()
      }
    }

    >div:nth-child(2) {
      flex: 215;

      ul {
        width: 100%;
        height: 100%;
        display: flex;

        li {
          flex: 1;
          text-align: center;
          line-height: 0.44rem;
          color: #666;
          font-weight: 700;
          margin: 0 0.05rem;
          &.active {
            border-bottom: 2px solid #e54847;
            color: #e54847;
          }
        }
      }
    }

    >div:last-child {
      flex: 80;
      padding-right: 0.16rem;
      line-height: 0.44rem;
      font-size: 0.16rem;
      text-align: right;
      color: #e54847;
    }
  }
 
  
}
</style>