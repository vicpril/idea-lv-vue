<template>
	<div class="card">
		<div class="card-header">
			<h5 class="h5 mb-0">Файлы для скачивания</h5>
		</div>
		<div class="card-body">
			<div class="row">
				<div
					class="col-sm d-flex flex-column m-2 my-sm-0 py-2 rounded-lg text-center"
					:class="!file_ru ? 'bg-light' : 'bg-light-green'"
				>
					<label class="h6 mb-2">Русская версия</label>
					<file-picker :path="file_ru" container-class="align-self-center my-auto"></file-picker>
					<input
						class="form-control"
						type="text"
						id="file_ru"
						name="file_ru"
						:value="file_ru"
						@input="$emit('update:file_ru', $event.target.value)"
						hidden
					>
					<div class="mt-2">
						<button
							v-show="!file_ru"
							type="button"
							class="popup_selector btn btn-sm btn-primary"
							data-inputid="file_ru"
						>Загрузить</button>
						<button
							v-show="file_ru"
							type="button"
							@click.prevent="$emit('update:file_ru', null)"
							class="btn btn-sm btn-outline-success"
						>Убрать</button>
					</div>
				</div>

				<div
					class="col-sm d-flex flex-column m-2 my-sm-0 py-2 rounded-lg text-center"
					:class="!file_en ? 'bg-light' : 'bg-light-green'"
				>
					<label class="h6 mb-2">Английская версия</label>
					<file-picker :path="file_en" container-class="align-self-center my-auto"></file-picker>
					<input
						class="form-control"
						type="text"
						id="file_en"
						name="file_en"
						:value="file_en"
						@input="$emit('update:file_en', $event.target.value)"
						hidden
					>
					<div class="mt-2">
						<button
							v-show="!file_en"
							type="button"
							class="popup_selector btn btn-sm btn-primary"
							data-inputid="file_en"
						>Загрузить</button>
						<button
							v-show="file_en"
							type="button"
							@click.prevent="$emit('update:file_en', null)"
							class="btn btn-sm btn-outline-success"
						>Убрать</button>
					</div>
				</div>

				<div
					class="col-sm d-flex flex-column m-2 my-sm-0 py-2 rounded-lg text-center"
					:class="!file_audio ? 'bg-light' : 'bg-light-green'"
				>
					<label class="h6 mb-2">Аудио версия</label>
					<file-picker :path="file_audio" container-class="align-self-center my-auto"></file-picker>
					<input
						class="form-control"
						type="text"
						id="file_audio"
						name="file_audio"
						:value="file_audio"
						@input="$emit('update:file_audio', $event.target.value)"
						hidden
					>
					<div class="mt-2">
						<button
							v-show="!file_audio"
							type="button"
							class="popup_selector btn btn-sm btn-primary"
							data-inputid="file_audio"
						>Загрузить</button>
						<button
							v-show="file_audio"
							type="button"
							@click.prevent="$emit('update:file_audio', null)"
							class="btn btn-sm btn-outline-success"
						>Убрать</button>
					</div>
				</div>
			</div>
		</div>
		<div class="card-footer">
			<div class="row">
				<div class="col">
					<span class="text-danger">Добавляйте файлы только с названием <b>на латинице!</b></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		file_ru: {
			type: String,
			default: ""
		},
		
		file_en: {
			type: String,
			default: ""
		},
		
		file_audio: {
			type: String,
			default: ""
		}
	}
};
</script>