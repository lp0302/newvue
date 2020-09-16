<template>
  <div>
  <section id="city-list" class="city-list-container" style="display: block;">
    
      <section>
        <div index="定位" class="city-title">定位城市</div>
        <div class="city-list city-list-inline clearfix">
          <div class="location-city">定位失败，请点击重试</div>
        </div>
      </section>

      <section class="history-city-list">
        <div index="最近" class="city-title">最近访问城市</div>
        <div class="city-list city-list-inline clearfix">
          <div class="city-item" data-nm="深圳" data-id="30">深圳</div>

          <div class="city-item" data-nm="北京" data-id="1">北京</div>

          <div class="city-item" data-nm="桂林" data-id="93">桂林</div>
        </div>
      </section>

      <section>
        <div index="热门" class="city-title">热门城市</div>
        <div class="city-list city-list-inline clearfix">
          <div class="city-item" data-nm="上海" data-id="10">上海</div>

          <div class="city-item" data-nm="北京" data-id="1">北京</div>

          <div class="city-item" data-nm="广州" data-id="20">广州</div>

          <div class="city-item" data-nm="深圳" data-id="30">深圳</div>

          <div class="city-item" data-nm="武汉" data-id="57">武汉</div>

          <div class="city-item" data-nm="天津" data-id="40">天津</div>

          <div class="city-item" data-nm="西安" data-id="42">西安</div>

          <div class="city-item" data-nm="南京" data-id="55">南京</div>

          <div class="city-item" data-nm="杭州" data-id="50">杭州</div>

          <div class="city-item" data-nm="成都" data-id="59">成都</div>

          <div class="city-item" data-nm="重庆" data-id="45">重庆</div>
        </div>
      </section>
      <section>
        <div v-for = "(city,key) in cityList" :key="key">
        <div :index="key" class="city-title city-title-letter">{{key}}</div>
        <div class="city-list city-list-block clearfix">
          <div class="city-item" v-for = "c in city" :key = "c.id">{{c.nm}}</div>
        </div>
        </div>
      </section>
    
  </section>
  <section class="nav">
  <div class="  nav-item" data-id="locate">
    定位
  </div>

  <div class="  nav-item" data-id="hot">
    热门
  </div>

  <div class="nav-letter  nav-item" data-id="A">
    A
  </div>

  <div class="nav-letter  nav-item" data-id="B">
    B
  </div>

  <div class="nav-letter  nav-item" data-id="C">
    C
  </div>

  <div class="nav-letter  nav-item" data-id="D">
    D
  </div>

  <div class="nav-letter  nav-item" data-id="E">
    E
  </div>

  <div class="nav-letter  nav-item" data-id="F">
    F
  </div>

  <div class="nav-letter  nav-item" data-id="G">
    G
  </div>

  <div class="nav-letter  nav-item" data-id="H">
    H
  </div>

  <div class="nav-letter  nav-item" data-id="J">
    J
  </div>

  <div class="nav-letter  nav-item" data-id="K">
    K
  </div>

  <div class="nav-letter  nav-item" data-id="L">
    L
  </div>

  <div class="nav-letter  nav-item" data-id="M">
    M
  </div>

  <div class="nav-letter  nav-item" data-id="N">
    N
  </div>

  <div class="nav-letter  nav-item" data-id="P">
    P
  </div>

  <div class="nav-letter  nav-item" data-id="Q">
    Q
  </div>

  <div class="nav-letter  nav-item" data-id="R">
    R
  </div>

  <div class="nav-letter  nav-item" data-id="S">
    S
  </div>

  <div class="nav-letter  nav-item" data-id="T">
    T
  </div>

  <div class="nav-letter  nav-item" data-id="W">
    W
  </div>

  <div class="nav-letter  nav-item" data-id="X">
    X
  </div>

  <div class="nav-letter  nav-item" data-id="Y">
    Y
  </div>

  <div class="nav-letter  nav-item" data-id="Z">
    Z
  </div>
</section>
  </div>
</template>

<script>
import Vue from "vue"
import { get } from "utils/http"
import _ from 'lodash'
import { IndexBar, IndexAnchor } from 'vant'

Vue.use(IndexBar).use(IndexAnchor);
export default {
data() {
    return {
      cityList: {}
    }
  },

  created() {
    this.indexListInit = [
      '定位',
      '最近',
      '热门'
    ]
  },

  computed: {
    indexList() {
      return [
        ...this.indexListInit,
        ...Object.keys(this.cityList).sort()
      ]
    }
  },
  async mounted () {
    let result = await get({
      url: '/dianying/cities.json'
    })
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

  }
}
</script>
<style lang='stylus' scoped></style>