<style lang="scss" src="@/assets/css/admin.scss"></style>

<template>
  <div id="admin">
    <admin-nav></admin-nav>
    
    <div class="details" v-if="employee">
        <h3>(#{{employee.id}}) {{employee.name}} <router-link :to="{name: 'employees-edit', params: { userID: employee.id }}" class="button">edit</router-link></h3>

        <div class="comments">
            <h3>add a reviewer</h3>
            <p class="reviewers-selection">
                <select name="reviewers" id="reviewers">
                    <option value="1">reviewer 1</option>
                    <option value="2">reviewer 1</option>
                </select>
                <input type="button" value="add">
            </p>
            
            <form action="">
                <h3>Reviews</h3>
                <select name="comments-type" id="comments-type" v-model="commentsType">
                    <option value="on">about {{employee.name}}</option>
                    <option value="from">from {{employee.name}}</option>
                </select>
            </form>

            <p v-for="e in employee.comments[commentsType]" :key="e.by">
                {{e.content}} <br>
                <span v-if="e.from != employee.id">by: <router-link :to="{name: 'employees-details', 
                    params: { userID: e.from }}" class="username">{{e.from}}</router-link></span>
                
                <span v-if="e.from == employee.id">about: <router-link :to="{name: 'employees-details', 
                    params: { userID: e.on }}" class="username">{{e.on}}</router-link></span>
            </p>
            <p v-if="employee.comments[commentsType].length === 0">No comment yet</p>
        </div>
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
            commentsType: 'on',
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
    async beforeRouteUpdate(to, from, next) {
        // console.log('update');
        next();
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
