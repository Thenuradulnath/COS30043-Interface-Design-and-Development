const app = Vue.createApp({
  data() {
      return {
          studMarks:
              [
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
                  { name: "Yasmin", mark: 67 }
              ],
          currentPage: 1,
          pageSize: 3,
      };
  },
  computed: {
      pageCount() {
          return Math.ceil(this.studMarks.length / this.pageSize)
      },
      paginatedData() {
          const start = (this.currentPage - 1) * this.pageSize
          const end = start + this.pageSize
          return this.studMarks.slice(start, end)
      },
  },
  methods: {
      Callback(pageNumber) {
          this.currentPage = pageNumber
      }
  },
  template: `
  <div class="row">
      <div class="col-12">
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
          <!-- Pagination component -->
          <vuejs-paginate
              :page-count="pageCount"
              :container-class="'pagination'"
              :click-handler="clickCallback"
              :prev-text="'Prev'"
              :next-text="'Next'"
              :active-class="'active'"
              :page-class="'page-item'"
              :page-link-class="'page-link'"
              :prev-class="'page-item'"
              :next-class="'page-item'"
              :prev-link-class="'page-link'"
              :next-link-class="'page-link'"
          ></vuejs-paginate>
          <!-- Manual pagination navigation -->
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
  </div>
  `
});

app.mount('#app');
