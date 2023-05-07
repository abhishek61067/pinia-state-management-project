<script setup>
import { useUserStore } from './stores/users'
import { ref } from 'vue'

const user_store = useUserStore()

const user_input = ref({
	name: '',
	email: ''
})

const sort = ref(false)
const createUser  = ()=>{
    if(!user_input.value.name || !user_input.value.email){
      return alert("please fill name and email")
    }
    // calling the function in user_store
    user_store.create(user_input.value);
    // reset 
    user_input.value = {
      name: "",
      email:""
    }
  }

// const CreateUser = () => {
// 	if (!user_input.value.name || !user_input.value.email) {
// 		return alert("Please enter a name and email")
// 	}
// 	user_store.create(user_input.value)

// 	user_input.value = {
// 		name: '',
// 		email: ''
// 	}
// }
</script>

<template>
	<main>
		<h1>Team Manager</h1>

		<form @submit.prevent="createUser">
			<input 
				type="text"
				placeholder="e.g. Naruto Uzumaki"
				v-model="user_input.name"  />
			<input 
				type="email" 
				placeholder="e.g. hokage@ninja.com"
				v-model="user_input.email" />
			<input 
				type="submit" 
				value="Create user" />
		</form>

		<div class="users">
			<div v-for="user in user_store.users" class="user" :key="user.key">
				<div>ID: {{ user.id }}</div>
				<h3>{{ user.name }}</h3>
				<p>{{ user.email }}</p>
			</div>
		</div>

		
	</main>
</template>

<style>
</style>