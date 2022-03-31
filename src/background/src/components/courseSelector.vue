<template>
    <v-select
          :items="items"
          v-model="getActiveCourse.id"
          label="Choose course"
          @change="getSelection"
          outlined          
    ></v-select>
</template>

<script>
import { mapActions, mapGetters} from 'vuex';

export default {
    name: 'courseSelector',
    props: {
        items: Array
    },
    computed: {
        ...mapGetters('courses',['getActiveCourse'])
    },
    methods: {
        ...mapActions('courses',['setActiveCourse']),
        getSelection(e) {
            this.setActiveCourse(e);
        }
    }    
}
</script>
