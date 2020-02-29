const request = require('request');
const chalk = require('chalk');
const yargs = require('yargs');
// const removespaces = (str)=>{
//     var str_="";
//     for(var i=0;i<str.length;i++){
//         if(str[i]==" "){
//             str_+="";
//         }else{
//             str_+=str[i];
//         }
//     }
//     console.log(str_);
//     return str_;
// }
const urlData = `http://newsapi.org/v2/everything?${yargs.argv.q ? `q=${yargs.argv.q}&` : ""}${yargs.argv.lang ? `language=${yargs.argv.lang}&` : ""}${yargs.argv.country ? `country=${yargs.argv.country}&` : ""}apiKey=81895a771a294e1284b5c1d18d87f361`;
const printNews = (data) => {
    console.log(chalk.bgWhite.blue.inverse(data.title));
    if (data.author != null) console.log(chalk.green.inverse(data.author));
    console.log(chalk.inverse(data.description));
    console.log(chalk.inverse(`--To read more:` + chalk.inverse.yellow(`${data.url}\n`)));
};
request({
    url: urlData,
    json: true,
}, (error, response) => {
    if (error) {
        console.log('Unable to get news');
    } else {
        const data = response.body;
        if (data.articles.length>0) {
            console.clear();
            for (var i = 0; i < data.articles.length; i++) {
                if (i != 0) {
                    console.log('===================================\n');
                }
                printNews(data.articles[i]);
            }
        } else {

            console.log('Unable to get news');
        }

    }
});
yargs.parse();