const app = Vue.createApp({
    data() {
      return {
        posts: []
      };
    },
    mounted() {
      $.getJSON("https://jsonplaceholder.typicode.com/posts", (data) => {
        this.posts = data;
      });
    }
  });
  
  app.mount(".app");
  