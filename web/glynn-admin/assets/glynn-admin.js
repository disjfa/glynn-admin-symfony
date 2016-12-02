var jQuery = require('jquery');
window.$ = window.jQuery = jQuery;

var Tether = require('tether');
window.Tether = Tether;

require('bootstrap/dist/js/bootstrap.js');
require('chart.js');


var Vue = require('vue');
var VueResource = require('vue-resource');

Vue.use(VueResource);

new Vue({
    el: '#base',

    components: {
    }
});
