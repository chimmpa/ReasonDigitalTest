const axios = require('axios');

exports.getAll = (req, res, next) => {
    axios.get('https://dinotest.wpengine.com/wp-json/wp/v2/posts')
    .then(response => {
        console.log(response.data);
        res.status(200).json({
            data: response.data
        })
    })
    .catch(err =>{
        console.log(err);
    });
}