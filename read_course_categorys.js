var request = require("request")

var fs = require("fs")

var courseCategory = JSON.parse(fs.readFileSync('coures_categorys/data.txt','utf-8'))//读取视频分类id

var result = []

for(var key in courseCategory){
    for(var key1 in courseCategory[key].children){
        for(var key2 in courseCategory[key].children[key1].children){
            for(var key3 in courseCategory[key].children[key1].children[key2].children){
                var obj  = {
                    name : key + '-' + key1 + '-' + key2 + '-' + key3,
                    id :courseCategory[key].children[key1].children[key2].children[key3].id
                }
                result.push(obj)
            }
        }
    }
}
console.log(result)

