const express = require('express');
const app = express();
const fs = require('fs');
//const util = require('util');
const pngitxt = require('png-itxt')

fs.createReadStream('data/input.png')
    .pipe(pngitxt.get("Description",function (err, data) {
        if (!err && data) {
            console.log(data.value);
        }
    }))

const preloadCount = 3;

app.get('/', function (req, res) {
    console.log("Get");
    fs.readFile('index.html', 'utf8', function(err, data) {
        /*
        fs.readdir( 'data/pages', (error, files) => { 
            if (err) console.log(err);
            //console.log("Data:\n"+data);
            //console.log(typeof(data));
            data=data.replace(/{{{{{Insert Here}}}}}/g,files.length.toString())

            // Preload The Cache
            let pcvar = ""
            let fetchers = new Array
            for (let i = 1; i<=preloadCount; i++) {
                let fname = i.toString()+'.html';
                console.log(fname);
                fetchers[i-1] = util.promisify(fs.readFile) ('data/pages/'+fname, 'utf8')
                .then((dataa) => {
                    pcvar+='"./pages/'+fname+'":`'+dataa+'`,\n'
                    console.log("\n\nNew\n");
                })
            }
            
            Promise.all(fetchers).then(() => {
                console.log("All Fetched");
                data=data.replace(/{{Preload Here}}/g,pcvar)
                //console.log("Data replaced:\n"+data);
                res.send(data);
            })

        })
        */
        if (err) {
            console.log(err);
        } else {
            res.send(data);
        }
    });
});

//app.use('/node_modules',express.static(__dirname + '/node_modules'));
app.use(express.static('data'));


//var server = 
app.listen(5100);