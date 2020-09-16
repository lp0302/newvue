<template>
  <section id="city-list" class="city-list-container" style="display: block;">
    <van-index-bar :index-list="indexList">
      <section>
        <van-index-anchor index="定位" class="city-title">定位城市</van-index-anchor>
        <div class="city-list city-list-inline clearfix">
          <div class="location-city">{{position||'定位失败，请点击重试'}}</div>
        </div>
      </section>

      <section class="history-city-list">
        <van-index-anchor index="最近" class="city-title">最近访问城市</van-index-anchor>
        <div class="city-list city-list-inline clearfix">
          <div class="city-item" v-for="city in visitedCities"
             :key="city.id"
             @click="handlePickClick(city.id,city.nm)">{{city.nm}}</div>

        </div>
      </section>

      <section>
        <van-index-anchor index="热门" class="city-title">热门城市</van-index-anchor>
        <div class="city-list city-list-inline clearfix">
          <div class="city-item"
             v-for="city in hotCities"
             :key="city.id"
             @click="handlePickClick(city.id,city.nm)"
          >{{city.nm}}</div>

        </div>
      </section>
      <section>
        <div v-for = "(city,key) in cityList" :key="key" >
        <van-index-anchor :index="key" class="city-title city-title-letter">{{key}}</van-index-anchor>
        <div class="city-list city-list-block clearfix">
          <div class="city-item" v-for = "c in city" :key = "c.id" @click="handlePickClick(c.id,c.nm)">{{c.nm}}</div>
        </div>
        </div>
      </section>
    </van-index-bar>
  </section>
</template>

<script>
import Vue from "vue"
import { get } from "utils/http"
import _ from 'lodash'
import store from 'store'
import { IndexBar, IndexAnchor } from 'vant'

Vue.use(IndexBar).use(IndexAnchor);
export default {
data() {
    return {
      cityList: {},
      hotCities:[],
      position:''
    }
  },

  created() {
    this.indexListInit = [
      '定位',
      '最近',
      '热门'
    ],
    this.visitedCities = store.get('visitedCities')
  },

  computed: {
    indexList() {
      return [
        ...this.indexListInit,
        ...Object.keys(this.cityList).sort()
      ]
    }
  },
  methods: {
    handlePickClick(id,nm) {
      let cities = store.get('visitedCities') ||[]
      cities.push({
        id,
        nm
      })
      store.set('visitedCities',_.uniqBy(cities,(value) => {
        return value.id != id
      }))
      store.set('currentCity',{
        id, nm
      })
      this.$store.dispatch('cities/saveCity', {
        id,
        nm
      })
      this.$router.back()
      // this.$router.push('/index/movies/Intheaters')
    }
  },
  async mounted () {
    let that = this
    let result = await get({
      url: '/dianying/cities.json'
    })
    this.hotCities = _.sampleSize(result.cts,11)
    console.log(this.hotCities);
    let chunkedResult = _.groupBy(result.cts,(value) => {
      return value.py.substr(0,1).toUpperCase()
    })
    let reducedResult = Object.keys(chunkedResult).sort().reduce((obj,key) => {
      obj[key] = chunkedResult[key]
      return obj
    },{})
      // console.log(chunkedResult);
      console.log(reducedResult);
      this.cityList = reducedResult
   

    // 地理定位
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        that.position="Geolocation is not supported by this browser.";
      }
    }

    function showPosition(position) {
      that.position="Latitude: " + position.coords.latitude +
      "<br />Longitude: " + position.coords.longitude;
    }

    function showError(error) {
      console.log(1);
      switch (error.code) {
        case error.PERMISSION_DENIED:
          that.position = "User denied the request for Geolocation."
          break;
        case error.POSITION_UNAVAILABLE:
          that.position = "Location information is unavailable."
          break;
        case error.TIMEOUT:
          that.position = "The request to get user location timed out."
          break;
        case error.UNKNOWN_ERROR:
          that.position = "An unknown error occurred."
          break;
      }
    }

    getLocation()
  
  }
}
</script>
<style lang='stylus' scoped></style>