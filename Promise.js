//promise  then catch
function pro1() {
    return new Promise(function (resolve,reject) {
        if(true){
            resolve('操作成功1');
        }else{
            reject('操作失败1');
        }
    });
}

function pro2() {
    return new Promise(function (resolve,reject) {
        if(true){
            resolve('操作成功2');
        }else{
            reject('操作失败2');
        }
    });
}

function pro3() {
    return new Promise(function (resolve,reject) {
        if(true){
            resolve('操作成功3');
        }else{
            reject('操作失败3');
        }
    });
}




pro1().then(function (data) {
    console.log(data);
    return pro2();
}).then(function (data) {
    console.log(data);
    return pro3();
}).then(function (data) {
    console.log(data);
}).catch(function (data) {
    console.log(data);
});


//all  等三个函数都执行完毕才会执行then，每个函数的返回值放入results数组中

Promise.all([pro1(),pro2(),pro3()])
        .then(function (results) {
            console.log(results);
        });


//race的用法  谁最先完成则返回谁的值
Promise.race([pro2(),pro2(),pro3()])
        .then(function (results) {
            console.log(results)
        });


setTimeout(function () {
    console.log('1');
},10000);
setTimeout(function () {
    console.log('2');
},10000);


