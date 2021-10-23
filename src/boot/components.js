import BaseToolbar from 'components/BaseToolbar.vue';
import BaseDrawer from 'components/BaseDrawer.vue';
import BaseMenu from 'components/BaseMenu.vue';

export default async ({ Vue }) => {
    Vue.component('BaseToolbar', BaseToolbar);
    Vue.component('BaseDrawer', BaseDrawer);
    Vue.component('BaseMenu', BaseMenu);
}