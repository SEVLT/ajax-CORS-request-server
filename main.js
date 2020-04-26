button.addEventListener('click', () => {
    let request = new XMLHttpRequest();
    //请求端口为 8002 的网页
    request.open('GET', 'http://localhost:8002/xxx');
    request.send();
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log('请求响应完毕');
            if (request.status >= 200 && request.status < 300) {
                console.log('请求成功');
                console.log('response.responseText 的类型为：');
                console.log(typeof request.responseText);
                let string = request.responseText;
                //把 response.responseText 类型转换为 Object
                let object = window.JSON.parse(string);
                console.log('response.responseText 转换后的类型为：');
                console.log(typeof object);
            } else if (request.status >= 400) {
                console.log('请求失败');
            }
        }
    };
});

// window.jQuery = function(nodeOrSelector){
//   let nodes = {}
//   nodes.addClass = function(){}
//   nodes.html = function(){}
//   return nodes
// }
// window.$ = window.jQuery

// window.Promise = function(fn){
//   // ...
//   return {
//     then: function(){}
//   }
// }

// window.jQuery.ajax = function({url, method, body, headers}){
//   return new Promise(function(resolve, reject){
//     let request = new XMLHttpRequest()
//     request.open(method, url) // 配置request
//     for(let key in headers) {
//       let value = headers[key]
//       request.setRequestHeader(key, value)
//     }
//     request.onreadystatechange = ()=>{
//       if(request.readyState === 4){
//         if(request.status >= 200 && request.status < 300){
//           resolve.call(undefined, request.responseText)
//         }else if(request.status >= 400){
//           reject.call(undefined, request)
//         }
//       }
//     }
//     request.send(body)
//   })
// }

// myButton.addEventListener('click', (e)=>{
//   let promise = window.jQuery.ajax({
//     url: '/xxx',
//     method: 'get',
//     headers: {
//       'content-type':'application/x-www-form-urlencoded',
//       'frank': '18'
//     }
//   })

//   promise.then(
//     (text)=>{console.log(text)},
//     (request)=>{console.log(request)}
//   )

// })
