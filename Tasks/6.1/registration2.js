const app = Vue.createApp({
  data() {
    return {
      fname: "",
      lname: "",
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      dob: "",
      street: "",
      suburb: "",
      postcode: "",
      mobile: "",
      showTerms: false,
      errors: {},
    };
  },
  methods: {
    checkForm: function () {
      this.errors = {};
      let isValid = true;
      if (!this.fname.match(/^[a-zA-Z]+$/)) {
        this.errors.fname = "First name is not in correct formwat. It must be letters only.";
        isValid = false;
      }
      if(!this.dob){
        this.errors.dob = "Please enter your date of birth.";
        isValid=false;
      }
      if (!this.lname.match(/^[a-zA-Z]+$/)) {
        this.errors.lname = "Last name is not in correct formwat. It must be letters only.";
        isValid = false;
      }
      if (this.username.length < 3) {
        this.errors.username = "Username is not in correct formwat. It must be min 3 characters.";
        isValid = false;
      }
      if (
        this.password.length < 8 ||
        !/[A-Za-z].*[!$%^&*]|(![$%^&*]).*[A-Za-z]/.test(this.password)
      ) {
        this.errors.password =
          "Password must be at least 8 characters long and contain at least one special character ($, %, ^, &, *).";
        isValid = false;
      }
      if (this.password !== this.confirmPassword) {
        this.errors.confirmPassword = "Passwords do not match. Try again Later";
        isValid = false;
      }
      if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.errors.email = "Invalid email address.";
        isValid = false;
      }
      if (!/^\d{4}$/.test(this.postcode)) {
        this.errors.postcode = "Postcode must be exactly 4 digits.";
        isValid = false;
      }
      if (!/^04\d{8}$/.test(this.mobile)) {
        this.errors.mobile =
          "Mobile number is not in correct formwat. It must be 10 digits and start with 04.";
        isValid = false;
      }

      if (isValid) {
        this.$refs.form.submit();
      }
    },
  },
});
app.mount("#app");