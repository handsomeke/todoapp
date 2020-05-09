var bodyParser = require('body-parser')

var urlencodeParser = bodyParser.urlencoded({
    extended: false
});

var data = [{
        item: "欢迎大家来到hello world!"
    },
    {
        item: "欢迎大家来到hello world!123123"
    },
    {
        item: "欢迎大家来到hello world!1234324325"
    }
]


module.exports = function (app) {
    app.get('/todo', function (req, res) {
        res.render('todo', {
            todos: data
        })
    })

    app.post('/todo', urlencodeParser, function (req, res) {
        data.push(req.body)
    })

    app.delete('/todo/:item', function (req, res) {
        data = data.filter(function (todo) {
            return req.params.item !== todo.item;
        })

        res.json(data);
    })
}