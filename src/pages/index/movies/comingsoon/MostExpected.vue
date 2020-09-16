<template>
  <div class="wrap">
    <div class="most-expected">
        <p class="title">近期最受期待</p>
        <div class="most-expected-list">
            <div>

            <a class="expected-item" v-for="movie in expectedList" :key='movie.id'>
                <div class="poster default-img-bg">
                    <img :src="movie.img | wh('250.250')" >
                    
                    <span class="wish-bg"></span>
                    
                    <div class="toggle-wish" data-wishst="0" data-movieid="1217023">
                     
                     <span></span>
                    </div>
                </div>
                <h5 class="name line-ellipsis">{{movie.nm}}</h5>
                <p class="date">{{movie.comingTilte}}</p>
            </a>
              
            </div>

        </div>
    </div>
  </div>
</template>

<script>
import {get} from 'utils/http'
import BScroll from 'better-scroll'
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);
export default {
   data() {
       return {
           expectedList:[]
       }
   },
   beforeCreate() {
       this.limit = 10,
       //记录上次ajax请求是否完成
       this.isLoaded= true
   },

   async loadData(offest) {//或者直接methods可以直接用this获取
    return await get({
        url:'/ajax/mostExpected',
        params:{
            ci:1,
            limit:10,
            offset:offest * this.limit,
            token:''
        }
       })
   },
   finishPullLeft (){

   },
   async mounted() {
       let page = 0
       let firstPageResult = await this.$options.loadData.call(this , page)
       
       this.expectedList=firstPageResult.coming
       let bScroll = new BScroll('.most-expected-list',{
           scrollX: true
       })
       bScroll.on('scrollEnd',async() => {
           let { x, maxScrollX } = bScroll
         if(x <= maxScrollX && this.isLoaded) {
             //第一次进来后，立刻阻止用户第二次在ajax请求还没成功时，做第二次请求
             this.isLoaded = false
             page++
             let nthPageResult = await this.$options.loadData.call(this , page)
             if(nthPageResult.coming.length > 0){
                 this.expectedList = [
                     ...this.expectedList,
                     ...nthPageResult.coming
                 ]
                 await this.$nextTick()
                 bScroll.refresh()
                 this.isLoaded = true   
                 this.isLoaded             
             }else{
                 console.log('加载完成');
             }
          
         }
       })
   }
}
</script>
<style lang='stylus' scoped>
.wrap
   padding-right .16rem 
   background #fff
   .most-expected-list
     >div
       width max-content


</style>