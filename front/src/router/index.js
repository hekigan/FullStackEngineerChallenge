import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/login.vue';
import Members from '../views/members.vue';
import Admin from '../views/admin/user-list.vue';
import AdminUserDetails from '../views/admin/user-details.vue';
import AdminUserEdit from '../views/admin/user-form.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: () => {
      return 'login';
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/members',
    name: 'members',
    component: Members
  },
  {
    path: '/admin/employees/:userID',
    name: 'employees-details',
    component: AdminUserDetails
  },
  {
    path: '/admin/employees/:userID/edit',
    name: 'employees-edit',
    component: AdminUserEdit
  },
  {
    path: '/admin/employees/:userID/delete',
    name: 'employees-delete',
    component: Admin
  },
  {
    path: '/admin/reviews',
    name: 'reviews',
    component: Admin
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  }
];

const router = new VueRouter({
  routes
});

export default router;
