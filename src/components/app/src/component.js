import Events from './events';
import EventsBus from './event-bus';

export default {
    name: 'app',
    created() {
      console.log(this);
        EventsBus.$on(Events.UPDATE_ROUTE_EVENT, this.onUpdateRoute.bind(this));
    },
    methods: {
        onUpdateRoute(routeName) {
            this.$router.push(routeName);
        }
    }

};
