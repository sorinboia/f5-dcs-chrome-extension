<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="F5 Logo"
          class="shrink mr-2"
          contain
          src="https://png2.cleanpng.com/sh/d5c88ad8438f35944309f9f3ee315c97/L0KzQYm3VMA4N6h6fZH0aYP2gLBuTfY2NZ9qjOl4cnv2PbT2jgB2fJZ3RdDudIfygry0ggBxdJpoeeZyb36wdLbzigZmeqoyi9twbj24cbSCUBE4P2pnUNRvMT66RYmCU8czQWI6SqU6M0e0RIS9U8cyNqFzf3==/kisspng-f5-networks-computer-network-application-delivery-sign-5ac93a779b8bf1.7589372915231371436371.png"
          transition="scale-transition"
          width="40"
        />
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <CourseSelector :items="getCoursesList"/>
      </div>
      <v-spacer></v-spacer>

      <v-btn
        href="https://f5.com"
        target="_blank"
        text
      >
        <span class="mr-2">Help and more</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <ActiveCourse />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CourseSelector from './components/courseSelector';
import ActiveCourse from './components/activeCourse.vue';

export default {  
  name: 'App',
  computed: {
    ...mapGetters('courses',['getCoursesList','getActiveCourse']),
  },
  
  methods: {
    ...mapActions('courses',['getAllMissingData'])
  },


  components: {
    CourseSelector,
    ActiveCourse
  },
  async mounted() {      
    await this.getAllMissingData();        
  },

  data: () => ({    
      
      
  }),
};
</script>
