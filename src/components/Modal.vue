<template>
		<div class="modal modal-active">
			<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<slot name="header"></slot>
							<button type="button" @click="$emit('close')" class="close"><span >&times;</span></button>
						</div>
						<div class="modal-body">
								<slot name="body"></slot>
						</div>
						<div class="modal-footer">
							<slot name="footer"></slot>
							<button type="button" class="btn btn-default" @click="$emit('close')">Close</button>
						</div>
				</div>
			</div>
		</div>
</template>

<script>
export default {
  name: 'Modal'
}
</script>

<style scoped>
.modal-active{
	display:block;
}
</style>