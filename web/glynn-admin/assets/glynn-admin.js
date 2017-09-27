var jQuery = require('jquery');
window.$ = window.jQuery = jQuery;

var Popper = require('popper.js');
window.Popper = Popper;

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
