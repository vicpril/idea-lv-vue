<template>
	<div>
		<div class="row">
			<div class="col-md">
				<!-- TITLE -->
				<div class="card">
					<div class="card-header">
						<h5 class="h5 mb-0">Название</h5>
					</div>
					<div class="card-body">
						<div class="form-group">
							<label>На русском</label>
							<input
								id="title_ru"
								name="title_ru"
								class="form-control"
								v-model="article.title_ru"
								:class="{'is-invalid' : errors.hasOwnProperty('title_ru')}"
							/>
							<div class="invalid-feedback" v-for="(error, key) in errors['title_ru']" :key="key">{{error}}</div>
						</div>
						<div class="form-group">
							<label>На английском</label>
							<input
								type="text"
								name="title_en"
								class="form-control"
								v-model="article.title_en"
								:class="{'is-invalid' : errors.hasOwnProperty('title_en')}"
							/>
							<div class="invalid-feedback" v-for="(error, key) in errors['title_en']" :key="key">{{error}}</div>
						</div>
						<div class="form-group mb-0" v-if="article.link">
							<label>Ссылка на сайте:</label>
							<a :href="article.link" class="ml-1" target="_blank">{{ article.link }}</a>
						</div>
					</div>
				</div>
				<!-- END TITLE -->

				<!-- AUTHORS -->
				<article-profile-authors v-model="article.users"></article-profile-authors>
				<!-- END AUTHORS -->

				<!-- CATEGORIES	 -->
				<!-- 				<article-profile-categories v-model="article.categories"></article-profile-categories> -->
				<article-profile-categories
					:value="article.categories"
					@input="updateCategories"
					:errors="errors"
				></article-profile-categories>

				<!-- END CATEGORIES	 -->

				<!-- TEXT -->
				<article-profile-text
					:text_ru.sync="article.text_ru"
					:text_en.sync="article.text_en"
					:collapsing="true"
					:collapsed.sync="collapsed.text"
				></article-profile-text>
				<!-- END TEXT -->

				<!-- FILES -->
				<article-profile-files
					:file_ru.sync="article.file_ru"
					:file_en.sync="article.file_en"
					:file_audio.sync="article.file_audio"
				></article-profile-files>
				<!-- END FILES -->

				<!-- ADDITIONALS FIELDS -->
				<div class="card">
					<div class="card-header">
						<h5 class="h5 mb-0">Дополнительные поля</h5>
					</div>
					<!-- УДК -->
					<div class="card-body">
						<div class="d-flex">
							<label for="udc" class="form-title h6 mr-2 my-auto">УДК:</label>
							<input type="text" class="form-control align-self-center" name="udk" v-model="article.udk" />
						</div>
					</div>
					<hr class="my-0" />

					<!-- Annotation - RU -->
					<div class="card-body">
						<div class="form-group mb-0">
							<label class="h6">Аннотация на русском</label>
							<vue-ckeditor class name="annotation_ru" id="annotation_ru" v-model="article.annotation_ru" />
						</div>
					</div>
					<hr class="my-0" />

					<!-- DOI -->
					<div class="card-body">
						<div class="d-flex">
							<label for="doi" class="form-title h6 mr-2 my-auto">DOI:</label>
							<input type="text" class="form-control align-self-center" name="doi" v-model="article.doi" />
						</div>
					</div>
					<hr class="my-0" />

					<!-- Keywords - RU -->
					<div class="card-body">
						<div class="form-group mb-0">
							<label class="h6">Ключевые слова на русском</label>
							<textarea
								class="form-control"
								name="keywords_ru"
								id="keywords_ru"
								v-model="article.keywords_ru"
							></textarea>
						</div>
					</div>
					<hr class="my-0" />

					<!-- Date arrival & review -->
					<div class="card-body">
						<div class="row">
							<div class="col-sm form-group mb-0">
								<label for="date_arrival" class="form-title h6 mr-2">Дата поступления:</label>
								<date-picker name="date_arrival" v-model="article.date_arrival" :config="datePickerOptions"></date-picker>
							</div>
							<div class="col-sm form-group mb-0">
								<label for="date_review" class="form-title h6 mr-2">Дата рецензирования:</label>
								<date-picker name="date_review" v-model="article.date_review" :config="datePickerOptions"></date-picker>
							</div>
						</div>
					</div>
					<hr class="my-0" />

					<!-- Applications -->
					<div class="card-body">
						<div class="form-group mb-0">
							<label class="h6">Дополнения</label>
							<vue-ckeditor class name="applications" id="applications" v-model="article.applications" />
						</div>
					</div>
					<hr class="my-0" />

					<!-- Annotation - EN -->
					<div class="card-body">
						<div class="form-group mb-0">
							<label class="h6">Аннотация на английском</label>
							<vue-ckeditor class name="annotation_en" id="annotation_en" v-model="article.annotation_en" />
						</div>
					</div>
					<hr class="my-0" />

					<!-- Keywords - EN -->
					<div class="card-body">
						<div class="form-group mb-0">
							<label class="h6">Ключевые слова на английском</label>
							<textarea
								class="form-control"
								name="keywords_en"
								id="keywords_en"
								v-model="article.keywords_en"
							></textarea>
						</div>
					</div>
					<hr class="my-0" />

					<!-- Finance -->
					<div class="card-body">
						<div class="form-group mb-0">
							<label class="h6">Информация о финансировании</label>
							<textarea class="form-control" name="finance" id="finance" v-model="article.finance"></textarea>
						</div>
					</div>
					<hr class="my-0" />

					<!-- Bibliography - EN -->
					<div class="card-body">
						<div class="form-group mb-0">
							<label class="h6">Список литературы на русском</label>
							<vue-ckeditor
								class
								name="bibliography_ru"
								id="bibliography_ru"
								v-model="article.bibliography_ru"
							/>
						</div>
					</div>
					<hr class="my-0" />

					<!-- Bibliography - EN -->
					<div class="card-body">
						<div class="form-group mb-0">
							<label class="h6">Список литературы на английском</label>
							<vue-ckeditor
								class
								name="bibliography_en"
								id="bibliography_en"
								v-model="article.bibliography_en"
							/>
						</div>
					</div>
					<hr class="my-0" />
				</div>

				<!-- END ADDITIONALS FIELDS -->

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
							<strong v-if="article.status">Опублиповано</strong>
							<strong v-else>Черновик</strong>
							<label
								class="float-right mx-1 switch switch-label switch-3d switch-success form-check-label"
							>
								<input
									type="checkbox"
									class="switch-input"
									v-model="article.status"
									@click="article.status = !article.status"
								/>
								<span data-checked="✓" data-unchecked="✕" class="switch-slider"></span>
							</label>
							<input type="text" name="status" :value="article.status" hidden />
						</div>
						<div class="form-group mb-0" v-if="article.updated_at">
							<span class="text-muted">
								<i class="fa fa-calendar mr-1"></i>Дата:
							</span>
							<strong>{{ article.updated_at }}</strong>
						</div>
					</div>
					<div class="card-footer">
						<button
							class="btn btn-link text-danger float-left sticky-top"
							v-if="article.id"
							@click.prevent="deleteArticle"
						>Удалить</button>
						<input
							class="btn btn-primary btn-round float-right"
							type="submit"
							:value="newArticle ? 'Сохранить' : 'Обновить' "
						/>
					</div>
				</div>
				<!-- END ISSUE -->

				<!-- ISSUE -->
				<div class="card">
					<div class="card-header">
						<h5 class="h5 mb-0">Выпуск</h5>
					</div>
					<div class="card-body">
						<div class="input-group mb-2">
							<div class="input-group-prepend">
								<span class="input-group-text">Год</span>
							</div>
							<input type="number" name="year" min="2009" class="form-control" v-model="article.year" />
							<div class="input-group-append">
								<span class="input-group-text">Том {{ tom }}</span>
								<input type="number" name="tom" :value="tom" hidden />
							</div>
						</div>
						<div class="input-group mb-2">
							<div class="input-group-prepend">
								<span class="input-group-text">Номер</span>
							</div>
							<select name="no" class="form-control" v-model="article.no">
								<option v-for="(no, index) in noArray" :key="index" :value="no">{{ no }}</option>
							</select>
						</div>
						<div class="input-group mb-2">
							<div class="input-group-prepend">
								<span class="input-group-text">Полный номер</span>
							</div>
							<input type="number" name="full_no" min="1" class="form-control" v-model="article.full_no" />
							<div class="input-group-append">
								<button type="button" class="btn btn-outline-info" @click.prevent="autoFullNo">Авто</button>
							</div>
						</div>
						<div class="input-group mb-2">
							<div class="input-group-prepend">
								<span class="input-group-text">Часть</span>
							</div>
							<select name="part" class="form-control" v-model="article.part">
								<option v-for="(part, index) in partArray" :key="index" :value="part">{{ part }}</option>
							</select>
						</div>

						<div class="d-flex">
							<label class="align-self-start">Запись относится к круглому столу</label>
							<label
								class="align-self-end mx-1 my-auto switch switch-label switch-3d switch-warning form-check-label"
							>
								<input
									type="checkbox"
									class="switch-input"
									v-model="article.stol"
									@click="article.stol = !article.stol"
								/>
								<span data-checked="✓" data-unchecked="✕" class="switch-slider"></span>
							</label>
							<input type="text" name="stol" :value="article.stol" hidden />
						</div>
					</div>
				</div>
				<!-- END ISSUE -->

				<!-- TAGS -->
				<article-profile-tags v-model="article.tags"></article-profile-tags>
				<!-- END TAGS -->

				<!-- </div> -->
			</div>
		</div>
	</div>
</template>

<script>
import ArticleProfileText from "./ArticleProfileText.vue";
import ArticleProfileTags from "./ArticleProfileTags.vue";
import ArticleProfileFiles from "./ArticleProfileFiles.vue";
import ArticleProfileAuthors from "./ArticleProfileAuthors.vue";
import ArticleProfileCategories from "./ArticleProfileCategories.vue";

// import vSelect from "vue-select";
import VueCkeditor from "../VueCkeditor.vue";
import datePicker from "vue-bootstrap-datetimepicker";
import "pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css";

export default {
	components: {
		// 		vSelect,
		VueCkeditor,
		ArticleProfileText,
		ArticleProfileTags,
		ArticleProfileFiles,
		ArticleProfileAuthors,
		ArticleProfileCategories,
		datePicker
	},

	props: {
		old: {
			type: Object,
			default: () => ({})
		},

		id: {
			type: Number,
			default: 0
		},

		setYear: {
			type: Number,
			default: new Date().getFullYear()
		},
		setNo: {
			type: Number,
			default: 1
		},
		setFullNo: {
			type: Number,
			default: 0
		},
		setPart: {
			type: Number,
			default: 1
		}
	},

	data: function() {
		return {
			offset: { top: 100, bottom: 0 },

			datePickerOptions: {
				format: "YYYY-MM-DD",
				locale: "ru"
			},

			noArray: [1, 2, 3, 4, 5],

			partArray: [1, 2],

			article: {
				id: "",
				link: "",
				status: false,
				created_at: "",
				updated_at: "",
				date_arrived: "",
				date_review: "",
				year: this.setYear,
				tom: "",
				no: this.setNo,
				full_no: this.setFullNo,
				part: this.setPart,
				doi: "",
				udk: "",
				stol: false,
				finance: "",
				users: [],
				tags: [],
				categories: "",
				title_en: "",
				title_ru: "",
				text_ru: "",
				text_en: "",
				annotation_ru: "",
				annotation_en: "",
				keywords_ru: "",
				keywords_en: "",
				bibliography_ru: "",
				bibliography_en: "",
				file_ru: "",
				file_en: "",
				file_audio: ""
			},

			collapsed: {
				text: true
			}
		};
	},

	computed: {
		newArticle() {
			return this.article.id ? false : true;
		},

		tom() {
			this.article.tom = this.article.year - 2009 + 1;
			return this.article.tom;
		}
	},

	created() {
		// fetching article
		if (!this.isEmptyObject(this.old)) {
			this.article = this.old;
			this.article.users =
				typeof this.old.users !== "undefined"
					? Object.values(this.old.users).map(x => parseInt(x))
					: [];
			this.article.tags =
				typeof this.old.tags !== "undefined"
					? Object.values(this.old.tags).map(x => parseInt(x))
					: [];
			this.article.categories =
				typeof this.old.categories !== "undefined"
					? parseInt(this.old.categories)
					: null;
		} else if (this.id !== 0) {
			this.fetchArticle(this.id);
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
		fetchArticle(id) {
			axios
				.get("/api/articles/" + id)
				.then(({ data }) => {
					this.article = data.data;
				})
				.then(() => {
					this.collapsed.text =
						this.article.text_ru !== "" ||
						this.article.text_ru !== ""
							? false
							: true;
				});
		},

		deleteArticle() {
			if (confirm("Удалить статью ?")) {
				document.getElementsByName("_method")[0].value = "DELETE";
				document.getElementById("form").submit();
			}
		},

		autoFullNo() {
			this.article.full_no =
				(this.article.year - 2009 - 1) * 4 + 2 + this.article.no;
		},

		checkError(error) {
			if (this.errors.hasOwnProperty(error)) {
				return "is-invalid";
			}
		},

		updateCategories(value) {
			this.article.categories = value;
		}
	}
};
</script>

<style scope>
/* ADMIN right sidebar */
.right-sidebar {
	-ms-flex: 0 0 320px !important;
	flex: 0 0 320px;
}

#title_ru {
	font-size: 20px;
	height: calc(1.7em + 1px);
	padding: 3px 8px 3px 8px;
}
</style>
