<template>
    <nav>
        <ul>
            <li><router-link to="/admin" :class="{'active': nav === 'employees'}">Employees</router-link></li>
            <li><router-link to="/admin/reviews" :class="{'active': nav !== 'employees'}">Reviews</router-link></li>
        </ul>
        <ul>
            <li class="logout"><router-link to="/">logout</router-link></li>
        </ul>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            nav: 'employees'
        };
    },
    watch: {
        $route() {
            this.nav = this.$route.path === '/admin/reviews' ? 'reviews' : 'employees';
        }
    }
}
</script>