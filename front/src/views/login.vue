<style lang="scss" src="@/assets/css/login.scss"></style>

<template>
  <div id="login">
    <form action="#" @submit.prevent="onSubmit" autocomplete="false" method="post">
        <p>
            <input type="text" name="username" v-model="username">
        </p>
        <p>
            <input type="password" name="password" v-model="password">
        </p>
        <p>
            <input type="submit" value="Login">
        </p>
        <p>
            Admin: admin / admin <br>
            User: user / password (not implemented)
        </p>
    </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            username: "admin",
            password: "admin"
        };
    },
    methods: {
        onSubmit () {
            if (this.username === "admin") {
                this.$router.push("admin");
            } else {
                this.$router.push("members");
            }
            return false;
        }
    }
}
</script>
