export default ({ Vue }) => {
    Vue.filter('FilterState', function(value) {
        if (value == 0) return 'Activo';
        else return 'Inactivo';
    })
}