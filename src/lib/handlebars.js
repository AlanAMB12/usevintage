const {format} = require('timeago.js');


const helpers = {};
//tiempo atras publicado
helpers.timeago = (timestamp) =>{
    return format(timestamp);
};

module.exports = helpers;
