// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境
const db=cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  const {account,password}=event;
  try{
    const res=await db.collection('users').where({
      account,
      password
    }).get();
    console.log(res);
    if(res.data.length>0){//如果查到至少一个用户
      return true;
    }else{
      return false;
    }
  }catch(e){
    console.error(e);
    return false;
  }
};