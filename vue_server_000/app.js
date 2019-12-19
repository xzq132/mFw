//app.js 服务器端程序
//1:下载三个模块 
//  cors            完成跨域处理
//  express-session session对象
//  mysql           数据库驱动
//  express         web服务器
//下载命令在线  
//npm i cors express-session express  mysql
//2:将以上四个模块引入到当程序
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session"); 
const bd =require("body-parser");
//3:创建数据库连接池(池 提高效率)
var pool = mysql.createPool({
    host:"127.0.0.1", //数据库地址
    user:"root",      //数据库用户名
    password:"",      //数据库密码
    port:3306,      //数据库端口
    database:"mfw",//库名
    connectionLimit:15//15连接
})
//4:配置跨域模块
//  允许哪个程序跨域访问服务器
//  脚手架:3001 允许3001访问我
//  服务器:4000 你
var server = express();
server.use(bd.json())
server.use(cors({
  //允许程序列表
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  credentials:true//每次请求需要验证
}))
//5:配置session模块?????????
server.use(session({
   secret:"128位字符串",//安全字符串
   resave:true,//请求时更新数据
   saveUninitialized:true//保存初始数据
}))
//6:配置项目静态目录 public
server.use(express.static("public"))
//7:创建express对象绑定4000端口
server.listen(5000);

//8:功能一:完成用户登录
server.get("/login",(req,res)=>{
  //(1)获取脚手架参数 uname upwd
  var ep = req.query.ep;
  var upwd = req.query.upwd;
  //(2)创建sql语句查询
  var sql = "SELECT uid FROM mfw_user WHERE phone = ? AND pwd = md5(?)";
  //(3)执行sql语句
  pool.query(sql,[ep,upwd],(err,result)=>{
    if(err)throw err;
    //(4)获取执行结果
    //(5)判断查询是否成功 result.length
    if(result.length==0){
      res.send({code:-1,msg:"手机号或密码有误"})
    }else{
      //  保存用户id在sess对象中
      // result[{id:1}]
        req.session.uid=result[0].id;
        res.send({code:1,msg:"登录成功"})
    }
  //(6)将结果返回脚手架
  })
})

//9:功能一:完成用户注册
server.post("/register",(req,res)=>{
  //(1)获取脚手架参数 uname upwd
  var phone = req.body.phone;
  var upwd = req.body.upwd;
  console.log(phone);
  console.log(upwd);
  //(2)创建sql语句查询
  var sql = "SELECT uid FROM mfw_user WHERE phone = ?";
  //(3)执行sql语句
  pool.query(sql,[phone],(err,result)=>{
    if(err)throw err;
    //(4)获取执行结果
    //(5)判断查询是否成功 result.length
    if(result.length>0){
      res.send({code:-1,msg:"您的手机号已被注册"})
    }else{
      var sql = "INSERT INTO mfw_user VALUES(null,?,md5(?))";
      pool.query(sql,[phone,upwd],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
          res.send({code:1,msg:"注册成功"})
        }
      })
    }
  //(6)将结果返回脚手架
  })
})

//#检测   16:00
//(1)查询数据库是否有xz_login
//   USE xz;
//   SELECT * FROM xz_login;
//(2)启动服务器
//   node app.js
//(3)打开浏览器在地址栏输入按回
//   http://127.0.0.1:5000/login?ep=18270221393&upwd=123456
//   http://127.0.0.1:5000/login?ep=18617056212&upwd=123456   
//app.js 复9~73   



// 功能二：分页显示商品列表
// 1.接受get /product
server.get("/nav",(req,res)=>{
  // 2.接受两个参数 pno 页码 pageSize 页大小
  var pno=req.query.pno;
  var ps=req.query.pageSize;
  // 3.设置默认值 pno=1 pageSize=4
  if(!pno){pno=1};
  if(!ps){ps=5};
  // 4.计算第一个问号  
  ps=parseInt(ps);
  var off=(pno-1)*ps;
  // 5.对pageSize转int
  // 6.创建sql语句
  var sql="SELECT lid,pic FROM nav LIMIT ?,?";
  // 7.执行sql语句
  pool.query(sql,[off,ps],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msge:"查询成功",data:result})
  })
  // 8.将返回结果发送脚手架
})
// 测试  http://127.0.0.1:4000/product?pno=2


// // 功能三：将商品添加至购物车
// // 1.请求 get /addcart
// server.get("/addcart",(req,res)=>{
//   // 2.获取当前用户登录凭证
//   var uid=req.session.uid;
//   // 3.如果用户没登录返回错误消息
//   if(!uid){
//     res.send({code:-1,msg:"请登录"});
//     return;
//   }
//   // 4.获取商品编号/商品价格/商品名称
//   var lid=req.query.lid;
//   var price=req.query.price;
//   var lname=req.query.lname;
//   // 5.查询指定用户是否购买过此商品
//   var sql="SELECT id FROM xz_cart WHERE uid=? AND lid=?";
//   // 6.执行sql语句
//   pool.query(sql,[uid,lid],(err,result)=>{
//     // 7.在回调函数判断是否购买过
//     if(err) throw err;
//     if(result.length==0){
//       // 8.添加一个新数据
//       var sql=`INSERT INTO xz_cart VALUES(null,${lid},1,'${lname}',${price},${uid})`
//     }else{
//       // 9.更新原有数据的数量
//       var sql=`UPDATE xz_cart SET count=count+1 WHERE uid=${uid} AND lid=${lid}`
//     }
//       // 10.执行sql语句
//     pool.query(sql,(err,result)=>{
//       // 11.将执行结果返回脚手架
//       if(err) throw err;
//       res.send({code:1,msg:"添加成功"});
//     })
//   })
// })
// //检测
// //http://127.0.0.1:4000/addcart?lid=1&lname=mac&price=9

// //http://127.0.0.1:4000/login?uname=tom&upwd=123

// //http://127.0.0.1:4000/addcart?lid=1&lname=mac&price=9
// //113~152 复制

// // 功能四：查询指定用户购物车列表
// server.get("/findcart",(req,res)=>{
//   var uid=req.session.uid;
//   if(!uid){
//     res.send({code:-1,msg:"请登录"});
//     return;
//   }
//   var sql="SELECT id,lid,price,lname,count FROM xz_cart WHERE uid=?";
//   pool.query(sql,[uid],(err,result)=>{
//     if(err) throw err;
//     res.send({code:1,msge:"查询成功",data:result})
//   })
// })

// //功能五:删除一个指定购物车中商品
// server.get("/del",(req,res)=>{
//   //1:获取当前用户uid
//   var uid = req.session.uid;
//   //2:如果没有uid提示
//   if(!uid){
//    res.send({code:-1,msg:"请登录"});
//    return;
//   }  
//     //1:获取购物车id
//     var id = req.query.id;
//     //2:创建sql
//     var sql = "DELETE FROM xz_cart WHERE id = ?";
//     //3:执行
//     pool.query(sql,[id],(err,result)=>{
//       if(err)throw err;
//       if(result.affectedRows>0){
//         res.send({code:1,msg:"删除成功"})
//       }else{
//         res.send({code:-1,msg:"删除失败"});
//       }
//     })
//   });
  
  
//   //(1)mysql 查询
//   //select id from xz_cart;
//   //http://127.0.0.1:4000/del?id=5
//   //http://127.0.0.1:4000/login?uname=tom&upwd=123
//   //http://127.0.0.1:4000/del?id=5
  
//   //功能六:删除多个指定购物车中商品
// server.get("/delm",(req,res)=>{
//   var uid = req.session.uid;
//   if(!uid){
//    res.send({code:-2,msg:"请登录"});
//    return;
//   }
//   //1:获取一组id 1,2
//   var id = req.query.id;
//   //2:创建sql
//   var sql = `DELETE FROM xz_cart WHERE id IN (${id})`;
//   //3:执行sql并且返回结果
//   pool.query(sql,(err,result)=>{
//     if(err)throw err;
//     if(result.affectedRows>0){
//       res.send({code:1,msg:"删除成功"});
//     }else{
//       res.send({code:-1,msg:"删除失败"});
//     }
//   })
// })
// //(1)mysql 查询 207~227复制
// //select id from xz_cart;
// //http://127.0.0.1:4000/delm?id=6,7
// //http://127.0.0.1:4000/login?uname=tom&upwd=123
// //http://127.0.0.1:4000/delm?id=6,7