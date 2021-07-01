
var profile = []
<%savedGuild.commands.profile.aliases.forEach(command=>{%>
profile.push("<%=command%>")
         <%})%>
var user = []
<%savedGuild.commands.user.aliases.forEach(command=>{%>
user.push("<%=command%>")
         <%})%>
var avatar = []
<%savedGuild.commands.avatar.aliases.forEach(command=>{%>
avatar.push("<%=command%>")
         <%})%>
var server = []
<%savedGuild.commands.server.aliases.forEach(command=>{%>
server.push("<%=command%>")
         <%})%>
var daily = []
<%savedGuild.commands.daily.aliases.forEach(command=>{%>
daily.push("<%=command%>")
         <%})%>
var rep = []
<%savedGuild.commands.rep.aliases.forEach(command=>{%>
rep.push("<%=command%>")
         <%})%>
var credits = []
<%savedGuild.commands.credits.aliases.forEach(command=>{%>
credits.push("<%=command%>")
         <%})%>
var ping = []
<%savedGuild.commands.ping.aliases.forEach(command=>{%>
ping.push("<%=command%>")
         <%})%>
//---
var ban = []
<%savedGuild.commands.ban.aliases.forEach(command=>{%>
ban.push("<%=command%>")
         <%})%>
var unban = []
<%savedGuild.commands.unban.aliases.forEach(command=>{%>
unban.push("<%=command%>")
         <%})%>
var kick = []
<%savedGuild.commands.kick.aliases.forEach(command=>{%>
kick.push("<%=command%>")
         <%})%>
var mute = []
<%savedGuild.commands.mute.aliases.forEach(command=>{%>
mute.push("<%=command%>")
         <%})%>
var unmute = []
<%savedGuild.commands.unmute.aliases.forEach(command=>{%>
unmute.push("<%=command%>")
         <%})%>
var clear = []
<%savedGuild.commands.clear.aliases.forEach(command=>{%>
clear.push("<%=command%>")
         <%})%>
var lock = []
<%savedGuild.commands.lock.aliases.forEach(command=>{%>
lock.push("<%=command%>")
         <%})%>
var unlock = []
<%savedGuild.commands.unlock.aliases.forEach(command=>{%>
unlock.push("<%=command%>")
         <%})%>

$("#toggle_nav_btn").on('click', function() {
  var str = $('.sidebar_main').css('transform');
    var matrix = new WebKitCSSMatrix(str);
    if(matrix.m41==0){
      $(".sidebar_main").css("transform","translateX(100%)");
    } else{
      $(".sidebar_main").css("transform","translateX(0%)");
    }
})
$('.wel-li').on('click', function() {
  $('.wel-li').removeClass('active in');
  $(this).addClass('active in');
});
function setTab(name) {
  $('.lia').removeClass('active in');
  $(`#${name}`).addClass("active in");
}
$("#backgroundli").on('click', function() {
  setTab('background');
})
$("#avatarli").on('click', function() {
  setTab('avatar');
})
$("#usernameli").on('click', function() {
  setTab('username');
})
$(".savewel").unbind("click").click( async function(){
await $.ajax({
  type: "PUT",
  url: `/servers/${$(".guild-avatar").prop("alt")}/welcome_settings`,
  data: {
channel:$(".channel").prop("value"),
imagex:$(".imagex").prop("value"),
imagey:$(".imagey").prop("value"),
imagesx:$(".imagesx").prop("value"),
imagesy:$(".imagesy").prop("value"),
textx:$(".textx").prop("value"),
texty:$(".texty").prop("value"),
textsx:$(".textsx").prop("value"),
textsy:$(".textsy").prop("value"),
texts:$(".texts").prop("value"),
imageurl:$(".imageurl").prop("value"),
stagewidth:$(".stagewidth").prop("value"),
stageheight:$(".stageheight").prop("value"),
icontype:$(".icontype").prop("value"),
textarea:$(".textarea").prop("value"),
textcolor:$(".textcolor").prop("value"),
},
})
$(".confo2").fadeOut(50)
Toastify({
 text: "Success 👌",
  offset: { x: 350, y: 60 },
 duration: 2500
}).showToast();
})
$(".closewel").on("click",function(){
$(".confo2").fadeOut(50)
})
function confo2(){
$(".confo2").fadeIn(300)
}
$(".channel").on("change",function(){
confo2()
})
$("textarea").on("keypress keyup",function(){
confo2()
})
let stage = new Konva.Stage({
width: +(document.getElementById("stagewidth").value),
height: +(document.getElementById("stageheight").value),
container:"konvajs"

})
let layer = new Konva.Layer()
    stage.add(layer);
  var sources = {
        icon1: 'https://cdn.discordapp.com/attachments/819530298119290920/831048823588913152/welcome-image.png',
        icon2:'https://cdn.discordapp.com/attachments/701551367608729601/831084568374673478/download.png',
        backround:document.getElementById("imageurl").value
      };
var image = new Image()
image.src= sources.backround

var background = new Konva.Image({
width:stage.width(),
height:stage.height(),
image:image
})

       layer.add(background)
  let text = new Konva.Text({
        x:+(document.getElementById("tx").value),
        y:+(document.getElementById("ty").value),
       fontSize:+(document.getElementById("ts").value),
       name:"text",
       fill:`${document.getElementById("color-picker").value}`,
      scaleX:(+(document.getElementById("tsx").value))/50,
      scaleY:(+(document.getElementById("tsy").value))/50,
        text:"UserName",
        draggable: true,
        fontFamily:"Roboto,Arial,sans-serif",
        shadowOffset: { x: 1, y: 2 },
          shadowColor: "black",
          fontStyle:"bold",
          align:`${$(".textalign").prop("value")}`,
          width:130
})


layer.add(text);
 var tr = new Konva.Transformer({
        padding:5,
        rotateEnabled	: false,
        nodes: [text]

      });
 layer.add(tr);
  
var image2 = new Image()
image2.src= sources.icon2

var image1 = new Image()
image1.src= sources.icon1
if(document.getElementById("icons").value === "circle"){
var crimg = image1
}else{
var crimg = image2
}
var circle = new Konva.Image({
      x: +(document.getElementById("conx").value),
      y: +(document.getElementById("cony").value),
  scaleX:(+(document.getElementById("conw").value))/50,
  scaleY:(+(document.getElementById("conh").value))/50,
  draggable: true,
name:"circle",
image:crimg

})
  layer.add(circle) 
 var tr2 = new Konva.Transformer({
        rotateEnabled	: false,
        nodes: [circle]

      });
    layer.add(tr2);

tr2.visible(false)
tr.visible(false)
    

layer.draw();
$('#color-picker').spectrum({
  type: "color",
 preferredFormat: "hex",
  showButtons: false,
  showInput: true,
  showPalette: true,
   togglePaletteMoreText: 'more',
    togglePaletteLessText: 'less',
    palette: [["#9013fe", "#bd10e0", "#417505","#7ed321","#8b572a","#f8e71c","#f5a623","#d0021b"],["#9b9b9b","#4a4a4a","#000000","#b8e986","#50e3c2","#4a90e2","#ff00a9"]],
    move: function(tinycolor) { 
   $('.textcolor').val(`${$("#color-picker").spectrum("get").toHexString()}`)
    text.fill($("#color-picker").spectrum("get").toHexString())
    layer.batchDraw();
    confo2()

  },
});
stage.on('click tap', function (e) {
if(e.target.hasName('circle')){
setTimeout(() => {
tr.visible(false)
tr2.visible(true)
layer.batchDraw();
});}
if(e.target.hasName('text')){
setTimeout(() => {
tr2.visible(false)
tr.visible(true)
layer.batchDraw();
});}
if (e.target === background || e.target === stage) {
setTimeout(() => {
tr.visible(false)
tr2.visible(false)
layer.batchDraw();
});
}
});
//--------
circle.on('dragmove', function () {
        updateText();
      });
     circle.on('transform', function () {
        updateText();
      });
//--------
text.on('dragmove', function () {
        updateText();

      });
     text.on('transform', function () {
        updateText();

      });
//----
$("#icons").on("change",function icons() {
if(document.getElementById("icons").value === "squere"){
circle.image(image2)
}else{
circle.image(image1)
}
layer.draw()
confo2()
})
$(".textalign").on("change",function textal() {
if(document.getElementById("textalign").value == "center"){
text.align('center')
}else if(document.getElementById("textalign").value == "left"){
text.align('left')
}else if(document.getElementById("textalign").value == "right"){
text.align('right')
}
layer.draw()
confo2()
})



function updateText() {
$('.cordenx').val(`${circle.absolutePosition().x}`)
$('.cordeny').val(`${circle.absolutePosition().y}`)
$('.cordenw').val(`${circle.scaleX()*50}`)
$('.cordenh').val(`${circle.scaleY()*50}`)
$('.textx').val(`${text.absolutePosition().x}`)
$('.texty').val(`${text.absolutePosition().y}`)
$('.texts').val(`${text.fontSize()}`)
$('.textsy').val(`${text.scaleY()*50}`)
$('.textsx').val(`${text.scaleX()*50}`)
confo2()



      }

// add button event bindings

$(document).ready(function(){
   $('.cordenx').on('keypress paste',badr);
   $('.cordeny').on('keyup paste',badr);
  $('.cordenw').on('keypress paste',badr);
   $('.cordenh').on('keyup paste',badr);
   $('.textx').on('keypress paste',badr2);
   $('.texty').on('keyup paste',badr2);
  $('.texts').on('keypress paste',badr2);
});
$("#welcomeTab").on("click",function(){
layer.batchDraw();

})

function badr(){
confo2()
  circle.position({
    x: +(document.getElementById("conx").value),
    y: +(document.getElementById("cony").value),
  });

}
     function badr2(){
text.position({
    x: +(document.getElementById("tx").value),
    y: +(document.getElementById("ty").value),
  });
text.fontSize(+(document.getElementById("tw").value))
layer.draw();
confo2()
}

$("input[type='Number']").change( function() {
  circle.position({
     x: +(document.getElementById("conx").value),
    y: +(document.getElementById("cony").value),
  });
circle.scale({
    x: (+(document.getElementById("conw").value))/50,
    y: (+(document.getElementById("conh").value))/50
})

text.position({
    x: +(document.getElementById("tx").value),
    y: +(document.getElementById("ty").value),
  });
text.fontSize(+(document.getElementById("ts").value))

layer.draw();
confo2()
});

 

$("#imagefiled").on('change', function() {
fileChange()
});

//------------------------
function fileChange(){
var file = document.getElementById('imagefiled');
var form = new FormData();
form.append("image", file.files[0])
  $(".fileinput").hide()
  $(".progessbar").show()

var settings = {
xhr: function() {
    var xhr = new window.XMLHttpRequest();

    xhr.upload.addEventListener("progress", 

function(event) {
if (event.lengthComputable) {
var percentComplete = event.loaded / event.total;
        percentComplete = parseInt(percentComplete * 100);
$(".rc-progress-line-path").css("stroke-dasharray",`${percentComplete}px, 100px`)
if (percentComplete === 100) {
  $(".progessbar").hide()
  $(".fileinput").show()
$(".rc-progress-line-path").css("stroke-dasharray",`0px, 100px;`)

    }
    }
    }
, false);

    return xhr;
  },
  "url": "https://api.imgbb.com/1/upload?key=fb23576d1554ebeabb851b9c8d74aeb4",
  "method": "POST",
  "timeout": 0,
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": form
};


$.ajax(settings).done(function (response) {
var jx = JSON.parse(response)
$('#imageurl').val(`${jx.data.url}`)


 var imgc = new Image();
   imgc.src = `${jx.data.url}`
 imgc.onload = function getwidth() {



var imagewidth = imgc.width
var imageheight = imgc.height
  var maxWidth = 500;
  var maxHeight = 500;
if((imagewidth > maxWidth)&&(imageheight < maxHeight)){
var ratio = maxWidth / imagewidth,
 width = imagewidth * ratio,
height = imageheight * ratio
console.log("1")
}
  if((imageheight > maxHeight)&&(imagewidth < maxWidth)){
    var ratio = imageheight,
    width = imagewidth * maxWidth/(ratio),
   height = imageheight * maxHeight/(ratio)
 console.log("2")

      }

if((imagewidth > maxWidth)&&(imageheight > maxHeight)){
       var ratio = maxWidth / imagewidth,
 width = imagewidth * ratio,
 height = imageheight * ratio
 console.log("3")

}
if((imageheight < maxHeight)&&(imagewidth < maxWidth)){
  var ratio = maxWidth / imagewidth,
  width = imagewidth * ratio,
 height = imageheight * ratio
 console.log("4")
 
}

stage.width(parseFloat(width).toFixed(0))
stage.height(parseFloat(height).toFixed(0))
$('.stagewidth').val(`${parseFloat(width).toFixed(0)}`)
$('.stageheight').val(`${parseFloat(height).toFixed(0)}`)
background.width(parseFloat(width).toFixed(0))
background.height(parseFloat(height).toFixed(0))
     

background.image(imgc)
stage.draw();
confo2()
  };


});
}
</script>
<script>
$('.nav-link').on('click', function() {
  $('.nav-link').removeClass('active');
  $(this).addClass('active');
});

function setModule(name) {
  $('section').hide();
  $(`#${name}`).show();
  $(`#${name}Tab`).addClass('active');
}
$("#settingTab").on('click', function() {
  setModule('setting');
if (window.matchMedia('(max-width: 500px)').matches) {
  $(".sidebar_main").css("transform","translateX(100%)");
}
})

$("#commanndsTab").on('click', function() {
  setModule('commannds');
if (window.matchMedia('(max-width: 500px)').matches) {
  $(".sidebar_main").css("transform","translateX(100%)");
}
})
$("#modTab").on('click', function() {
  setModule('mod');
if (window.matchMedia('(max-width: 500px)').matches) {
  $(".sidebar_main").css("transform","translateX(100%)");
}
})
$("#welcomeTab").on('click', function() {
  setModule('welcome');
if (window.matchMedia('(max-width: 500px)').matches) {
  $(".sidebar_main").css("transform","translateX(100%)");
}
})

$(".prefix").on('keydown change', function() {//prefix
$(".confo").fadeIn(300);
console.log('show')
$(".btn-default").unbind("click").click( async function(){
$(".confo").fadeOut(100)
console.log('hide')
  $(".prefix").val($(".prefix").prop("defaultValue"));
})
function tos(){
Toastify({
 text: "Success 👌",
  offset: { x: 350, y: 60 },
 duration: 2500
}).showToast();
}
$(".save-prefix").unbind("click").click( async function(){//prefix
  $(this).addClass("running disabled")
 await $.ajax({
  type: "PUT",
  url: `/servers/${$(".guild-avatar").prop("alt")}/general`,
  data: {prefix:$(".prefix").prop("value")},
})
$(".confo").fadeOut(200)
tos()
$(".prefix").attr("value", $(".prefix").prop("value"));

  $(this).removeClass("running disabled")

})
})
$(".commandsonoff").on("click",async function(){//on-off-btn
 var str=$('.cricel').css('transform');
    var matrix=new WebKitCSSMatrix(str);
if(matrix.m41==1){
console.log("1")
  $(".cmdonoff").css("background","rgb(136, 136, 136)");
  $(".cricel").css("transform","translateX(111px)");
  $(".box1").css("opacity","0");
  $(".box2").css("opacity","1");
await $.ajax({
  type: "PUT",
  url: `/cmd/${$(".guild-avatar").prop("alt")}/enabled`,
  data: {data:false},
})
    } else{
console.log("2")
  $(".cmdonoff").css("background","rgb(0, 136, 0)");
  $(".cricel").css("transform","translateX(1px)");
  $(".box2").css("opacity","0");
  $(".box1").css("opacity","1");
await $.ajax({
  type: "PUT",
  url: `/cmd/${$(".guild-avatar").prop("alt")}/enabled`,
  data: {data:true},
})
    }
})
/**********************profile*******************************************/
$(".profileonoff").on("click",async function(){//on-off-btn
 var str= $('.profilecricel').css('transform');
console.log($(this).parent().parent().parent().find('div').first().find('div').first().text())
  var matrix = new WebKitCSSMatrix(str);
if(matrix.m41==2){
  $(".profilebox").css("background","rgb(136, 136, 136)");
  $(".profilecricel").css("transform","translateX(20px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:false},
})
    } else{
  $(".profilebox").css("background","rgb(226, 64, 158)");
  $(".profilecricel").css("transform","translateX(2px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:true},
})
}
})
/**********************user*******************************************/
$(".useronoff").on("click",async function(){//on-off-btn
 var str= $('.usercricel').css('transform');
console.log($(this).parent().parent().parent().find('div').first().find('div').first().text())
  var matrix = new WebKitCSSMatrix(str);
if(matrix.m41==2){
  $(".userbox").css("background","rgb(136, 136, 136)");
  $(".usercricel").css("transform","translateX(20px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:false},
})
    } else{
  $(".userbox").css("background","rgb(226, 64, 158)");
  $(".usercricel").css("transform","translateX(2px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:true},
})
}
})
/**********************avatar*******************************************/
$(".avataronoff").on("click",async function(){//on-off-btn
 var str= $('.avatarcricel').css('transform');
console.log($(this).parent().parent().parent().find('div').first().find('div').first().text())
  var matrix = new WebKitCSSMatrix(str);
if(matrix.m41==2){
  $(".avatarbox").css("background","rgb(136, 136, 136)");
  $(".avatarcricel").css("transform","translateX(20px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:false},
})
    } else{
  $(".avatarbox").css("background","rgb(226, 64, 158)");
  $(".avatarcricel").css("transform","translateX(2px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:true},
})
}
})
/**********************server*******************************************/
$(".serveronoff").on("click",async function(){//on-off-btn
 var str= $('.servercricel').css('transform');
console.log($(this).parent().parent().parent().find('div').first().find('div').first().text())
  var matrix = new WebKitCSSMatrix(str);
if(matrix.m41==2){
  $(".serverbox").css("background","rgb(136, 136, 136)");
  $(".servercricel").css("transform","translateX(20px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:false},
})
    } else{
  $(".serverbox").css("background","rgb(226, 64, 158)");
  $(".servercricel").css("transform","translateX(2px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:true},
})
}
})
/**********************daily*******************************************/
$(".dailyonoff").on("click",async function(){//on-off-btn
 var str= $('.dailycricel').css('transform');
console.log($(this).parent().parent().parent().find('div').first().find('div').first().text())
  var matrix = new WebKitCSSMatrix(str);
if(matrix.m41==2){
  $(".dailybox").css("background","rgb(136, 136, 136)");
  $(".dailycricel").css("transform","translateX(20px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:false},
})
    } else{
  $(".dailybox").css("background","rgb(226, 64, 158)");
  $(".dailycricel").css("transform","translateX(2px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:true},
})
}
})
/**********************rep*******************************************/
$(".reponoff").on("click",async function(){//on-off-btn
 var str= $('.repcricel').css('transform');
console.log($(this).parent().parent().parent().find('div').first().find('div').first().text())
  var matrix = new WebKitCSSMatrix(str);
if(matrix.m41==2){
  $(".repbox").css("background","rgb(136, 136, 136)");
  $(".repcricel").css("transform","translateX(20px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:false},
})
    } else{
  $(".repbox").css("background","rgb(226, 64, 158)");
  $(".repcricel").css("transform","translateX(2px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:true},
})
}
})
/**********************rep*******************************************/
$(".creditsonoff").on("click",async function(){//on-off-btn
 var str= $('.creditscricel').css('transform');
console.log($(this).parent().parent().parent().find('div').first().find('div').first().text())
  var matrix = new WebKitCSSMatrix(str);
if(matrix.m41==2){
  $(".creditsbox").css("background","rgb(136, 136, 136)");
  $(".creditscricel").css("transform","translateX(20px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:false},
})
    } else{
  $(".creditsbox").css("background","rgb(226, 64, 158)");
  $(".creditscricel").css("transform","translateX(2px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:true},
})
}
})
/**********************ping*******************************************/
$(".pingonoff").on("click",async function(){//on-off-btn
 var str= $('.pingcricel').css('transform');
console.log($(this).parent().parent().parent().find('div').first().find('div').first().text())
  var matrix = new WebKitCSSMatrix(str);
if(matrix.m41==2){
  $(".pingbox").css("background","rgb(136, 136, 136)");
  $(".pingcricel").css("transform","translateX(20px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:false},
})
    } else{
  $(".pingbox").css("background","rgb(226, 64, 158)");
  $(".pingcricel").css("transform","translateX(2px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:true},
})
}
})
/**********************ban*******************************************/
$(".banonoff").on("click",async function(){//on-off-btn
 var str= $('.bancricel').css('transform');
console.log($(this).parent().parent().parent().find('div').first().find('div').first().text())
  var matrix = new WebKitCSSMatrix(str);
if(matrix.m41==2){
  $(".banbox").css("background","rgb(136, 136, 136)");
  $(".bancricel").css("transform","translateX(20px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:false},
})
    } else{
  $(".banbox").css("background","rgb(226, 64, 158)");
  $(".bancricel").css("transform","translateX(2px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:true},
})
}
})
/**********************unban*******************************************/
$(".unbanonoff").on("click",async function(){//on-off-btn
 var str= $('.unbancricel').css('transform');
console.log($(this).parent().parent().parent().find('div').first().find('div').first().text())
  var matrix = new WebKitCSSMatrix(str);
if(matrix.m41==2){
  $(".unbanbox").css("background","rgb(136, 136, 136)");
  $(".unbancricel").css("transform","translateX(20px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:false},
})
    } else{
  $(".unbanbox").css("background","rgb(226, 64, 158)");
  $(".unbancricel").css("transform","translateX(2px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:true},
})
}
})
/**********************kick*******************************************/
$(".kickonoff").on("click",async function(){//on-off-btn
 var str= $('.kickcricel').css('transform');
console.log($(this).parent().parent().parent().find('div').first().find('div').first().text())
  var matrix = new WebKitCSSMatrix(str);
if(matrix.m41==2){
  $(".kickbox").css("background","rgb(136, 136, 136)");
  $(".kickcricel").css("transform","translateX(20px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:false},
})
    } else{
  $(".kickbox").css("background","rgb(226, 64, 158)");
  $(".kickcricel").css("transform","translateX(2px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:true},
})
}
})
/**********************mute*******************************************/
$(".muteonoff").on("click",async function(){//on-off-btn
 var str= $('.mutecricel').css('transform');
console.log($(this).parent().parent().parent().find('div').first().find('div').first().text())
  var matrix = new WebKitCSSMatrix(str);
if(matrix.m41==2){
  $(".mutebox").css("background","rgb(136, 136, 136)");
  $(".mutecricel").css("transform","translateX(20px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:false},
})
    } else{
  $(".mutebox").css("background","rgb(226, 64, 158)");
  $(".mutecricel").css("transform","translateX(2px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:true},
})
}
})
/**********************unmute*******************************************/
$(".unmuteonoff").on("click",async function(){//on-off-btn
 var str= $('.unmutecricel').css('transform');
console.log($(this).parent().parent().parent().find('div').first().find('div').first().text())
  var matrix = new WebKitCSSMatrix(str);
if(matrix.m41==2){
  $(".unmutebox").css("background","rgb(136, 136, 136)");
  $(".unmutecricel").css("transform","translateX(20px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:false},
})
    } else{
  $(".unmutebox").css("background","rgb(226, 64, 158)");
  $(".unmutecricel").css("transform","translateX(2px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:true},
})
}
})
/**********************clear*******************************************/
$(".clearonoff").on("click",async function(){//on-off-btn
 var str= $('.clearcricel').css('transform');
console.log($(this).parent().parent().parent().find('div').first().find('div').first().text())
  var matrix = new WebKitCSSMatrix(str);
if(matrix.m41==2){
  $(".clearbox").css("background","rgb(136, 136, 136)");
  $(".clearcricel").css("transform","translateX(20px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:false},
})
    } else{
  $(".clearbox").css("background","rgb(226, 64, 158)");
  $(".clearcricel").css("transform","translateX(2px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:true},
})
}
})
/**********************lock*******************************************/
$(".lockonoff").on("click",async function(){//on-off-btn
 var str= $('.lockcricel').css('transform');
console.log($(this).parent().parent().parent().find('div').first().find('div').first().text())
  var matrix = new WebKitCSSMatrix(str);
if(matrix.m41==2){
  $(".lockbox").css("background","rgb(136, 136, 136)");
  $(".lockcricel").css("transform","translateX(20px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:false},
})
    } else{
  $(".lockbox").css("background","rgb(226, 64, 158)");
  $(".lockcricel").css("transform","translateX(2px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:true},
})
}
})
/**********************unlock*******************************************/
$(".unlockonoff").on("click",async function(){//on-off-btn
 var str= $('.unlockcricel').css('transform');
console.log($(this).parent().parent().parent().find('div').first().find('div').first().text())
  var matrix = new WebKitCSSMatrix(str);
if(matrix.m41==2){
  $(".unlockbox").css("background","rgb(136, 136, 136)");
  $(".unlockcricel").css("transform","translateX(20px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:false},
})
    } else{
  $(".unlockbox").css("background","rgb(226, 64, 158)");
  $(".unlockcricel").css("transform","translateX(2px)");
 await $.ajax({
  type: "PUT",
  url: `/cmdenable/${$(".guild-avatar").prop("alt")}/${$(this).parent().parent().parent().find('div').first().find('div').first().text()}`,
  data: {data:true},
})
}
})
//******************************************************************/
$(".colseedit").unbind("click").click( async function(){//hide-edit
$(".formselect__multi-value").remove()
$("#react-select-13-input").val(null); 
$(".showedit").hide()
$("#react-select-13-input").css("width",2);
})
$(".css-2b097c-container").unbind("click").click( async function(){
$(".css-2b097c-container").removeClass("formselect__control--is-focused")
$(this).addClass("formselect__control--is-focused")
$("#react-select-13-input").focus()
})
$(".formselect__multi-value__remove").on("click",function(){//remove this
$(this).parent().remove()
})
$(".css-1wy0on6").unbind("click").click( async function(){//remove all
console.log("remove")
$(".formselect__multi-value").remove()
})
//--------------------------------------------------------------------
function add(){
var  newWidth = $("#react-select-13-input").val().length * 10 +12
  $("#react-select-13-input").css("width",newWidth);

}

document.getElementById("react-select-13-input").onkeydown = async function() {
    var key = event.keyCode || event.charCode;
    if( key == 8 ){
if($("#react-select-13-input").width() <=2)return
var newWidth =$("#react-select-13-input").val().length * 10 -10 + 2
  $("#react-select-13-input").css("width",newWidth)
}
if(key == 13||key == 32){
$(`
<div class="css-1rhbuit-multiValue formselect__multi-value">
  <div class="css-12jo7m5 formselect__multi-value__label">${$("#react-select-13-input").prop("value")}</div>
  <div class="css-xb97g8 formselect__multi-value__remove">
    <svg
      height="14"
      width="14"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      class="css-19bqh2r"
    >
      <path
        d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
      ></path>
    </svg>
  </div>
</div>

`).insertBefore( ".shorts1" )
$(".formselect__multi-value__remove").on("click",function(){//remove this
$(this).parent().remove()
})
$(".css-1wy0on6").unbind("click").click( async function(){//remove all
$(".formselect__multi-value").remove()
})
$("#react-select-13-input").val(null); 
$("#react-select-13-input").css("width",2);

}
};
//-------------------------editprofile--------------------------------
$(".editprofile").unbind("click").click( async function(){//edlit moveme
profile.forEach((cmd)=>{
$(`<div class="css-1rhbuit-multiValue formselect__multi-value">
  <div class="css-12jo7m5 formselect__multi-value__label">${cmd}</div>
  <div class="css-xb97g8 formselect__multi-value__remove">
    <svg
      height="14"
      width="14"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      class="css-19bqh2r"
    >
      <path
        d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
      ></path>
    </svg>
  </div>
</div>
`).insertBefore( ".shorts1" )
})
$(".showedit").fadeIn(150)
$(".commandSave .btn").unbind("click").click( async function(){
var aliases = $('.css-12jo7m5').map(function(){ return $(this).text().replace(" ","") }).get()
await $.ajax({
  type: "PUT",
  url: `/commands/${$(".guild-avatar").prop("alt")}/profile`,
  data: {arr:aliases},
})
  await profile.pop();
  profile = aliases
Toastify({
 text: "Success 👌",
  offset: { x: 350, y: 60 },
 duration: 2500
}).showToast();
$(".formselect__multi-value").remove()
$(".showedit").hide()
$("#react-select-13-input").css("width",2);

})

})
//-------------------------edituser--------------------------------
$(".edituser").unbind("click").click( async function(){//edlit moveme
user.forEach((cmd)=>{
$(`<div class="css-1rhbuit-multiValue formselect__multi-value">
  <div class="css-12jo7m5 formselect__multi-value__label">${cmd}</div>
  <div class="css-xb97g8 formselect__multi-value__remove">
    <svg
      height="14"
      width="14"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      class="css-19bqh2r"
    >
      <path
        d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
      ></path>
    </svg>
  </div>
</div>
`).insertBefore( ".shorts1" )
})
$(".formselect__multi-value__remove").on("click",function(){//remove this
$(this).parent().remove()
})
$(".css-1wy0on6").unbind("click").click( async function(){//remove all
$(".formselect__multi-value").remove()
})
$(".showedit").fadeIn(150)
$(".commandSave .btn").unbind("click").click( async function(){
var paliases = $('.css-12jo7m5').map(function(){ return $(this).text().replace(" ","") }).get()
await $.ajax({
  type: "PUT",
  url: `/commands/${$(".guild-avatar").prop("alt")}/user`,
  data: {arr:paliases},
})
  await user.pop();
  user = paliases
Toastify({
 text: "Success 👌",
  offset: { x: 350, y: 60 },
 duration: 2500
}).showToast();
$(".formselect__multi-value").remove()
$("#react-select-13-input").val(null); 
$("#react-select-13-input").css("width",2);
$(".showedit").hide()
})
$("#react-select-13-input").bind('keypress', function() {
add()
})
})
//-------------------------editavatar--------------------------------
$(".editavatar").unbind("click").click( async function(){//edlit moveme
avatar.forEach((cmd)=>{
$(`<div class="css-1rhbuit-multiValue formselect__multi-value">
  <div class="css-12jo7m5 formselect__multi-value__label">${cmd}</div>
  <div class="css-xb97g8 formselect__multi-value__remove">
    <svg
      height="14"
      width="14"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      class="css-19bqh2r"
    >
      <path
        d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
      ></path>
    </svg>
  </div>
</div>
`).insertBefore( ".shorts1" )
})
$(".formselect__multi-value__remove").on("click",function(){//remove this
$(this).parent().remove()
})
$(".css-1wy0on6").unbind("click").click( async function(){//remove all
$(".formselect__multi-value").remove()
})
$(".showedit").fadeIn(150)
$(".commandSave .btn").unbind("click").click( async function(){
var paliases = $('.css-12jo7m5').map(function(){ return $(this).text().replace(" ","") }).get()
await $.ajax({
  type: "PUT",
  url: `/commands/${$(".guild-avatar").prop("alt")}/avatar`,
  data: {arr:paliases},
})
  await avatar.pop();
  avatar = paliases
Toastify({
 text: "Success 👌",
  offset: { x: 350, y: 60 },
 duration: 2500
}).showToast();
$(".formselect__multi-value").remove()
$("#react-select-13-input").val(null); 
$("#react-select-13-input").css("width",2);
$(".showedit").hide()
})
$("#react-select-13-input").bind('keypress', function() {
add()
})
})
//-------------------------editserver--------------------------------
$(".editserver").unbind("click").click( async function(){//edlit moveme
server.forEach((cmd)=>{
$(`<div class="css-1rhbuit-multiValue formselect__multi-value">
  <div class="css-12jo7m5 formselect__multi-value__label">${cmd}</div>
  <div class="css-xb97g8 formselect__multi-value__remove">
    <svg
      height="14"
      width="14"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      class="css-19bqh2r"
    >
      <path
        d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
      ></path>
    </svg>
  </div>
</div>
`).insertBefore( ".shorts1" )
})
$(".formselect__multi-value__remove").on("click",function(){//remove this
$(this).parent().remove()
})
$(".css-1wy0on6").unbind("click").click( async function(){//remove all
$(".formselect__multi-value").remove()
})
$(".showedit").fadeIn(150)
$(".commandSave .btn").unbind("click").click( async function(){
var paliases = $('.css-12jo7m5').map(function(){ return $(this).text().replace(" ","") }).get()
await $.ajax({
  type: "PUT",
  url: `/commands/${$(".guild-avatar").prop("alt")}/server`,
  data: {arr:paliases},
})
  await server.pop();
  server = paliases
Toastify({
 text: "Success 👌",
  offset: { x: 350, y: 60 },
 duration: 2500
}).showToast();
$(".formselect__multi-value").remove()
$("#react-select-13-input").val(null); 
$("#react-select-13-input").css("width",2);
$(".showedit").hide()
})
$("#react-select-13-input").bind('keypress', function() {
add()
})
})
//-------------------------editdaily--------------------------------
$(".editdaily").unbind("click").click( async function(){//edlit moveme
daily.forEach((cmd)=>{
$(`<div class="css-1rhbuit-multiValue formselect__multi-value">
  <div class="css-12jo7m5 formselect__multi-value__label">${cmd}</div>
  <div class="css-xb97g8 formselect__multi-value__remove">
    <svg
      height="14"
      width="14"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      class="css-19bqh2r"
    >
      <path
        d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
      ></path>
    </svg>
  </div>
</div>
`).insertBefore( ".shorts1" )
})
$(".formselect__multi-value__remove").on("click",function(){//remove this
$(this).parent().remove()
})
$(".css-1wy0on6").unbind("click").click( async function(){//remove all
$(".formselect__multi-value").remove()
})
$(".showedit").fadeIn(150)
$(".commandSave .btn").unbind("click").click( async function(){
var paliases = $('.css-12jo7m5').map(function(){ return $(this).text().replace(" ","") }).get()
await $.ajax({
  type: "PUT",
  url: `/commands/${$(".guild-avatar").prop("alt")}/daily`,
  data: {arr:paliases},
})
  await daily.pop();
  daily = paliases
Toastify({
 text: "Success 👌",
  offset: { x: 350, y: 60 },
 duration: 2500
}).showToast();
$(".formselect__multi-value").remove()
$("#react-select-13-input").val(null); 
$("#react-select-13-input").css("width",2);
$(".showedit").hide()
})
$("#react-select-13-input").bind('keypress', function() {
add()
})
})
//-------------------------editrep--------------------------------

$(".editrep").unbind("click").click( async function(){//edlit moveme
rep.forEach((cmd)=>{
$(`<div class="css-1rhbuit-multiValue formselect__multi-value">
  <div class="css-12jo7m5 formselect__multi-value__label">${cmd}</div>
  <div class="css-xb97g8 formselect__multi-value__remove">
    <svg
      height="14"
      width="14"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      class="css-19bqh2r"
    >
      <path
        d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
      ></path>
    </svg>
  </div>
</div>
`).insertBefore( ".shorts1" )
})
$(".formselect__multi-value__remove").on("click",function(){//remove this
$(this).parent().remove()
})
$(".css-1wy0on6").unbind("click").click( async function(){//remove all
$(".formselect__multi-value").remove()
})
$(".showedit").fadeIn(150)
$(".commandSave .btn").unbind("click").click( async function(){
var paliases = $('.css-12jo7m5').map(function(){ return $(this).text().replace(" ","") }).get()
await $.ajax({
  type: "PUT",
  url: `/commands/${$(".guild-avatar").prop("alt")}/rep`,
  data: {arr:paliases},
})
  await rep.pop();
  rep = paliases
Toastify({
 text: "Success 👌",
  offset: { x: 350, y: 60 },
 duration: 2500
}).showToast();
$(".formselect__multi-value").remove()
$("#react-select-13-input").val(null); 
$("#react-select-13-input").css("width",2);
$(".showedit").hide()
})
$("#react-select-13-input").bind('keypress', function() {
add()
})
})
//-------------------------editcredits--------------------------------

$(".editcredits").unbind("click").click( async function(){//edlit moveme
credits.forEach((cmd)=>{
$(`<div class="css-1rhbuit-multiValue formselect__multi-value">
  <div class="css-12jo7m5 formselect__multi-value__label">${cmd}</div>
  <div class="css-xb97g8 formselect__multi-value__remove">
    <svg
      height="14"
      width="14"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      class="css-19bqh2r"
    >
      <path
        d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
      ></path>
    </svg>
  </div>
</div>
`).insertBefore( ".shorts1" )
})
$(".formselect__multi-value__remove").on("click",function(){//remove this
$(this).parent().remove()
})
$(".css-1wy0on6").unbind("click").click( async function(){//remove all
$(".formselect__multi-value").remove()
})
$(".showedit").fadeIn(150)
$(".commandSave .btn").unbind("click").click( async function(){
var paliases = $('.css-12jo7m5').map(function(){ return $(this).text().replace(" ","") }).get()
await $.ajax({
  type: "PUT",
  url: `/commands/${$(".guild-avatar").prop("alt")}/credits`,
  data: {arr:paliases},
})
  await credits.pop();
  credits = paliases
Toastify({
 text: "Success 👌",
  offset: { x: 350, y: 60 },
 duration: 2500
}).showToast();
$(".formselect__multi-value").remove()
$("#react-select-13-input").val(null); 
$("#react-select-13-input").css("width",2);
$(".showedit").hide()
})
$("#react-select-13-input").bind('keypress', function() {
add()
})
})
//-------------------------editping--------------------------------

$(".editping").unbind("click").click( async function(){//edlit moveme
ping.forEach((cmd)=>{
$(`<div class="css-1rhbuit-multiValue formselect__multi-value">
  <div class="css-12jo7m5 formselect__multi-value__label">${cmd}</div>
  <div class="css-xb97g8 formselect__multi-value__remove">
    <svg
      height="14"
      width="14"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      class="css-19bqh2r"
    >
      <path
        d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
      ></path>
    </svg>
  </div>
</div>
`).insertBefore( ".shorts1" )
})
$(".formselect__multi-value__remove").on("click",function(){//remove this
$(this).parent().remove()
})
$(".css-1wy0on6").unbind("click").click( async function(){//remove all
$(".formselect__multi-value").remove()
})
$(".showedit").fadeIn(150)
$(".commandSave .btn").unbind("click").click( async function(){
var paliases = $('.css-12jo7m5').map(function(){ return $(this).text().replace(" ","") }).get()
await $.ajax({
  type: "PUT",
  url: `/commands/${$(".guild-avatar").prop("alt")}/ping`,
  data: {arr:paliases},
})
  await ping.pop();
  ping = paliases
Toastify({
 text: "Success 👌",
  offset: { x: 350, y: 60 },
 duration: 2500
}).showToast();
$(".formselect__multi-value").remove()
$("#react-select-13-input").val(null); 
$("#react-select-13-input").css("width",2);
$(".showedit").hide()
})
$("#react-select-13-input").bind('keypress', function() {
add()
})
})
//-------------------------editban--------------------------------
$(".editban").unbind("click").click( async function(){//edlit moveme
ban.forEach((cmd)=>{
$(`<div class="css-1rhbuit-multiValue formselect__multi-value">
  <div class="css-12jo7m5 formselect__multi-value__label">${cmd}</div>
  <div class="css-xb97g8 formselect__multi-value__remove">
    <svg
      height="14"
      width="14"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      class="css-19bqh2r"
    >
      <path
        d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
      ></path>
    </svg>
  </div>
</div>
`).insertBefore( ".shorts1" )
})
$(".formselect__multi-value__remove").on("click",function(){//remove this
$(this).parent().remove()
})
$(".css-1wy0on6").unbind("click").click( async function(){//remove all
$(".formselect__multi-value").remove()
})
$(".showedit").fadeIn(150)
$(".commandSave .btn").unbind("click").click( async function(){
var paliases = $('.css-12jo7m5').map(function(){ return $(this).text().replace(" ","") }).get()
await $.ajax({
  type: "PUT",
  url: `/commands/${$(".guild-avatar").prop("alt")}/ban`,
  data: {arr:paliases},
})
  await ban.pop();
  ban = paliases
Toastify({
 text: "Success 👌",
  offset: { x: 350, y: 60 },
 duration: 2500
}).showToast();
$(".formselect__multi-value").remove()
$("#react-select-13-input").val(null); 
$("#react-select-13-input").css("width",2);
$(".showedit").hide()
})
$("#react-select-13-input").bind('keypress', function() {
add()
})
})
//-------------------------editunban--------------------------------
$(".editunban").unbind("click").click( async function(){//edlit moveme
unban.forEach((cmd)=>{
$(`<div class="css-1rhbuit-multiValue formselect__multi-value">
  <div class="css-12jo7m5 formselect__multi-value__label">${cmd}</div>
  <div class="css-xb97g8 formselect__multi-value__remove">
    <svg
      height="14"
      width="14"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      class="css-19bqh2r"
    >
      <path
        d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
      ></path>
    </svg>
  </div>
</div>
`).insertBefore( ".shorts1" )
})
$(".formselect__multi-value__remove").on("click",function(){//remove this
$(this).parent().remove()
})
$(".css-1wy0on6").unbind("click").click( async function(){//remove all
$(".formselect__multi-value").remove()
})
$(".showedit").fadeIn(150)
$(".commandSave .btn").unbind("click").click( async function(){
var paliases = $('.css-12jo7m5').map(function(){ return $(this).text().replace(" ","") }).get()
await $.ajax({
  type: "PUT",
  url: `/commands/${$(".guild-avatar").prop("alt")}/unban`,
  data: {arr:paliases},
})
  await unban.pop();
  unban = paliases
Toastify({
 text: "Success 👌",
  offset: { x: 350, y: 60 },
 duration: 2500
}).showToast();
$(".formselect__multi-value").remove()
$("#react-select-13-input").val(null); 
$("#react-select-13-input").css("width",2);
$(".showedit").hide()
})
$("#react-select-13-input").bind('keypress', function() {
add()
})
})
//-------------------------editkick--------------------------------
$(".editkick").unbind("click").click( async function(){//edlit moveme
kick.forEach((cmd)=>{
$(`<div class="css-1rhbuit-multiValue formselect__multi-value">
  <div class="css-12jo7m5 formselect__multi-value__label">${cmd}</div>
  <div class="css-xb97g8 formselect__multi-value__remove">
    <svg
      height="14"
      width="14"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      class="css-19bqh2r"
    >
      <path
        d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
      ></path>
    </svg>
  </div>
</div>
`).insertBefore( ".shorts1" )
})
$(".formselect__multi-value__remove").on("click",function(){//remove this
$(this).parent().remove()
})
$(".css-1wy0on6").unbind("click").click( async function(){//remove all
$(".formselect__multi-value").remove()
})
$(".showedit").fadeIn(150)
$(".commandSave .btn").unbind("click").click( async function(){
var paliases = $('.css-12jo7m5').map(function(){ return $(this).text().replace(" ","") }).get()
await $.ajax({
  type: "PUT",
  url: `/commands/${$(".guild-avatar").prop("alt")}/kick`,
  data: {arr:paliases},
})
  await kick.pop();
  kick = paliases
Toastify({
 text: "Success 👌",
  offset: { x: 350, y: 60 },
 duration: 2500
}).showToast();
$(".formselect__multi-value").remove()
$("#react-select-13-input").val(null); 
$("#react-select-13-input").css("width",2);
$(".showedit").hide()
})
$("#react-select-13-input").bind('keypress', function() {
add()
})
})
//-------------------------editmute--------------------------------
$(".editmute").unbind("click").click( async function(){//edlit moveme
mute.forEach((cmd)=>{
$(`<div class="css-1rhbuit-multiValue formselect__multi-value">
  <div class="css-12jo7m5 formselect__multi-value__label">${cmd}</div>
  <div class="css-xb97g8 formselect__multi-value__remove">
    <svg
      height="14"
      width="14"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      class="css-19bqh2r"
    >
      <path
        d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
      ></path>
    </svg>
  </div>
</div>
`).insertBefore( ".shorts1" )
})
$(".formselect__multi-value__remove").on("click",function(){//remove this
$(this).parent().remove()
})
$(".css-1wy0on6").unbind("click").click( async function(){//remove all
$(".formselect__multi-value").remove()
})
$(".showedit").fadeIn(150)
$(".commandSave .btn").unbind("click").click( async function(){
var paliases = $('.css-12jo7m5').map(function(){ return $(this).text().replace(" ","") }).get()
await $.ajax({
  type: "PUT",
  url: `/commands/${$(".guild-avatar").prop("alt")}/mute`,
  data: {arr:paliases},
})
  await mute.pop();
  mute = paliases
Toastify({
 text: "Success 👌",
  offset: { x: 350, y: 60 },
 duration: 2500
}).showToast();
$(".formselect__multi-value").remove()
$("#react-select-13-input").val(null); 
$("#react-select-13-input").css("width",2);
$(".showedit").hide()
})
$("#react-select-13-input").bind('keypress', function() {
add()
})
})
//-------------------------editunmute--------------------------------
$(".editunmute").unbind("click").click( async function(){//edlit moveme
unmute.forEach((cmd)=>{
$(`<div class="css-1rhbuit-multiValue formselect__multi-value">
  <div class="css-12jo7m5 formselect__multi-value__label">${cmd}</div>
  <div class="css-xb97g8 formselect__multi-value__remove">
    <svg
      height="14"
      width="14"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      class="css-19bqh2r"
    >
      <path
        d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
      ></path>
    </svg>
  </div>
</div>
`).insertBefore( ".shorts1" )
})
$(".formselect__multi-value__remove").on("click",function(){//remove this
$(this).parent().remove()
})
$(".css-1wy0on6").unbind("click").click( async function(){//remove all
$(".formselect__multi-value").remove()
})
$(".showedit").fadeIn(150)
$(".commandSave .btn").unbind("click").click( async function(){
var paliases = $('.css-12jo7m5').map(function(){ return $(this).text().replace(" ","") }).get()
await $.ajax({
  type: "PUT",
  url: `/commands/${$(".guild-avatar").prop("alt")}/unmute`,
  data: {arr:paliases},
})
  await unmute.pop();
  unmute = paliases
Toastify({
 text: "Success 👌",
  offset: { x: 350, y: 60 },
 duration: 2500
}).showToast();
$(".formselect__multi-value").remove()
$("#react-select-13-input").val(null); 
$("#react-select-13-input").css("width",2);
$(".showedit").hide()
})
$("#react-select-13-input").bind('keypress', function() {
add()
})
})
//-------------------------editclear--------------------------------
$(".editclear").unbind("click").click( async function(){//edlit moveme
clear.forEach((cmd)=>{
$(`<div class="css-1rhbuit-multiValue formselect__multi-value">
  <div class="css-12jo7m5 formselect__multi-value__label">${cmd}</div>
  <div class="css-xb97g8 formselect__multi-value__remove">
    <svg
      height="14"
      width="14"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      class="css-19bqh2r"
    >
      <path
        d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
      ></path>
    </svg>
  </div>
</div>
`).insertBefore( ".shorts1" )
})
$(".formselect__multi-value__remove").on("click",function(){//remove this
$(this).parent().remove()
})
$(".css-1wy0on6").unbind("click").click( async function(){//remove all
$(".formselect__multi-value").remove()
})
$(".showedit").fadeIn(150)
$(".commandSave .btn").unbind("click").click( async function(){
var paliases = $('.css-12jo7m5').map(function(){ return $(this).text().replace(" ","") }).get()
await $.ajax({
  type: "PUT",
  url: `/commands/${$(".guild-avatar").prop("alt")}/clear`,
  data: {arr:paliases},
})
  await clear.pop();
  clear = paliases
Toastify({
 text: "Success 👌",
  offset: { x: 350, y: 60 },
 duration: 2500
}).showToast();
$(".formselect__multi-value").remove()
$("#react-select-13-input").val(null); 
$("#react-select-13-input").css("width",2);
$(".showedit").hide()
})
$("#react-select-13-input").bind('keypress', function() {
add()
})
})
//-------------------------editlock--------------------------------
$(".editlock").unbind("click").click( async function(){//edlit moveme
lock.forEach((cmd)=>{
$(`<div class="css-1rhbuit-multiValue formselect__multi-value">
  <div class="css-12jo7m5 formselect__multi-value__label">${cmd}</div>
  <div class="css-xb97g8 formselect__multi-value__remove">
    <svg
      height="14"
      width="14"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      class="css-19bqh2r"
    >
      <path
        d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
      ></path>
    </svg>
  </div>
</div>
`).insertBefore( ".shorts1" )
})
$(".formselect__multi-value__remove").on("click",function(){//remove this
$(this).parent().remove()
})
$(".css-1wy0on6").unbind("click").click( async function(){//remove all
$(".formselect__multi-value").remove()
})
$(".showedit").fadeIn(150)
$(".commandSave .btn").unbind("click").click( async function(){
var paliases = $('.css-12jo7m5').map(function(){ return $(this).text().replace(" ","") }).get()
await $.ajax({
  type: "PUT",
  url: `/commands/${$(".guild-avatar").prop("alt")}/lock`,
  data: {arr:paliases},
})
  await lock.pop();
  lock = paliases
Toastify({
 text: "Success 👌",
  offset: { x: 350, y: 60 },
 duration: 2500
}).showToast();
$(".formselect__multi-value").remove()
$("#react-select-13-input").val(null); 
$("#react-select-13-input").css("width",2);
$(".showedit").hide()
})
$("#react-select-13-input").bind('keypress', function() {
add()
})
})
//-------------------------editunlock--------------------------------
$(".editunlock").unbind("click").click( async function(){//edlit moveme
unlock.forEach((cmd)=>{
$(`<div class="css-1rhbuit-multiValue formselect__multi-value">
  <div class="css-12jo7m5 formselect__multi-value__label">${cmd}</div>
  <div class="css-xb97g8 formselect__multi-value__remove">
    <svg
      height="14"
      width="14"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      class="css-19bqh2r"
    >
      <path
        d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
      ></path>
    </svg>
  </div>
</div>
`).insertBefore( ".shorts1" )
})
$(".formselect__multi-value__remove").on("click",function(){//remove this
$(this).parent().remove()
})
$(".css-1wy0on6").unbind("click").click( async function(){//remove all
$(".formselect__multi-value").remove()
})
$(".showedit").fadeIn(150)
$(".commandSave .btn").unbind("click").click( async function(){
var paliases = $('.css-12jo7m5').map(function(){ return $(this).text().replace(" ","") }).get()
await $.ajax({
  type: "PUT",
  url: `/commands/${$(".guild-avatar").prop("alt")}/unlock`,
  data: {arr:paliases},
})
  await unlock.pop();
  unlock = paliases
Toastify({
 text: "Success 👌",
  offset: { x: 350, y: 60 },
 duration: 2500
}).showToast();
$(".formselect__multi-value").remove()
$("#react-select-13-input").val(null); 
$("#react-select-13-input").css("width",2);
$(".showedit").hide()
})
$("#react-select-13-input").bind('keypress', function() {
add()
})
})
