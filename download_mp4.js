var request = require("request")

var fs = require("fs")

var path = process.argv.splice(2).join("").replace(/\s+/g, "") //命令行传入路径参数

var videosInfo = JSON.parse(fs.readFileSync(`coures_categorys/${path}/download_url.txt`,'utf-8'))//读取视频列表

var Bagpipe = require('bagpipe');

var bagpipe = new Bagpipe(10);

// 引入工具模块
var ProgressBar = require('./progress-bar');

var totalSize = 0;
var downloadSize = 0;

var downloadFile = function(url, filename, callback) {

    // 初始化一个进度条长度为 50 的 ProgressBar 实例
    var pb = new ProgressBar('下载进度', 50);

    var stream = fs.createWriteStream(filename)

    request(url).on("response", (error, response,res) => {
        if (!error && response.statusCode == 200) {
            var totalSize = response.headers['content-length']
            res.on("data", data => {
                downloadSize += data.length
                // pb.render({ completed: downloadSize, total: totalSize });
            })
        }
        
    }).pipe(stream).on('close', callback)
}

for(var i = 0; i < videosInfo.length; i++){
    if(videosInfo[i].id=='0000'){
        fs.appendFile(`coures_categorys/error.txt`, JSON.stringify(path, null, 4), (err) => {
            if (err) {
                console.log(err)
            }
        })
    }
    bagpipe.push(downloadFile,videosInfo[i].downloadUrl, `coures_categorys/${path}/${videosInfo[i].name.replace(/\s+/g, "")}.mp4`, function () {
    
    })
}

