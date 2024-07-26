const app = Vue.createApp({
  data() {
      return {
          user: {
              username: "",
              password: "",
              os: "",
              phoneModel: "",
          },
          re_password: "",
          submitted: false,
          phonesData: [
              { model: "HTC 10", os: "Android" },
              { model: "Nokia 6", os: "Android" },
              { model: "Samsung Galaxy 20 Ultra", os: "Android" },
              { model: "IDD VIOS Non Windows", os: "Android" },
              { model: "iPhone X", os: "IOS" },
              { model: "iPhone Xs Max", os: "IOS" },
              { model: "iPhone 11 Pro Max", os: "IOS" },
              { model: "IDD Windows Non Android", os: "IOS" },
              { model: "HP Elite x3", os: "Windows" },
              { model: "Microsoft 950", os: "Windows" },
              { model: "Microsoft 950XL", os: "Windows" },
              { model: "IDD VIOS Non Android", os: "Windows" },
          ],
      };
  },
  computed: {
      passwordNoMatch() {
          return this.user.password !== this.re_password;
      },
      defineOS() {
          const osSet = new Set(this.phonesData.map((phone) => phone.os));
          return Array.from(osSet);
      },
  },
  methods: {
      submitForm() {
          this.submitted = true;
      },
      filterPhoneModel(os) {
          return this.phonesData
              .filter((phone) => phone.os === os)
              .map((phone) => phone.model);
      },
  },
});

app.mount("#app");
