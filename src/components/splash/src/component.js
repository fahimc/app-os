import Events from '../../app/src/events';
import EventBus from '../../app/src/event-bus';

export default {
    name: 'splash',
    data: function() {
        return {
            isHide: false
        };
    },
    created() {

        setTimeout(function() {
            EventBus.$emit(Events.UPDATE_ROUTE_EVENT, 'home');
            //this.isHide = true;
        }.bind(this), 5000);
    }
};
