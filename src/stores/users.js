import { defineStore } from 'pinia'
import { v4 as uuid } from 'uuid'

export const useCounterStore = defineStore('counter', {
    // state is like data. state will return object like data
     state: () => ({users:[]}),
     
    //  getters are like computed
     getters: {
        getSortedUsers(){
            return state.users.sort((a,b)=> a.name.localeCompare(b.name))
            // alert("computed test")
        }        
        },
    //  actions are like methods
     actions: {
        createUser(user){
            this.users.push({...user, id: uuid()})        
     },
        deleteUser(user){
            this.users.filter((u)=>{
       return u.id !== user.id
            })
        }
}}
)