var request = require("request")

var fs = require("fs")

var options = {
	url : 'http://tiku.yunxiao.com/api/course/categorys',//获取视频分类
	headers : {
		'User-Agent' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36',
		'Host' : 'tiku.yunxiao.com',
		'Referer' : 'http://tiku.yunxiao.com/admin/course',
		'Cookie' : 'tiku-user-info=%7B%22id%22%3A2437688687558656%2C%22name%22%3A%22%E5%88%98%E7%8E%89%22%2C%22schoolId%22%3A16696%2C%22schoolName%22%3A%22%E6%B1%9F%E8%8B%8F%E7%9C%81%E7%81%8C%E4%BA%91%E9%AB%98%E7%BA%A7%E4%B8%AD%E5%AD%A6%22%2C%22role%22%3A%22%E6%95%99%E5%B8%88%22%2C%22grade%22%3A%22%E9%AB%98%E4%B8%80%22%2C%22avatar%22%3A%22%22%2C%22exp%22%3A%222018-02-16T05%3A27%3A59.842Z%22%2C%22userId%22%3A2437688687558656%7D; tiku-session-id=6719da848e0ec864081ea55f28ff77ab197f90829085338f8d5b7871aeae4f97625ed41fcb1f04feb0fdb03a12a72524df56037133897c0fdcfac9095cddbb809b94e81b7abef06c6ea078abb6323b24eb48cdd66017e0f40ba5240a4ed1f41c19377aa949d3218a74f065bbfcf3b9562427f55428ebe24d438a441abe14a44812daf6398b14ac86aa551709d688f3af98040e3c7848437be5b8add9859fd128523a1fe7fefa1ee6c11a63a9ef77acc4fe867510b947cbddd98bc31ea69b6b5087f74383343f507142197c37b36ee0cba4549e92a26df2843520bab807855d9424f964d4177c2a0323246899ea849227c2dff535badd16b92e5e90dc477a1e6a3376f0562ad8de7b35b1bca7b9b6ce3086745219b8e65388348c3aac9ebe2024c1945c15f0d98501e10b65498fa9eaeeebb16eacb5584cb88f5c407f7a3b1cac; tiku-api-key=6719da848e0ec864081ea55f28ff77ab197f90829085338f8d5b7871aeae4f976d4dc058f9749edfcbff02b6dc848ed0a8368a3552a005cdce3b4fe8d865bdde0f9d251473353d7c9b2f1377a0cdb9e456bcaf98782e39980a09a6d9a891939b4b09b1de86d5c88d95d8e76a5c9decd65d7c6a806660754b1a0a63cd2f9b2c4c5cf0a2ee5af36f27fcc38d824a46957b52ded5d6ba09f25acaefb6a9057b0dc80228ffcda080c6816c2dfc0bb60793010fcf51ce887fd9eafdb36a4ac0755266; tiku-theme=hfs-teacher; Hm_lvt_d9ce2e93fbe3e9d6109be3910c433855=1517562415,1517562419,1517562421,1517564731; Hm_lpvt_d9ce2e93fbe3e9d6109be3910c433855=1517564731',
		'Accept' : 'application/json, text/plain, */*'
	}
}

function callback(error, response, body) {
	if (!error && response.statusCode == 200) {
		var info = JSON.parse(body)
		fs.appendFile('coures_categorys/data.txt',JSON.stringify(info,null,4),(err) =>{
			if(err){
				console.log(err)
			}
		})
		console.log(info)
	}
  }
  
  request(options, callback);