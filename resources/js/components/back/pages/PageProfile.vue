<template>
	<div>
		<div class="m-0" v-if="!newPage">
			<div class="form-group" v-show="!editAlias">
				<label class="mr-1">Ссылка на сайте:</label>
				<a :href="uri + page.alias" target="_blank">{{ uri + page.alias }}</a>
				<button class="btn btn-light btn-sm" type="button" @click="editAlias = !editAlias">Изменить</button>
			</div>
			<div class="form-inline mb-2" v-show="editAlias">
				<div class="form-group">
					<label class="mr-1">Ссылка на сайте:</label>
					<span>{{ uri }}</span>

					<div class="input-group input-group-sm">
						<input type="text" class="form-control" v-model="newAlias" />
						<div class="input-group-append">
							<button class="btn btn-secondary" type="button" @click="saveAlias">OK</button>
						</div>
					</div>
					<button class="btn btn-sm btn-link" type="button" @click="cancelEditAlias">Отмена</button>
				</div>
			</div>
			<input type="text" hidden :value="page.alias" name="alias" />
		</div>
		<div class="row">
			<div class="col-md">
				<!-- RU PART -->
				<div class="card">
					<div class="card-header">
						<h4 class="d-inline-block mr-1 my-auto">Для русской части</h4>
						<!-- <div class="form-group"> -->
						<div class="float-right">
							<label class="mr-1 my-auto">Включить:</label>
							<label
								class="float-right mx-1 switch switch-label switch-3d switch-success form-check-label"
							>
								<input
									type="checkbox"
									class="switch-input"
									v-model="page.on_ru"
									@click="page.on_ru = !page.on_ru"
								/>
								<span data-checked="✓" data-unchecked="✕" class="switch-slider"></span>
							</label>
							<input type="text" name="on_ru" :value="page.on_ru" hidden />
						</div>
					</div>
					<!-- </div> -->
					<div class="card-body">
						<div class="form-group">
							<label class="h6">Название</label>
							<input
								id="title_ru"
								name="title_ru"
								class="form-control title"
								v-model="page.title_ru"
								:class="{'is-invalid' : errors.hasOwnProperty('title_ru')}"
								:readOnly="!page.on_ru"
							/>
							<div class="invalid-feedback" v-for="(error, key) in errors['title_ru']" :key="key">{{error}}</div>
						</div>

						<div class="form-group">
							<label class="h6">Содержание</label>
							<vue-ckeditor class="mt-2" name="content_ru" id="content_ru" v-model="page.content_ru" />
						</div>
					</div>
				</div>
				<!-- END RU PART -->

				<!-- EN PART -->
				<div class="card">
					<div class="card-header">
						<h4 class="d-inline-block mr-1 my-auto">Для английкой части</h4>
						<!-- <div class="form-group"> -->
						<div class="float-right">
							<label class="mr-1 my-auto">Включить:</label>
							<label
								class="float-right mx-1 switch switch-label switch-3d switch-success form-check-label"
							>
								<input
									type="checkbox"
									class="switch-input"
									v-model="page.on_en"
									@click="page.on_en = !page.on_en"
								/>
								<span data-checked="✓" data-unchecked="✕" class="switch-slider"></span>
							</label>
							<input type="text" name="on_en" :value="page.on_en" hidden />
						</div>
					</div>
					<!-- </div> -->
					<div class="card-body">
						<div class="form-group">
							<label class="h6">Название</label>
							<input
								id="title_en"
								name="title_en"
								class="form-control title"
								v-model="page.title_en"
								:class="{'is-invalid' : errors.hasOwnProperty('title_en')}"
								:readOnly="!page.on_en"
							/>
							<div class="invalid-feedback" v-for="(error, key) in errors['title_en']" :key="key">{{error}}</div>
						</div>

						<div class="form-group">
							<label class="h6">Содержание</label>
							<vue-ckeditor class="mt-2" name="content_en" id="content_en" v-model="page.content_en" />
						</div>
					</div>
				</div>
				<!-- END EN PART -->

				<!-- END MAIN -->
			</div>

			<!-- RIGHT SIDEBAR -->
			<!-- STATUS -->
			<div class="col-md right-sidebar">
				<div class="card">
					<div class="card-header">
						<h5 class="h5 mb-0">Опубликовать</h5>
					</div>
					<div class="card-body">
						<div class="form-group">
							<span class="text-muted">
								<i class="fa fa-check mr-1"></i>Статус:
							</span>
							<strong v-if="page.status">Опублиповано</strong>
							<strong v-else>Черновик</strong>
							<label
								class="float-right mx-1 switch switch-label switch-3d switch-success form-check-label"
							>
								<input
									type="checkbox"
									class="switch-input"
									v-model="page.status"
									@click="page.status = !page.status"
								/>
								<span data-checked="✓" data-unchecked="✕" class="switch-slider"></span>
							</label>
							<input type="text" name="status" :value="page.status" hidden />
						</div>
						<div class="form-group" v-if="page.updated_at">
							<span class="text-muted">
								<i class="fa fa-calendar mr-1"></i>Дата:
							</span>
							<strong>{{ page.updated_at }}</strong>
						</div>

						<div class="form-group mb-0">
							<span class="text-muted">
								<i class="fa fa-newspaper-o mr-1"></i>Шаблон:
							</span>
							<select name="template" v-model="page.template" class="form-control mt-1">
								<option
									v-for="(option, index) in templates"
									:key="index"
									:value="option.value"
								>{{ option.text }}</option>
							</select>
						</div>
					</div>
					<div class="card-footer">
						<button
							class="btn btn-link text-danger float-left sticky-top"
							v-show="page.id"
							@click.prevent="deletePage"
						>Удалить</button>
						<input
							class="btn btn-primary btn-round float-right"
							type="submit"
							:value="newPage ? 'Опубликовать' : 'Обновить' "
						/>
					</div>
				</div>
				<!-- END STATUS -->

				<!-- </div> -->

				<!-- SHOW MENUS -->
				<div class="card">
					<div class="card-header">
						<h5 class="h5 mb-0">Отображать меню на странице</h5>
					</div>
					<div class="card-body">
						<div class="form-group">
							<b-form-checkbox
								id="show_top_menu"
								v-model="page.show_top_menu"
								name="show_top_menu"
							>Главное меню (горизонтальное)</b-form-checkbox>
						</div>
						<div class="form-group">
							<b-form-checkbox
								id="show_sidebar_menu"
								v-model="page.show_sidebar_menu"
								name="show_sidebar_menu"
							>Вертикальное меню (О нас)</b-form-checkbox>
						</div>
						<div class="form-group">
							<b-form-checkbox
								id="show_review_menu"
								v-model="page.show_review_menu"
								name="show_review_menu"
							>Вертикальное меню (Информация для авторов)</b-form-checkbox>
						</div>
					</div>
				</div>
				<!-- END STATUS -->

				<!-- </div> -->
			</div>
			<!-- END SHOW MENUS -->
		</div>
	</div>
</template>

<script>
import VueCkeditor from "../VueCkeditor.vue";

export default {
	components: {
		VueCkeditor
	},

	props: {
		old: {
			type: Object,
			default: () => ({})
		},

		id: {
			type: Number,
			default: 0
		}
	},

	data: function() {
		return {
			page: {
				id: "",
				alias: "",
				link: "",
				status: false,
				template: "common",
				created_at: "",
				updated_at: "",
				on_en: false,
				on_ru: true,
				title_en: "",
				title_ru: "",
				content_ru: "",
				content_en: "",
				show_review_menu: false,
				show_sidebar_menu: false,
				show_top_menu: true
			},

			templates: [
				{
					value: "common",
					text: "Базовый шаблон"
				}
			],

			editAlias: false,
			newAlias: ""
		};
	},

	computed: {
		newPage() {
			return this.page.id ? false : true;
		},
		uri() {
			return window.location.protocol + "//" + window.location.host + "/";
		}
		// newAlias: {
		// 	get() {
		// 		return this.page.alias;
		// 	},
		// 	set(value) {
		// 		return value;
		// 	}
		// }
	},

	created() {
		// fetching templates
		this.fetchTemplates();

		// fetching page
		if (!this.isEmptyObject(this.old)) {
			this.page = this.old;
		} else if (this.id !== 0) {
			this.fetchPage(this.id);
		}
	},

	mounted() {
		// show errors
		if (!this.isEmptyObject(this.errors)) {
			this.$notify({
				group: "custom-template",
				text: this.errors.title[0],
				type: "alert-danger",
				duration: -1
			});
		}
	},

	methods: {
		saveAlias() {
			this.page.alias = this.newAlias;
			this.editAlias = false;
		},
		cancelEditAlias() {
			this.newAlias = this.page.alias;
			this.editAlias = false;
		},

		fetchPage(id) {
			axios.get("/api/pages/" + id).then(({ data }) => {
				this.page = data.data;
				this.newAlias = this.page.alias;
			});
		},

		fetchTemplates() {
			axios.get("/api/templates").then(({ data }) => {
				this.templates = data;
			});
		},

		deletePage() {
			if (confirm("Удалить страницу ?")) {
				document.getElementsByName("_method")[0].value = "DELETE";
				document.getElementById("form").submit();
			}
		},

		checkError(error) {
			if (this.errors.hasOwnProperty(error)) {
				return "is-invalid";
			}
		}
	}
};
</script>

<style scoped>
/* ADMIN right sidebar */
.right-sidebar {
	-ms-flex: 0 0 320px !important;
	flex: 0 0 320px;
}

.title {
	font-size: 20px;
	height: calc(1.7em + 1px);
	padding: 3px 8px 3px 8px;
}
</style>
