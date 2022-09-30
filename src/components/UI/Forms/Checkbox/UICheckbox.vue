<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { ref } from 'vue'

const props = defineProps({
	modelValue: {
		type: Boolean,
		required: false,
	},
	label: {
		type: String,
		required: false,
	},
	disabled: {
		type: Boolean,
		required: false,
	},
})

const emits = defineEmits(['update:modelValue'])

const ID = Math.floor(Math.random() * 1000)

const checkboxClass = computed(() => {
	return {
		'ui-checkbox--checkbox': true,
		'ui-checkbox--checkbox-disabled': props.disabled,
		'ui-checkbox--checkbox-checked': !props.disabled && props.modelValue,
	}
})

const checkClass = computed(() => {
	return {
		'ui-checkbox--check': true,
		'ui-checkbox--check-checked': !props.disabled && props.modelValue,
	}
})

const onChange = () => {
	if (!props.disabled) {
		emits('update:modelValue', !props.modelValue)
	}
}
</script>

<template>
	<div
		class="ui-checkbox"
		tabindex="0"
		role="checkbox"
		:aria-labelledby="ID"
		:aria-checked="props.modelValue"
		@click="onChange()"
	>
		<div :class="checkboxClass">
			<svg
				v-if="props.modelValue"
				:class="checkClass"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="4"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
			</svg>
		</div>
		<div>{{ props.label }}</div>
	</div>
</template>

<style src="./UICheckbox.css"></style>
