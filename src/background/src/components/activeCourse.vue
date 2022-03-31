<template>
    <div>
        <v-card>
            <v-card-title>{{ getActiveCourse.id }}</v-card-title>
            <v-card-subtitle>{{ getActiveCourse.name }}</v-card-subtitle>
            <v-card-text>{{ getActiveCourse.description }}</v-card-text>
        </v-card>        
        <v-container v-for="task in getActiveCourse.tasks" :key="`${getActiveCourse.id}-${task.order}`"
            class="px-5"
            fluid
            >            
            <v-switch                
                v-model="task.active"
                @change="taskActive({event:$event,task})"
                :label="`${task.name}: ${task.description}`"
            ></v-switch>
        </v-container>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'activeCourse',
    computed: {
        ...mapGetters('courses',['getActiveCourse']),

    },
    methods: {
        
        ...mapActions('courses',['changeTaskState']),
        taskActive(task) {                        
            this.changeTaskState(task);
        }
    },
     
}
</script>
