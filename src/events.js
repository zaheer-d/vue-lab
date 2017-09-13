/**
 * Created by Zaheer on 12 Mar 2017.
 */

import Vue from 'vue'

export const EventBus = new Vue({
    methods : {
        onViewChange(viewName)
        {
            this.$emit('OnViewChange', viewName);
            console.log('-- EventBus Fired!!');
        }
    }
});