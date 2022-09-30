<script setup lang="ts">
import UITooltip from './components/UI/Tooltip/UITooltip.vue'
import UITextField from './components/UI/Forms/TextField/UITextField.vue'
</script>

<template>
	<div class="flex justify-between m-32">
		<div>
			<UITooltip content="На данный момент реализована только верхняя позиция.">
				<UITextField placeholder="Введите ФИО сотрудника ..." />
			</UITooltip>
		</div>
	</div>
</template>
