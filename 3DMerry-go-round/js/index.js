// var app = new Vue({
//     el: ".app", data: {list: [], img: ""}
//     , methods: {
//         getImges: function () {
//             var that = this;
//             for (var i = 0; i < 5; i++) {
//                 axios.get(" https://img.xjh.me/random_img.php?return=json").then(function (response) {
//                     var url = "https:" + response.data.img;
//                     that.list.push(url);
//                 }, function (err) {
//                 })
//             }
//         }
//     }
// });
//
