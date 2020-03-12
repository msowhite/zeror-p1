//////////////////////////////////////////////////////////////////////////
// 파일명: module.js
// 20200304 James
// 메뉴선택시 해당 페이지로 이동하게 해주는 라우터
//
//
//////////////////////////////////////////////////////////////////////////

const express = require("express");
const router = express.Router();
const fs = require("fs");
const ejs = require("ejs");
var mysqlDB = require("../conf/saeamus-db");

var t1sub1sub1 = fs.readFileSync("./views/m-t1sub1sub1.ejs", "utf8");
var t1sub1sub2 = fs.readFileSync("./views/m-t1sub1sub2.ejs", "utf8");
var t1sub1sub3 = fs.readFileSync("./views/m-t1sub1sub3.ejs", "utf8");
var t1sub1sub4 = fs.readFileSync("./views/m-t1sub1sub4.ejs", "utf8");
var t1sub2 = fs.readFileSync("./views/m-t1sub2.ejs", "utf8");
var t1sub3 = fs.readFileSync("./views/m-t1sub3.ejs", "utf8");
var t1sub4 = fs.readFileSync("./views/m-t1sub4.ejs", "utf8");
var t1sub5 = fs.readFileSync("./views/m-t1sub5.ejs", "utf8");

var t2 = fs.readFileSync("./views/m-t2.ejs", "utf8");

var t3sub1 = fs.readFileSync("./views/m-t3sub1.ejs", "utf8");
var t3sub2sub1 = fs.readFileSync("./views/m-t3sub2sub1.ejs", "utf8");
var t3sub2sub2 = fs.readFileSync("./views/m-t3sub2sub2.ejs", "utf8");
var t3sub3 = fs.readFileSync("./views/m-t3sub3.ejs", "utf8");
var t3sub4 = fs.readFileSync("./views/m-t3sub4.ejs", "utf8");
var t3sub5sub1 = fs.readFileSync("./views/m-t3sub5sub1.ejs", "utf8");
var t3sub5sub2 = fs.readFileSync("./views/m-t3sub5sub2.ejs", "utf8");
var t3sub5sub3 = fs.readFileSync("./views/m-t3sub5sub3.ejs", "utf8");
var t3sub6 = fs.readFileSync("./views/m-t3sub6.ejs", "utf8");

var t4 = fs.readFileSync("./views/m-t4.ejs", "utf8");

// //원래 메뉴화면 라우팅
// //menu 화면으로 라우팅
// router.get("/t1sub1sub1", function(req, res, next) {
//   var url = req.url;
//   var url1 = url.replace("/", "");
//   var url2 = url1.toUpperCase();
//   console.log(url2);
//   var t1sub1sub1_ren = ejs.render(t1sub1sub1, { title: url2 }); //title값을 넘기기위해서 m-t1sub1sub1.ejs를 미리 랜더링
//   res.render("layout", { name: username, title: url2, content: t1sub1sub1_ren });
// });

// //layout-grid1.ejs로 라우팅
// router.get("/t1sub1sub1", function(req, res, next) {
//   var url = req.url;
//   var url1 = url.replace("/", "");
//   var url2 = url1.toUpperCase();
//   console.log(url2);
//   var t1sub1sub1_ren = ejs.render(t1sub1sub1, { title: url2 }); //title값을 넘기기위해서 m-t1sub1sub1.ejs를 미리 랜더링
//   res.render("layout-grid1", { name: username, title: url2, content: t1sub1sub1_ren });
// });

//layout-grid2.ejs로 라우팅
//layout-grid1과 layout-grid2의 차이점은 layout-grid2는 header와 navbar 적용
router.get("/t1sub1sub1", function(req, res, next) {
  var url = req.url;
  var url1 = url.replace("/", "");
  var url2 = url1.toUpperCase();
  console.log(url2);
  var t1sub1sub1_ren = ejs.render(t1sub1sub1, { title: url2 }); //title값을 넘기기위해서 m-t1sub1sub1.ejs를 미리 랜더링
  res.render("layout-grid2", { name: username, title: url2, content: t1sub1sub1_ren });
});

//t1sub1sub2 menu 기본화면으로 먼저 라우팅
router.get("/t1sub1sub2", function(req, res) {
  var t1sub1sub2_ren = ejs.render(t1sub1sub2, { title: "T1 SUB1 SUB2" }); //title값을 넘기기위해서 m-t1sub1sub2.ejs를 미리 랜더링
  res.render("layout-grid2", { name: username, title: "T1 SUB1 SUB2", content: t1sub1sub2_ren });
});
//AJAX GET METHOD로 db에서 data가져옴
router.get("/t1sub1sub2/get", function(req, res) {
  var sql = "select * from temp_table";
  mysqlDB.query(sql, function(err, results) {
    if (err) {
      res.send("error : " + err); //err 발생시 화면에 에러메세지 출력
    }
    if (!results[0]) {
      res.send("nodata"); //query 결과가 undefined 즉, db에 userId가 없는 경우, 화면에  메세지 출력 (~/views/nodata.ejs)
    }
    //console.log(results);
    res.send(results); //제목없이 리턴함,만일 res.send({ttt:results}); 이리하면 ttt란 이름으로 결과값이 리턴됨.
    //이경우 받는 script에서 result.ttt[0].id 이런식으로 받아야함
  });
});

//t1sub1sub3 menu 화면으로 라우팅
router.get("/t1sub1sub3", function(req, res, next) {
  var t1sub1sub3_ren = ejs.render(t1sub1sub3, { title: "T1 SUB1 SUB3" });
  res.render("layout-grid2", { name: username, title: "T1 SUB1 SUB3", content: t1sub1sub3_ren });
});

//AJAX GET METHOD로 db에서 data가져옴
router.get("/t1sub1sub3/get", function(req, res) {
  var sql = "select * from temp_table";
  mysqlDB.query(sql, function(err, results) {
    if (err) {
      res.send("error : " + err); //err 발생시 화면에 에러메세지 출력
    }
    if (!results[0]) {
      res.send("nodata"); //query 결과가 undefined 즉, db에 userId가 없는 경우, 화면에  메세지 출력 (~/views/nodata.ejs)
    }
    //console.log(results);
    res.send(results); //제목없이 리턴함,만일 res.send({ttt:results}); 이리하면 ttt란 이름으로 결과값이 리턴됨.
    //이경우 받는 script에서 result.ttt[0].id 이런식으로 받아야함
  });
});

//menu 화면으로 라우팅
router.get("/t1sub1sub4", function(req, res, next) {
  var t1sub1sub4_ren = ejs.render(t1sub1sub4, { title: "T1 SUB1 SUB4" });
  res.render("layout", { name: username, title: "T1 SUB1 SUB4", content: t1sub1sub4_ren });
});
//menu 화면으로 라우팅
router.get("/t1sub2", function(req, res, next) {
  var t1sub2_ren = ejs.render(t1sub2, { title: "T1 SUB2" });
  res.render("layout", { name: username, title: "T1 SUB2", content: t1sub2_ren });
});
//menu 화면으로 라우팅
router.get("/t1sub3", function(req, res, next) {
  var t1sub3_ren = ejs.render(t1sub3, { title: "T1 SUB3" });
  res.render("layout", { name: username, title: "T1 SUB3", content: t1sub3_ren });
});
//menu 화면으로 라우팅
router.get("/t1sub4", function(req, res, next) {
  var t1sub4_ren = ejs.render(t1sub4, { title: "T1 SUB4" });
  res.render("layout", { name: username, title: "T1 SUB4", content: t1sub4_ren });
});
//menu 화면으로 라우팅
router.get("/t1sub5", function(req, res, next) {
  var t1sub5_ren = ejs.render(t1sub5, { title: "T1 SUB5" });
  res.render("layout", { name: username, title: "T1 SUB5", content: t1sub5_ren });
});
//menu 화면으로 라우팅
router.get("/t2", function(req, res, next) {
  var t2_ren = ejs.render(t2, { title: "Top Menu2" });
  res.render("layout", { name: username, title: "T2", content: t2_ren });
});
//menu 화면으로 라우팅
router.get("/t3sub1", function(req, res, next) {
  var t3sub1_ren = ejs.render(t3sub1, { title: "T3 SUB1" });
  res.render("layout", { name: username, title: "T3 SUB1", content: t3sub1_ren });
});
//menu 화면으로 라우팅
router.get("/t3sub2sub1", function(req, res, next) {
  var t3sub2sub1_ren = ejs.render(t3sub2sub1, { title: "T3 SUB2 SUB1" });
  res.render("layout", { name: username, title: "T3 SUB2 SUB1", content: t3sub2sub1_ren });
});
//menu 화면으로 라우팅
router.get("/t3sub2sub2", function(req, res, next) {
  var t3sub2sub2_ren = ejs.render(t3sub2sub2, { title: "T3 SUB2 SUB2" });
  res.render("layout", { name: username, title: "T3 SUB2 SUB2", content: t3sub2sub2_ren });
});
//menu 화면으로 라우팅
router.get("/t3sub3", function(req, res, next) {
  var t3sub3_ren = ejs.render(t3sub3, { title: "T3 SUB3" });
  res.render("layout", { name: username, title: "T3 SUB3", content: t3sub3_ren });
});
//menu 화면으로 라우팅
router.get("/t3sub4", function(req, res, next) {
  var t3sub4_ren = ejs.render(t3sub4, { title: "T3 SUB4" });
  res.render("layout", { name: username, title: "T3 SUB4", content: t3sub4_ren });
});
//menu 화면으로 라우팅
router.get("/t3sub5sub1", function(req, res, next) {
  var t3sub5sub1_ren = ejs.render(t3sub5sub1, { title: "T3 SUB5 SUB1" });
  res.render("layout", { name: username, title: "T3 SUB5 SUB1", content: t3sub5sub1_ren });
});
//menu 화면으로 라우팅
router.get("/t3sub5sub2", function(req, res, next) {
  var t3sub5sub2_ren = ejs.render(t3sub5sub2, { title: "T3 SUB5 SUB2" });
  res.render("layout", { name: username, title: "T3 SUB5 SUB2", content: t3sub5sub2_ren });
});
//menu 화면으로 라우팅
router.get("/t3sub5sub3", function(req, res, next) {
  var t3sub5sub3_ren = ejs.render(t3sub5sub3, { title: "T3 SUB5 SUB3" });
  res.render("layout", { name: username, title: "T3 SUB5 SUB3", content: t3sub5sub3_ren });
});
//menu 화면으로 라우팅
router.get("/t3sub6", function(req, res, next) {
  var t3sub6_ren = ejs.render(t3sub6, { title: "T3 SUB6" });
  res.render("layout", { name: username, title: "T3 SUB6", content: t3sub6_ren });
});
//menu 화면으로 라우팅
router.get("/t4", function(req, res, next) {
  var t4_ren = ejs.render(t4, { title: "Top Menu4" });
  res.render("layout", { name: username, title: "T4", content: t4_ren });
});

module.exports = router;
