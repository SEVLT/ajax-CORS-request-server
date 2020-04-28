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
//1