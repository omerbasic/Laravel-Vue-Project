
require('./bootstrap');

import VueRouter from "vue-router";
import router from "./routes";
import index from "./index.vue";

window.Vue = require('vue');
Vue.use(VueRouter);




/* Vue.component(
    'example-component', 
    require('./components/ExampleComponent.vue').default);

    
Vue.component(
    'example-2', 
    require('./components/Example2.vue').default);
 */

const app = new Vue({
    el: '#app',
    router,
    components: {
        "index": index
    }
});
