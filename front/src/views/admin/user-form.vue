<style lang="scss" src="@/assets/css/admin.scss"></style>

<template>
  <div id="admin">
    <admin-nav></admin-nav>
    
    <div class="user-details">
        <form @submit.prevent="" action="post">
            <p>
                <span class="label usernameID">ID</span>
                #{{employee.id}}
            </p>

            <p>
                <span class="label username">Username</span>
                <input type="text" name="username" id="" :value="employee.name">
            </p>

            <p>
                <span class="label"></span>
                <input type="submit" value="Save">
            </p>
        </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import adminNav from '@/components/admin-nav.vue'

export default {
    data() {
        return {
            nav: 'employees',
            employee: null
        };
    },
    components: {
        adminNav
    },
    async created() {
        try {
            const userID = this.$route.params.userID;
            const user = await axios.get(`http://localhost:3000/employees/${userID}`);
            this.employee = user.data;
        } catch (error) {
            console.warn(error);
        }
    },
    methods: {
        onSubmit () {
        }
    }
}
</script>
