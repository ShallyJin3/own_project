import ajax from './ajax'
const BASE_URL ='/api'
//const BASE_URL ='http://183.252.1.140:88/mock/38'
// [1、根据经纬度获取位置详情](#1 根据经纬度获取位置详情)<br/>
export const reqAddress =(geohash) =>ajax(`${BASE_URL}/position/${geohash}`)

// [2、获取食品分类列表](#2 获取食品分类列表)<br/>
export const reqFoodType =() =>ajax(BASE_URL+`/index`)
// [3、根据经纬度获取商铺列表](#3 根1据经纬度获取商铺列表)<br/>
export const reqShops=(latitude,longitude) =>ajax(BASE_URL+'$/shops',{latitude,longitude})
// [4、根据经纬度和关键字搜索商铺列表](#4 根据经纬度和关键字搜索商铺列表)<br/>
// [5、获取一次性验证码](#5 获取一次性验证码)<br/>
// [6、用户名密码登陆](#6 用户名密码登陆)<br/>
// [7、发送短信验证码](#7 发送短信验证码)<br/>
// [8、手机号验证码登陆](#8 手机号验证码登陆)<br/>
// [9、根据会话获取用户信息](#9 根据会话获取用户信息)<br/>
// [10、用户登出](#10 用户登出)<br/>
