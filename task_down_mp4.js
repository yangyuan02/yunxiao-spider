var exec = require('child_process').exec;//执行shell命令

var fs = require("fs")

var files = fs.readdirSync("coures_categorys").slice(2)//读取文件夹名字

function task1(){
    var promise = new Promise((resolve,reject)=>{
        exec("node read_course_categorys.js",(err,stdout,stderr)=>{
            if (err) {
                throw new Error(err)

            }
            resolve(stdout)
        })
    })
    return promise
}

function task2(){
    var promise = new Promise((resolve,reject)=>{
        for(let i = 0;i<files.length;i++){
            exec(`node getVideosList ${files[i]}`,(err,stdout,stderr)=>{
                if (err) {
                    throw new Error(err)
    
                }
                resolve(stdout)
            })
        }
    })
    return promise
}

function task3(){
    var promise = new Promise((resolve,reject)=>{
        for(let i = 0;files.length.i++;){
            exec(`node download_mp4 ${files[i]}`,(err,stdout,stderr)=>{
                if (err) {
                    throw new Error(err)
    
                }
                resolve(stdout)
            })
        }
    })
    return promise
}

// task1().then((data)=>{return task2()})
//        .then((data)=>{return task3()})
//        .then((data)=>{console.log(data)})

// task1()

task2().then((data)=>{
    return task3()
}).then((data)=>{
    console.log(data)
})