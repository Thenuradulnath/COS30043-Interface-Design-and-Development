const StudentMarks = {
    data() {
      return {
        studMarks: [
          { name: "Amelia", mark: 87 },
          { name: "Benjamin", mark: 62 },
          { name: "Chloe", mark: 95 },
          { name: "David", mark: 78 },
          { name: "Emily", mark: 54 },
          { name: "Faisal", mark: 91 },
          { name: "Gabriella", mark: 82 },
          { name: "Henry", mark: 48 },
          { name: "Isabella", mark: 74 },
          { name: "Jack", mark: 89 },
          { name: "Kaya", mark: 39 },
          { name: "Liam", mark: 69 },
          { name: "Maya", mark: 99 },
          { name: "Noah", mark: 71 },
          { name: "Olivia", mark: 85 },
          { name: "Penelope", mark: 59 },
          { name: "Quentin", mark: 93 },
          { name: "Riley", mark: 80 },
          { name: "Sophia", mark: 65 },
          { name: "Thomas", mark: 42 },
          { name: "Uma", mark: 76 },
          { name: "Vanessa", mark: 97 },
          { name: "William", mark: 52 },
          { name: "Xavier", mark: 84 },
          { name: "Yasmin", mark: 67 },
        ],
        currentPage: 1,
        pageSize: 3,
      };
    },
    computed: {
      pageCount() {
        return Math.ceil(this.studMarks.length / this.pageSize);
      },
      paginatedData() {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = start + this.pageSize;
        return this.studMarks.slice(start, end);
      },
    },
    methods: {
      Callback(pageNumber) {
        this.currentPage = pageNumber;
      },
    },
    template: `
      <div>
        <h2>Student Marks</h2>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Mark</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in paginatedData" :key="student.name">
              <td>{{ student.name }}</td>
              <td>{{ student.mark }}</td>
            </tr>
          </tbody>
        </table>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item" :class="{ disabled: currentPage <= 1 }">
              <a class="page-link" href="#" aria-label="Previous" @click.prevent="Callback(currentPage - 1)">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item" v-for="number in pageCount" :class="{ active: number === currentPage }" :key="number">
              <a class="page-link" href="#" @click.prevent="Callback(number)">{{ number }}</a>
            </li>
            <li class="page-item" :class="{ disabled: currentPage >= pageCount }">
              <a class="page-link" href="#" aria-label="Next" @click.prevent="Callback(currentPage + 1)">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
        <p class="mt-3">Current Page: {{ currentPage }}</p>
      </div>
    `,
  };
  
  const NameTest = {
    data() {
      return {
        strName: "",
      };
    },
    template: `
      <div>
        <label for="Username">Please enter your name:</label>
        <input v-model="strName" id="Username">
        <p>Hello {{ strName === 'thenura' ? 'awesome' : 'wrong' }}!</p>
      </div>
    `,
  };
  
  const StatusPosts = {
    data() {
      return {
        statPosts: [],
        strStatus: "",
      };
    },
    methods: {
      add() {
        this.statPosts.unshift(this.strStatus);
        this.strStatus = "";
      },
      remove(index) {
        this.statPosts.splice(index, 1);
      },
    },
    template: `
      <div>
        <h1>Status Post</h1>
        <div class="container">
          <div class="form-group">
            <label for="strStatus" class="form-check-label">Status: </label>
            <input class="form-control" v-model="strStatus" type="text" placeholder="Enter your status here">
            <button type="button" @click="add" class="btn btn-primary mt-2">Post</button>
          </div>
          <div class="container">
            <div v-if="statPosts.length > 0">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">&nbsp;</th>
                    <th scope="col">Status</th>
                    <th scope="col">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(str, index) in statPosts" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ str }}</td>
                    <td>
                      <button @click="remove(index)" class="btn btn-primary" type="button">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `,
  };
  
  const routes = [
    { path: '/', component: StudentMarks },
    { path: '/name-test', component: NameTest },
    { path: '/posts', component: StatusPosts },
  ];
  
  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
  });
  
  const app = Vue.createApp({});
  app.use(router);
  app.mount('#app');
  