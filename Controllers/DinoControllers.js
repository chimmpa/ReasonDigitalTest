const axios = require('axios');

exports.getAll = (req, res, next) => {
    // Get data from dinotest
    axios.get('https://dinotest.wpengine.com/wp-json/wp/v2/posts')
    .then(response => {
        // Log and send data from axios get request
        console.log(response.data);
        res.status(200).json({
            data: response.data
        })
    })
    .catch(err =>{
        console.log(err);
    });
}