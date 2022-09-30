<script setup lang="ts">
import { ref } from 'vue'
import UITextField from './components/UI/Forms/TextField/UITextField.vue'

const fds = ref('fdsfdsfds')
</script>

<template>
	<div class="flex justify-between m-32">
		<div class="w-[380px]">
			<UITextField placeholder="fds" v-model="fds" />
		</div>
		<div>
			{{ fds }}
		</div>
	</div>
</template>
