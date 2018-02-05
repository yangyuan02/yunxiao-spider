var request = require("request")

var fs = require("fs")

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

    request(url).on("response", res => {
        var totalSize = res.headers['content-length']
        res.on("data", data => {
            downloadSize += data.length
            pb.render({ completed: downloadSize, total: totalSize });
        })
    }).pipe(stream).on('close', callback)
}

var videos = [
    {
        name: '第1讲 集合（一）',
        url: 'http://yx-kbs-ks3.haofenshu.com/videos/43d65926ecf90929950c9c80311ee094.mp4'
    },
    {
        name: '第2讲 集合（二）',
        url: 'http://yx-kbs-ks3.haofenshu.com/videos/7880f719be68f57c1e871f8a9592364f.mp4'
    }
]

for(var i = 0; i < videos.length; i++){
    bagpipe.push(downloadFile,videos[i].url, 'videos/' + videos[i].name.replace(/\s+/g, "") + '.mp4', function () {
    
    })
}

