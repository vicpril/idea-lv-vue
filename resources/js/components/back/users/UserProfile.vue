<template>
	<div>
		<div class="row">
			<div class="col-md">
				<div class="card">
					<div class="card-header">
						<h5 class="h5 mb-0">Персональные данные</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<div class="col-md-8 col-sm-7 col-xs-7">
								<div class="form-group">
									<label class="h6">Полное имя</label>
									<input
										type="text"
										class="form-control mr-2"
										:class="checkError('full_name')"
										name="full_name"
										placeholder="Ф.И.О."
										v-model="user.full_name"
									/>
									<div
										class="invalid-feedback"
										v-for="(error, key) in errors['full_name']"
										:key="key"
									>{{error}}</div>
								</div>
							</div>
							<div class="col-md-4 col-sm-5 col-xs-5 text-right">
								<label class="d-block text-muted">Автозаполнение</label>
								<button type="button" class="btn btn-outline-info my-0" @click="autocomplite">Заполнить</button>
							</div>
						</div>

						<div class="row">
							<div class="col-md-7 pr-1">
								<div class="form-group">
									<label class="h6" for="email">Email</label>
									<input
										type="email"
										class="form-control"
										:class="checkError('email')"
										name="email"
										placeholder="Email"
										v-model="user.email"
									/>
									<div class="invalid-feedback" v-for="(error, key) in errors['email']" :key="key">{{error}}</div>
								</div>
							</div>
							<div class="col-md-5 pl-1">
								<div class="form-group">
									<label class="h6" for="alias">Логин</label>
									<input
										type="text"
										class="form-control"
										:class="checkError('alias')"
										name="alias"
										v-model="user.alias"
									/>
									<div class="invalid-feedback" v-for="(error, key) in errors['alias']" :key="key">{{error}}</div>
								</div>
							</div>
						</div>
						<label class="h6 text-muted mt-2 mb-1">Данные на русском</label>
						<div class="row">
							<div class="col-4 pr-1">
								<div class="form-group">
									<label for="last_name_ru">Фамилия</label>
									<input
										type="text"
										class="form-control"
										:class="checkError('last_name_ru')"
										name="last_name_ru"
										v-model="user.last_name_ru"
									/>
									<div
										class="invalid-feedback"
										v-for="(error, key) in errors['last_name_ru']"
										:key="key"
									>{{error}}</div>
								</div>
							</div>
							<div class="col-3 px-1">
								<div class="form-group">
									<label for="first_name_ru">Имя</label>
									<input
										type="text"
										class="form-control"
										:class="checkError('first_name_ru')"
										name="first_name_ru"
										v-model="user.first_name_ru"
									/>
									<div
										class="invalid-feedback"
										v-for="(error, key) in errors['first_name_ru']"
										:key="key"
									>{{error}}</div>
								</div>
							</div>
							<div class="col-3 px-1">
								<div class="form-group">
									<label for="patronymic_ru">Отчество</label>
									<input type="text" class="form-control" name="patronymic_ru" v-model="user.patronymic_ru" />
								</div>
							</div>
							<div class="col-2 pl-1">
								<div class="form-group">
									<label for="initials_ru">Инициалы</label>
									<input type="text" class="form-control" name="initials_ru" v-model="user.initials_ru" />
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-4 pr-1">
								<div class="form-group">
									<label for="short_name_ru">Короткое имя</label>
									<input
										type="text"
										class="form-control"
										:class="checkError('short_name_ru')"
										name="short_name_ru"
										v-model="user.short_name_ru"
									/>
									<div
										class="invalid-feedback"
										v-for="(error, key) in errors['short_name_ru']"
										:key="key"
									>{{error}}</div>
								</div>
							</div>
						</div>

						<label class="h6 text-muted mt-2 mb-1">Данные на английском</label>
						<div class="row">
							<div class="col-4 pr-1">
								<div class="form-group">
									<label for="last_name_en">Last Name</label>
									<input
										type="text"
										class="form-control"
										:class="checkError('last_name_en')"
										name="last_name_en"
										v-model="user.last_name_en"
									/>
									<div
										class="invalid-feedback"
										v-for="(error, key) in errors['last_name_en']"
										:key="key"
									>{{error}}</div>
								</div>
							</div>
							<div class="col-3 px-1">
								<div class="form-group">
									<label for="first_name_en">First Name</label>
									<input
										type="text"
										class="form-control"
										:class="checkError('first_name_en')"
										name="first_name_en"
										v-model="user.first_name_en"
									/>
									<div
										class="invalid-feedback"
										v-for="(error, key) in errors['first_name_en']"
										:key="key"
									>{{error}}</div>
								</div>
							</div>
							<div class="col-3 px-1">
								<div class="form-group">
									<label for="patronymic_en">Middle Name</label>
									<input type="text" class="form-control" name="patronymic_en" v-model="user.patronymic_en" />
								</div>
							</div>
							<div class="col-2 pl-1">
								<div class="form-group">
									<label for="initials_en">Initials</label>
									<input type="text" class="form-control" name="initials_en" v-model="user.initials_en" />
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-4 pr-1">
								<div class="form-group">
									<label for="short_name_en">Short name</label>
									<input
										type="text"
										class="form-control"
										:class="checkError('short_name_en')"
										name="short_name_en"
										v-model="user.short_name_en"
									/>
									<div
										class="invalid-feedback"
										v-for="(error, key) in errors['short_name_en']"
										:key="key"
									>{{error}}</div>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-md-7 pr-1">
								<div class="form-group">
									<label class="h6 mt-2">ORCID</label>
									<input type="text" class="form-control" name="orcid" v-model="user.orcid" />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="card">
					<div class="card-header">
						<h5 class="h5 mb-0">Сведения о месте работы</h5>
					</div>
					<div class="card-body">
						<label class="h6 text-muted mt-2">Степень и звание</label>
						<div class="row">
							<div class="col-md pr-md-1">
								<div class="form-group">
									<label for="degree_ru">На русском</label>
									<input type="text" class="form-control" name="degree_ru" v-model="user.degree_ru" />
								</div>
							</div>
							<div class="col-md pl-md-1">
								<div class="form-group">
									<label for="degree_en">На английском</label>
									<input type="text" class="form-control" name="degree_en" v-model="user.degree_en" />
								</div>
							</div>
						</div>

						<label class="h6 text-muted mt-2">Информация для редколлегии и редсовета</label>
						<div class="row">
							<div class="col-md pr-md-1">
								<div class="form-group">
									<label for="redcol_info_ru">На русском</label>
									<input
										type="text"
										class="form-control"
										name="redcol_info_ru"
										v-model="user.redcol_info_ru"
									/>
								</div>
							</div>
							<div class="col-md pl-md-1">
								<div class="form-group">
									<label for="redcol_info_en">На английском</label>
									<input
										type="text"
										class="form-control"
										name="redcol_info_en"
										v-model="user.redcol_info_en"
									/>
								</div>
							</div>
						</div>

						<label class="h6 text-muted mt-3">Место работы (должность)</label>
						<div class="row">
							<div class="col-12">
								<table class="table table-hover table-responsive-xs" style="width:100%" id="jobsTable">
									<thead class="bg-secondary">
										<th class></th>
										<th class="text-muted">На русском</th>
										<th class="text-muted">На английском</th>
										<th class></th>
									</thead>
									<draggable tag="tbody" handle=".handle" :list="jobs">
										<tr class v-for="(job, index) in jobs" :key="index">
											<td
												class="handle text-secondary my-auto px-2"
												@mouseover="$event.target.classList.add('text-warning')"
												@mouseout="$event.target.classList.remove('text-warning')"
											>
												<i class="fa fa-arrows-v fa-lg"></i>
											</td>
											<td class="p-1">
												<textarea
													type="text"
													class="form-control"
													rows="4"
													name="jobs_ru[]"
													v-model="job.ru"
													@input="saveJobsIntoUser"
												></textarea>
											</td>
											<td class="p-1">
												<textarea
													type="text"
													class="form-control"
													rows="4"
													name="jobs_en[]"
													v-model="job.en"
													@input="saveJobsIntoUser"
												></textarea>
											</td>
											<td class="text-muted">
												<i
													class="fa fa-close"
													@mouseover="$event.target.classList.add('text-danger')"
													@mouseout="$event.target.classList.remove('text-danger')"
													@click="deleteJob(index)"
												></i>
											</td>
										</tr>
									</draggable>
								</table>
								<button
									type="button"
									class="btn btn-outline-info btn-sm"
									@click="addJob"
								>Добавить место работы</button>
							</div>
						</div>
					</div>
				</div>

				<div class="card">
					<div class="card-header">
						<h5 class="title mb-0">Биография</h5>
					</div>
					<div class="card-body">
						<div class="form-group">
							<label class="h6">На русском</label>
							<button
								type="button"
								class="btn btn-outline-primary btn-sm float-right"
								@click="autocompliteDescription('ru')"
							>Заполнить</button>
							<vue-ckeditor
								class="mt-2"
								name="description_ru"
								id="description_ru"
								ref="description_ru"
								v-model="user.description_ru"
							/>
						</div>

						<div class="form-group">
							<label class="h6">На английском</label>
							<button
								type="button"
								class="btn btn-outline-primary btn-sm float-right"
								@click="autocompliteDescription('en')"
							>Заполнить</button>
							<vue-ckeditor
								class="mt-2"
								name="description_en"
								id="description_en"
								ref="description_en"
								v-model="user.description_en"
							/>
						</div>
					</div>
				</div>
			</div>

			<div class="col-md right-sidebar">
				<div class="card mb-1">
					<div class="card-header">
						<h5 class="h5 mb-0">Сохранить изменения</h5>
					</div>
					<div class="card-body">
						<input class="btn btn-primary btn-round btn-block" type="submit" value="Сохранить" />
					</div>
				</div>

				<button
					class="btn btn-link text-danger mb-3"
					v-show="user.id"
					@click.prevent="deleteUser"
				>Удалить автора</button>

				<div class="card" id="photoCard">
					<div class="card-header">
						<h5 class="h5 mb-0">Фотография</h5>
					</div>

					<div class="card-body">
						<file-picker :path="user.avatar"></file-picker>
						<input
							class="form-control"
							type="text"
							id="avatar"
							name="avatar"
							v-model="user.avatar"
							hidden
						/>
					</div>
					<div class="card-footer">
						<button
							v-show="!user.avatar"
							type="button"
							class="popup_selector btn btn-sm btn-primary float-right"
							data-inputid="avatar"
							data-mime="image"
						>Загрузить</button>
						<button
							v-show="user.avatar"
							type="button"
							@click.prevent="clearAvatar"
							class="btn btn-sm btn-outline-primary float-left"
						>Убрать фотографию</button>
					</div>
				</div>

				<div class="card">
					<div class="card-body">
						<div class="form-group mb-0">
							<label>Ссылка на сайте:</label>
							<a :href="user.link" target="_blank" class="ml-1">{{ user.link }}</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import translat from "../translat";
import draggable from "vuedraggable";
import VueCkeditor from "../VueCkeditor.vue";
import jsrender from "jsrender";

// let	jsrender = require('jsrender');

export default {
	components: {
		draggable,
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
			user: {
				email: "",
				first_name_en: "",
				first_name_ru: "",
				full_name: "",
				initials_en: "",
				initials_ru: "",
				last_name_en: "",
				last_name_ru: "",
				patronymic_en: "",
				patronymic_ru: "",
				short_name_en: "",
				short_name_ru: "",
				description_ru: "",
				description_en: "",
				avatar: ""
			},
			jobs: []
		};
	},

	created() {},

	mounted() {
		if (!this.isEmptyObject(this.errors)) {
			this.$notify({
				group: "custom-template",
				text: this.errors.title[0],
				type: "alert-danger",
				duration: -1
			});
		}

		if (!this.isEmptyObject(this.old)) {
			this.user = this.old;
		} else if (this.id !== 0) {
			this.fetch(this.id);
		}
	},

	watch: {
		jobs: function(value, oldValue) {
			this.saveJobsIntoUser();
		}
	},

	methods: {
		fetch(id) {
			axios.get("/api/users/" + id).then(({ data }) => {
				this.user = data.data;
				this.jobs = this.getUserJobs(data.data);
			});
		},

		autocompliteDescription(lang = "ru") {
			var template = require("./descriptionTemplate.html");
			jsrender.templates("tmpl", template);

			if (lang == "ru") {
				if (
					!confirm(
						"ВНИМАНИЕ! Текущая биография на РУССКОМ языке будет удалена. Продолжить?"
					)
				)
					return;
				var data = {
					full_name: this.user.full_name,
					degree: this.user.degree_ru,
					jobs: this.user.jobs_ru,
					orcid: this.user.orcid
				};

				this.user.description_ru = $.render.tmpl(data);
			}

			if (lang == "en") {
				if (
					!confirm(
						"ВНИМАНИЕ! Текущая биография на АНГЛИЙСКОМ языке будет удалена. Продолжить?"
					)
				)
					return;
				var data = {
					full_name: this.user.short_name_en,
					degree: this.user.degree_en,
					jobs: this.user.jobs_en,
					orcid: this.user.orcid
				};

				this.user.description_en = $.render.tmpl(data);
			}
		},

		deleteUser() {
			if (confirm("Удалить пользователя " + this.user.full_name + "?")) {
				document.getElementsByName("_method")[0].value = "DELETE";
				document.getElementById("form").submit();
			}
		},

		checkError(error) {
			if (this.errors.hasOwnProperty(error)) {
				return "is-invalid";
			}
		},

		getUserJobs(user) {
			var res = [];
			if (user.jobs_ru) {
				user.jobs_ru.forEach((el, i) => {
					res.push({
						ru: user.jobs_ru[i],
						en: user.jobs_en[i]
					});
				});
			}
			return res;
		},

		saveJobsIntoUser() {
			var ru = [];
			var en = [];
			this.jobs.forEach(el => {
				ru.push(el.ru);
				en.push(el.en);
			});
			this.user.jobs_ru = ru;
			this.user.jobs_en = en;
		},

		addJob() {
			const new_id = this.jobs.length + 1;
			this.jobs.push({
				// id: new_id,
				ru: "",
				en: ""
			});
		},

		deleteJob(index) {
			if (confirm("Удалить место работы?")) {
				this.jobs.splice(index, 1);
			}
		},

		clearAvatar() {
			this.user.avatar = "";
		},

		autocomplite() {
			const name = this.user.full_name.split(" ", 3);

			this.user.email =
				translat.strtr(
					translat.translat(
						this.user.full_name.toString().toLowerCase()
					),
					{
						" ": "-",
						".": "-"
					}
				) + "@localhost.lo";
			var f_name, l_name, pat, ini, ini_en;
			switch (name.length) {
				case 1:
					l_name = name[0];
					break;
				case 2:
					l_name = name[0];
					name[1] = name[1].split(".");
					if (name[1].length == 1) {
						f_name = name[1][0];
						ini = f_name.split("")[0] + ".";
						ini_en = translat.translat(f_name.split("")[0]) + ".";
					} else {
						f_name = name[1][0];
						pat = name[1][1];
						ini = f_name.split("")[0] + "." + pat.split("")[0] + ".";
						ini_en = translat.translat(f_name.split("")[0]) + ".";
					}
					break;
				case 3:
					l_name = name[0];
					f_name = name[1];
					pat = name[2];
					ini = f_name.split("")[0] + "." + pat.split("")[0] + ".";
					ini_en = translat.translat(f_name.split("")[0]) + ".";
					break;
			}

			if (f_name) {
				this.user.first_name_ru = f_name;
				this.user.first_name_en = translat.translat(f_name);
				this.user.short_name_en = translat.translat(f_name);
			} else {
				this.user.first_name_ru = "";
				this.user.first_name_en = "";
				this.user.short_name_en = "";
			}

			if (l_name) {
				this.user.last_name_ru = l_name;
				this.user.last_name_en = translat.translat(l_name);
				this.user.short_name_en = translat.translat(l_name) + " " + this.user.short_name_en;
			} else {
				this.user.last_name_ru = "";
				this.user.last_name_en = "";
			}

			if (pat) {
				this.user.patronymic_ru = pat;
				// this.user.patronymic_en = translat.translat(pat);
				this.user.patronymic_en = "";
			} else {
				this.user.patronymic_ru = "";
				this.user.patronymic_en = "";
			}
			if (ini) {
				this.user.initials_ru = ini;
				// this.user.initials_en = translat.translat(ini);
				this.user.initials_en = ini_en;
				this.user.short_name_ru = l_name + " " + ini;
				// this.user.short_name_en = translat.translat(l_name) + " " + ini_en;
			} else {
				this.user.initials_ru = "";
				this.user.initials_en = "";
				this.user.short_name_ru = l_name;
				// this.user.short_name_en = translat.translat(l_name);
			}
			this.user.alias = translat.strtr(
				translat.translat(
					this.user.short_name_en.toString().toLowerCase()
				),
				{
					" ": "-",
					".": "-"
				}
			);
		}
	}
};
</script>

<style scope>
/* ADMIN right sidebar */
.right-sidebar {
	-ms-flex: 0 0 300px !important;
	flex: 0 0 300px;
}
</style>