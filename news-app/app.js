const request = require('request');
const chalk = require('chalk');
const yargs = require('yargs');
const urlData = `http://newsapi.org/v2/top-headlines?${yargs.argv.q ? `q=${yargs.argv.q}&` : ""}${yargs.argv.lang ? `language=${yargs.argv.lang}&` : ""}${yargs.argv.country ? `country=${yargs.argv.country}&` : ""}apiKey=81895a771a294e1284b5c1d18d87f361`;
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
        if (data.articles) {
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