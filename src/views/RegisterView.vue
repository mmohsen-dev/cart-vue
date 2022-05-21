<template>
  <div id="register">
    <ul class="breadcrumb">
      <li>
        <a href="#"><i class="fa fa-home"></i></a>
      </li>
      <li><a href="#">Account</a></li>
      <li><a href="#">Register</a></li>
    </ul>

    <div class="row">
      <div id="content" class="col-sm-12">
        <h2 class="title">Register Account</h2>
        <p>
          If you already have an account with us, please login at the
          <router-link to="/login">login page</router-link>.
        </p>
        <form
          action=""
          method="post"
          enctype="multipart/form-data"
          @submit.prevent="saveUser"
          class="form-horizontal account-register clearfix"
        >
          <fieldset id="account">
            <legend>Your Personal Details</legend>
            <div class="form-group required" style="display: none">
              <label class="col-sm-2 control-label">Customer Group</label>
              <div class="col-sm-10">
                <div class="radio">
                  <label>
                    <input
                      type="radio"
                      name="customer_group_id"
                      value="1"
                      checked="checked"
                    />
                    Default
                  </label>
                </div>
              </div>
            </div>
            <div class="form-group required">
              <p>first name: {{ user.firstname }}</p>
              <label class="col-sm-2 control-label" for="input-firstname"
                >First Name</label
              >
              <div class="col-sm-10">
                <input
                  v-model="user.firstname"
                  v-on:keyup="test"
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  id="input-firstname"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-group required">
              <label class="col-sm-2 control-label" for="input-lastname"
                >Last Name</label
              >
              <div class="col-sm-10">
                <input
                  v-model="user.lastname"
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  id="input-lastname"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-group required">
              <label class="col-sm-2 control-label" for="input-email"
                >E-Mail</label
              >
              <div class="col-sm-10">
                <input
                  v-model="user.email"
                  type="email"
                  name="email"
                  placeholder="E-Mail"
                  id="input-email"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-group required">
              <label class="col-sm-2 control-label" for="input-telephone"
                >Telephone</label
              >
              <div class="col-sm-10">
                <input
                  v-model="user.telephone"
                  type="tel"
                  name="telephone"
                  placeholder="Telephone"
                  id="input-telephone"
                  class="form-control"
                />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Your Password</legend>
            <div class="form-group required">
              <label class="col-sm-2 control-label" for="input-password"
                >Password</label
              >
              <div class="col-sm-10">
                <input
                  v-model="user.password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="input-password"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-group required">
              <label class="col-sm-2 control-label" for="input-confirm"
                >Password Confirm</label
              >
              <div class="col-sm-10">
                <input
                  v-model="user.confirm"
                  type="password"
                  name="confirm"
                  placeholder="Password Confirm"
                  id="input-confirm"
                  class="form-control"
                />
              </div>
            </div>
          </fieldset>

          <div class="buttons">
            <div class="pull-right">
              <button
                type="submit"
                class="btn btn-primary"
              >Continue</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstname: "",
        lastname: "",
        email: "",
        telephone: "",
        password: "",
        confirm: "",
      },
    };
  },

  methods: {
    saveUser() {
      console.log(this.user)
      fetch("http://127.0.0.1:8000/api/auth/register", {
        method: "POST",
        body: this.user,
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          alert(JSON.stringify(data));
        });
    },
  },
};
</script>

<style scoped>
</style>