/**
 * 直接更新mutation的对象的方法
 */
 //异步
 import { 
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORY,
    RECEIVE_SHOP
    } from './mutation-types'
//引入异步文件
    import {
        reqAddress,
        reqFoodType,
        reqShops
    }from '../api'
export default{
   //异步获取地址
    async getAddress ({commit,state}){
       //发送异步Ajax请求
       const geohash = state.latitude+','+state.longitude
      
       const result = await reqAddress(geohash)
       
       if(result.code===0){
           
           const addrress = result.data
            //根据结果提交mutation
            commit(RECEIVE_ADDRESS,addrress)
       }
      //异步获取食品分类列表
   },
   async getCategorys ({commit}){
    //发送异步Ajax请求
   
    const result= await reqFoodType()
    if(result.code==0){
        const categorys = result.data
         //根据结果提交mutation
         commit(RECEIVE_CATEGORY,{categorys})
    }
   //获取商铺列表
},
  async getShops({commit,state}){
    //发送异步Ajax请求
    const {longitude,latitude} = state
        const result= await reqShops(longitude,latitude)
        if(result.code==0){
            const shops = result.data
            //根据结果提交mutation
            commit(RECEIVE_SHOP,{shops})
    }
   
}
}