var exec = require('child_process').exec;//执行shell命令

function pack() {
    var promise = new Promise((resolve, reject) => {
        exec('node chapters.js', (err, stdout, stderr) => {
            if (err) {
                throw new Error(err)

            }
            console.log(`正在执行node chapters`)
            resolve(stdout)
        })
    })
    return promise
}

pack().then(() => {
    exec('node getTree.js', (err, stdout, stderr) => {
        if (err) {
            throw new Error(err)
        }
        console.log(`正在执行node chapters`)
    })
}).catch((err) => {
})

