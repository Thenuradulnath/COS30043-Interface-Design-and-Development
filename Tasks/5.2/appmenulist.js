const app = Vue.createApp({ });

app.component('mymenu', {
    props: ['menu'],
    template:   `
        <ul class="list-group">
            <li class="list-group-item" v-for="(item, index) in menu" :key="index">{{ item }}</li>
        </ul>
                `
});

app.mount('#app');
