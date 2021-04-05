<style lang="scss" src="@/assets/css/admin.scss"></style>

<template>
  <div id="admin">
    <admin-nav></admin-nav>
    
    <form @submit.prevent>
        <table class="employees-list">
            <tr>
                <th>Name</th>
                <th class="actions">Actions</th>
            </tr>
            <tr>
                <td colspan="2">
                    <input type="search" placeholder="filter by name" v-model="search"> <input type="reset" @click="resetSearch">
                </td>
            </tr>
            <tr v-for="e in employeesFiltered" :key="e.id">
                <td><router-link :to="{name: 'employees-details', params: { userID: e.id }}" class="username">{{e.name}}</router-link></td>
                <td>
                    <router-link :to="{name: 'employees-edit', params: { userID: e.id }}" class="button" title="edit"><span class="icofont-edit"></span></router-link>
                    <a href="" @click.prevent="deleteUser(e.id)" class="button delete" title="delete"><span class="icofont-ui-delete"></span></a>
                </td>
            </tr>
        </table>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import adminNav from '@/components/admin-nav.vue'

export default {
    data() {
        return {
            search: null,
            employees: []
        };
    },
    components: {
        adminNav
    },
    async created() {
        console.log('created');
        try {
            const users = await axios.get(`http://localhost:3000/employees`);
            this.employees = users.data;
        } catch (error) {
            console.error(error);
        }
    },
    computed: {
        employeesFiltered() {
            let res = this.employees;
            if (this.search) {
                res = this.employees.filter(e => e.name.toLowerCase().indexOf(this.search) > -1);
            }
            return res;
        }
    },
    methods: {
        async deleteUser (userID) {
            // TODO: action to delete user with an alert (are you sure you want to delete this user)
            try {
                const res = await axios.delete(`http://localhost:3000/employees`, { data: { id: userID } });
                console.log(res);
                console.log(`user ${userID} got deleted successfully`);
            } catch (error) {
                console.error(error);
            }
        },
        resetSearch () {
            this.search = null;
        }
    }
}
</script>
