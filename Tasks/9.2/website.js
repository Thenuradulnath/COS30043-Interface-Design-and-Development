const Login = {
    data() {
      return {
        username: '',
        password: '',
        errorMessage: ''
      };
    },
    methods: {
      login() {
        if (this.username === 'admin' && this.password === 'admin123') {
          localStorage.setItem('authenticated', 'true');
          this.$router.push('/dashboard');
        } else {
          this.errorMessage = 'Incorrect username or password';
        }
      }
    },
    template: `
      <div>
        <h2>Login</h2>
        <div class="form-group">
          <label for="username">Username:</label>
          <input v-model="username" id="username" class="form-control">
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input v-model="password" id="password" type="password" class="form-control">
        </div>
        <button @click="login" class="btn btn-primary">Login</button>
        <p class="text-danger">{{ errorMessage }}</p>
      </div>
    `
  };
  
  const ViewRecords = {
    data() {
      return {
        records: [
          { id: 1, name: 'Record 1', value: 'Value 1' },
          { id: 2, name: 'Record 2', value: 'Value 2' },
          // Add more sample records as needed
        ],
        currentPage: 1,
        pageSize: 3,
      };
    },
    computed: {
      pageCount() {
        return Math.ceil(this.records.length / this.pageSize);
      },
      paginatedData() {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = start + this.pageSize;
        return this.records.slice(start, end);
      }
    },
    methods: {
      setPage(pageNumber) {
        this.currentPage = pageNumber;
      }
    },
    template: `
      <div>
        <h2>View Records</h2>
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="record in paginatedData" :key="record.id">
              <td>{{ record.id }}</td>
              <td>{{ record.name }}</td>
              <td>{{ record.value }}</td>
            </tr>
          </tbody>
        </table>
        <nav aria-label="Page navigation">
          <ul class="pagination">
            <li class="page-item" :class="{ disabled: currentPage <= 1 }">
              <a class="page-link" href="#" @click.prevent="setPage(currentPage - 1)">Previous</a>
            </li>
            <li class="page-item" v-for="page in pageCount" :key="page" :class="{ active: currentPage === page }">
              <a class="page-link" href="#" @click.prevent="setPage(page)">{{ page }}</a>
            </li>
            <li class="page-item" :class="{ disabled: currentPage >= pageCount }">
              <a class="page-link" href="#" @click.prevent="setPage(currentPage + 1)">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    `
  };
  
  const InsertRecord = {
    data() {
      return {
        newRecord: { id: '', name: '', value: '' }
      };
    },
    methods: {
      insert() {
        if (this.newRecord.name && this.newRecord.value) {
          this.newRecord.id = Date.now();
          // In real application, you'd send the new record to the server
          alert(`Inserted: ${JSON.stringify(this.newRecord)}`);
          this.newRecord = { id: '', name: '', value: '' };
        } else {
          alert('Please provide valid name and value.');
        }
      }
    },
    template: `
      <div>
        <h2>Insert Record</h2>
        <div class="form-group">
          <label for="name">Name:</label>
          <input v-model="newRecord.name" id="name" class="form-control">
        </div>
        <div class="form-group">
          <label for="value">Value:</label>
          <input v-model="newRecord.value" id="value" class="form-control">
        </div>
        <button @click="insert" class="btn btn-primary">Insert</button>
      </div>
    `
  };
  
  const UpdateRecord = {
    data() {
      return {
        records: [
          { id: 1, name: 'Record 1', value: 'Value 1' },
          { id: 2, name: 'Record 2', value: 'Value 2' },
          // Add more sample records as needed
        ],
        selectedRecord: null,
        updatedValue: ''
      };
    },
    methods: {
      selectRecord(record) {
        this.selectedRecord = record;
        this.updatedValue = record.value;
      },
      update() {
        if (this.selectedRecord && this.updatedValue) {
          this.selectedRecord.value = this.updatedValue;
          alert(`Updated: ${JSON.stringify(this.selectedRecord)}`);
          this.selectedRecord = null;
          this.updatedValue = '';
        } else {
          alert('Please select a record and provide a new value.');
        }
      }
    },
    template: `
      <div>
        <h2>Update Record</h2>
        <div class="form-group">
          <label for="record">Select Record:</label>
          <select v-model="selectedRecord" @change="selectRecord(selectedRecord)" class="form-control">
            <option v-for="record in records" :key="record.id" :value="record">{{ record.name }}</option>
          </select>
        </div>
        <div class="form-group" v-if="selectedRecord">
          <label for="updatedValue">New Value:</label>
          <input v-model="updatedValue" id="updatedValue" class="form-control">
        </div>
        <button @click="update" class="btn btn-primary" v-if="selectedRecord">Update</button>
      </div>
    `
  };
  
  const DeleteRecord = {
    data() {
      return {
        records: [
          { id: 1, name: 'Record 1', value: 'Value 1' },
          { id: 2, name: 'Record 2', value: 'Value 2' },
          // Add more sample records as needed
        ],
        selectedRecord: null
      };
    },
    methods: {
      selectRecord(record) {
        this.selectedRecord = record;
      },
      remove() {
        if (this.selectedRecord) {
          const index = this.records.indexOf(this.selectedRecord);
          this.records.splice(index, 1);
          alert(`Deleted: ${JSON.stringify(this.selectedRecord)}`);
          this.selectedRecord = null;
        } else {
          alert('Please select a record to delete.');
        }
      }
    },
    template: `
      <div>
        <h2>Delete Record</h2>
        <div class="form-group">
          <label for="record">Select Record:</label>
          <select v-model="selectedRecord" @change="selectRecord(selectedRecord)" class="form-control">
            <option v-for="record in records" :key="record.id" :value="record">{{ record.name }}</option>
          </select>
        </div>
        <button @click="remove" class="btn btn-danger" v-if="selectedRecord">Delete</button>
      </div>
    `
  };
  
  const Dashboard = {
    template: `
      <div>
        <h2>Dashboard</h2>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link" :class="{ active: currentTab === 'view' }" href="#" @click.prevent="currentTab = 'view'">View</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ active: currentTab === 'insert' }" href="#" @click.prevent="currentTab = 'insert'">Insert</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ active: currentTab === 'update' }" href="#" @click.prevent="currentTab = 'update'">Update</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ active: currentTab === 'delete' }" href="#" @click.prevent="currentTab = 'delete'">Delete</a>
          </li>
        </ul>
        <div class="tab-content mt-3">
          <div v-show="currentTab === 'view'">
            <view-records></view-records>
          </div>
          <div v-show="currentTab === 'insert'">
            <insert-record></insert-record>
          </div>
          <div v-show="currentTab === 'update'">
            <update-record></update-record>
          </div>
          <div v-show="currentTab === 'delete'">
            <delete-record></delete-record>
          </div>
        </div>
      </div>
    `,
    data() {
      return {
        currentTab: 'view'
      };
    }
  };
  
  const routes = [
    { path: '/login', component: Login },
    { path: '/dashboard', component: Dashboard }
  ];
  
  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
  });
  
  // Navigation Guard to protect the Dashboard route
  router.beforeEach((to, from, next) => {
    const authenticated = localStorage.getItem('authenticated');
    if (to.path === '/dashboard' && !authenticated) {
      next('/login');
    } else {
      next();
    }
  });
  
  const app = Vue.createApp({});
  app.component('view-records', ViewRecords);
  app.component('insert-record', InsertRecord);
  app.component('update-record', UpdateRecord);
  app.component('delete-record', DeleteRecord);
  app.use(router);
  app.mount('#app');
  