var units = [
    {code: "ICT10001", desc: "Problem Solving with ICT", cp: 12.5,type: "Core",},
    {code: "COS10005", desc: "Web Development", cp: 12.5, type: "Core" },
    {code: "INF10003", desc: "Introduction to Business Information Systems", cp: 12.5, type: "Core",},
    {code: "INF10002", desc: "Database Analysis and Design", cp: 12.5, type: "Core"},
    {code: "COS10009", desc: "Introduction to Programming", cp: 12.5, type: "Core"},
    {code: "INF30029", desc: "Information Technology Project Management", cp: 12.5, type: "Core"},
    {code: "ICT30005", desc: "Professional Issues in Information Technology",cp: 12.5, type: "Core"},
    {code: "ICT30001", desc: "Information Technology Project", cp: 12.5,type: "Core"}
  ];
    const UnitList = {
    data() {
      return { units };
    },
    template: `
          <div>
              <h2>Unit Information </h2>
              <table class="table table-striped table-hover">
              <tr>
                <th>Code</th>
                <th>Description</th>
                <th>More Info</th>
              </tr>
              <tr v-for="unit in units" >
                <td>{{ unit.code }}</td>
                <td>{{ unit.desc }}</td>
                <td><router-link :to="'/unit/' + unit.code">
                    Show Info
                </router-link></td>
              </tr>
            </table>
          </div>
      `,
  };
  

  const UnitDetails = {
    data() {
      return {
        unit: null,
      };
    },
    template: `
          <div>
              <h2>{{ unit.code }}</h2>
              <div v-if="unit">
                  <p>Code: {{ unit.code }}</p>
                  <p>Name: {{ unit.desc }}</p>
                  <p>Credit Points: {{ unit.cp }}</p>
                  <p>Type: {{ unit.type }}</p>
              </div>
          </div>
      `,
    mounted() {
      const unitCode = this.$route.params.code;
      this.unit = units.find((unit) => unit.code === unitCode);
    },
  };
  
  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
      { path: "/", component: UnitList },
      { path: "/unit/:code", component: UnitDetails },
    ],
  });
  
  const app = Vue.createApp({});
  app.use(router);
  app.mount("#app");