<template>
	<main>
<h1>Manager</h1>
<!-- testing if getter is like computed -->
<!-- <form @submit.prevent = "userStore.getSortedUsers"> -->
<form @submit.prevent = "createUser">
<input type="text" v-model="userInput.name" name="" id="">
<input type="email" v-model="userInput.email" name="" id="">
<input type="submit" value="Create User">
</form>
	</main>

	<div class="sort-option">
		<label for=""> Sort
			<span>
				<input type="checkbox" v-model="sort" name="" id="">
			</span>
		</label>
	</div>

	<div class="user-list" v-if="!sort">
		<li v-for="user in userStore.users" :key="user.id">
		{{ user }}
	</li>
	</div>
	<div class="user-list" v-else>
		<li v-for="user in userStore.get" :key="user.id">
		{{ user }}
	</li>
	</div>
</template>

<script setup>
import {ref} from "vue"
import { useCounterStore } from './stores/users';
const userStore = useCounterStore();

const userInput = ref({
	name: "",
	email:"",
})

const sort = ref(false)

const createUser = ()=>{
	// conditons before creating user
	if(!userInput.value.name || !userInput.value.email ) return alert("fill name and email");

	
	userStore.createUser(userInput.value)
	// reset 
	userInput.value = {
name:"",
email:""
	}
	
}
	
</script>

<style lang="scss" scoped>

</style>