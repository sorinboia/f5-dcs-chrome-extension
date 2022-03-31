//import _ from 'lodash';
import data from '@/api/data';





export const state = {
    courses: localStorage.getItem('courses') ? JSON.parse(localStorage.getItem('courses')) : {},
    activeCourse: localStorage.getItem('activeCourse') || null
};

export const mutations = {
    SET_ALL_DATA(state, newValue) {        
        state.courses = newValue;
        localStorage.setItem('courses',JSON.stringify(state));
        chrome.runtime.sendMessage(null,{event:'setData',data:JSON.stringify(state)},(data) => {});
    },

    SET_ACTIVE_COURSE(state,newValue) {
        state.activeCourse = newValue;
        localStorage.setItem('activeCourse',newValue);
    },

    SET_TASK_STATE(state,{event , task}) {
        
        const index = state.courses[state.activeCourse].tasks.findIndex( item =>  item.order === task.order);                
        state.courses[state.activeCourse].tasks[index].active = event; 
        localStorage.setItem('courses',JSON.stringify(state.courses));
        chrome.runtime.sendMessage(null,{event:'setData',data:state},(data) => {});
    }
};

export const actions = {
    async getAllMissingData({ commit }) {        
        
        if (!localStorage.getItem('courses')) {
            console.log('Getting data',sessionStorage.getItem('courses'));
            const result = await data.getAllData();
            commit('SET_ALL_DATA',result);
        }        
    },
    async refreshData({ commit }) {        
        const result = await data.getAllData();
        commit('SET_ALL_DATA',result);
    },

    setActiveCourse({commit},course) {
        commit('SET_ACTIVE_COURSE',course);
    },

    changeTaskState({commit}, {event , task}) {             
        commit('SET_TASK_STATE',{event , task});
    }

    
};

export const getters = {
    getCoursesList(state) {
        return Object.keys(state.courses);
    },

    getActiveCourse(state) {
        
        // This if might not be necesarry
        /*
        if (state.courses[state.activeCourse]) {            
            state.courses[state.activeCourse].tasks.forEach(x => {
                if (x.active == undefined ) x.active = false;
            });
        }*/
        
        return { ...state.courses[state.activeCourse],id:state.activeCourse};
    }
};



