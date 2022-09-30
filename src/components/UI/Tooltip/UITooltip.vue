<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
	content: {
		type: String,
		required: true,
	},
})

const classes = ref({
	container: 'ui-tooltip__container',
	box: 'ui-tooltip__box',
})

const show = ref(true)

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
				<div :class="[classes.box]">
					{{ props.content }}
				</div>
			</template>
		</Transition>
	</div>
</template>

<style src="./UITooltip.css"></style>
