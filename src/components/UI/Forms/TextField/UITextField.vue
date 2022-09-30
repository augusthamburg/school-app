<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
	modelValue: {
		type: String,
		required: false,
		default: '',
	},
	placeholder: {
		type: String,
		required: false,
	},
	clearable: {
		type: Boolean,
		required: false,
	},
	invalid: {
		type: Boolean,
		required: false,
	},
	hint: {
		type: String,
		required: false,
	},
	disabled: {
		type: Boolean,
		required: false,
	},
})

const emits = defineEmits(['update:modelValue'])

const classes = ref({
	base: 'ui-text-field',
	invalid: 'ui-text-field__invalid',
	hint: 'ui-text-field__hint',
	clearable: 'ui-text-field__clearable',
})

const onInput = (e: Event) => emits('update:modelValue', (e.target as HTMLInputElement).value)

const onClearable = () => emits('update:modelValue', '')
</script>

<template>
	<div class="relative">
		<input
			type="text"
			:value="props.modelValue"
			@input="onInput($event)"
			:disabled="props.disabled"
			:class="[classes.base, props.invalid ? classes.invalid : '']"
			:placeholder="props.placeholder"
		/>
		<svg
			v-if="props.clearable"
			@click.stop="onClearable()"
			:class="classes.clearable"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
		</svg>
		<span v-if="props.hint?.trim()" :class="classes.hint">{{ props.hint }}</span>
	</div>
</template>

<style src="./UITextField.css"></style>
