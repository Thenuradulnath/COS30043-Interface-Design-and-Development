const app = Vue.createApp({
  data() {
      return {
          units: [
              { code: "ICT10001", unit: "Problem Solving with ICT", creditPoints: 12.5, type: "Core" },
              { code: "COS10005", unit: "Web Development", creditPoints: 12.5, type: "Core" },
              { code: "INF10003", unit: "Introduction to Business Information Systems", creditPoints: 12.5, type: "Core" },
              { code: "INF10002", unit: "Database Analysis and Design", creditPoints: 12.5, type: "Core" },
              { code: "COS10009", unit: "Introduction to Programming", creditPoints: 12.5, type: "Core" },
              { code: "INF30029", unit: "Information Technology Project Management", creditPoints: 12.5, type: "Core" },
              { code: "ICT30005", unit: "Professional Issues in Information Technology", creditPoints: 12.5, type: "Core" },
              { code: "ICT30001", unit: "Information Technology Project", creditPoints: 12.5, type: "Core" }
          ],
          searchCode: '',
          searchDesc: '',
          typeFilter: 'all'
      };
  },
  computed: {
      filteredUnits() {
          return this.units.filter(unit => {
              return (this.searchCode === '' || unit.code.toLowerCase().includes(this.searchCode.toLowerCase())) &&
                  (this.searchDesc === '' || unit.unit.toLowerCase().includes(this.searchDesc.toLowerCase())) &&
                  (this.typeFilter === 'all' || unit.type === this.typeFilter)
          });
      }
  },
  methods: {
      clearFilters() {
          this.searchCode = '';
          this.searchDesc = '';
          this.typeFilter = 'all';
      }
  }
});

app.component('app-lookup2', {
  template: `
      <div>
          <h1>Unit Information</h1>
          <div>
              <label for="searchCode">Search by Code:</label>
              <input type="text" id="searchCode" v-model="searchCode">
          </div>
          <div>
              <label for="searchDesc">Search by Description:</label>
              <input type="text" id="searchDesc" v-model="searchDesc">
          </div>
          <div>
              <label for="typeFilter">Filter by Type:</label>
              <select id="typeFilter" v-model="typeFilter">
                  <option value="all">All</option>
                  <option value="Core">Core</option>
              </select>
          </div>
          <button @click="clearFilters">Clear Filters</button>
          <table>
              <thead>
                  <tr>
                      <th>Unit Code</th>
                      <th>Unit</th>
                      <th>Credit Points</th>
                      <th>Type</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="unit in filteredUnits" :key="unit.code">
                      <td><a :href="'#/unit/' + unit.code">{{ unit.code }}</a></td>
                      <td>{{ unit.unit }}</td>
                      <td>{{ unit.creditPoints }}</td>
                      <td>{{ unit.type }}</td>
                  </tr>
              </tbody>
          </table>
      </div>
  `
});

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
      {
          path: '/unit/:id',
          component: Unit
      }
  ]
});

app.use(router);
app.mount('#app');
