/**
 * 直接更新state里面的数据，定义数据修改的操作
 */
import { 
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORY,
    RECEIVE_SHOP
    } from './mutation-types'


export default {
    //定义修改上面三个参数的方法，从mutition_type里获得
     [RECEIVE_ADDRESS](state,address){
      
         state.address = address
         
      },
     [RECEIVE_CATEGORY](state,{categorys}){
         state.categorys = categorys
     },
     [RECEIVE_SHOP](state,{shops}){
         state.shops = shops
     }

}