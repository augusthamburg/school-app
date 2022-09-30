<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
	content: {
		type: String,
		required: true,
	},
	position: {
		type: String,
		default: 'top',
		validator(value: string) {
			return ['top', 'left', 'bottom', 'right'].includes(value)
		},
	},
})

const classes = ref({
	container: 'ui-tooltip__container',
	box: 'ui-tooltip__box',
	position: `ui-tooltip__position-${props.position}`,
})

const show = ref(false)

const onMove = () => {
	show.value = true
}

const onLeave = () => {
	show.value = false
}
</script>

<template>
	<div :class="classes.container" @mousemove="onMove()" @mouseout="onLeave()">
		<slot />
		<Transition name="tooltip">
			<template v-if="show">
				<div :class="[classes.box, classes.position]">
					{{ props.content }}
				</div>
			</template>
		</Transition>
	</div>
</template>

<style src="./UITooltip.css"></style>
