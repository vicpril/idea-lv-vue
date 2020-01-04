<template>
	<form method="POST" id="formExport">
		<input type="hidden" name="_token" :value="csrf" />
		<div class="card">
			<div class="card-header d-flex">
				<h5 class="mr-1 my-auto">Выгрузка статей в шаблоны</h5>
			</div>
			<div class="card-body text-center py-4">
				<div v-if="exportDisabled" class="text-muted">Выберите статьи для выгрузки из списка статей тома</div>
				<div v-if="!exportDisabled" class="text-muted mb-2">
					Выбрано статей:
					<strong>{{ articles.length }}</strong>
				</div>

				<div v-if="!exportDisabled" class="btn-group float-center">
					<button
						id="tooltip-button"
						type="button"
						class="btn btn-success dropdown-toggle"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
						:disabled="exportDisabled"
					>Выгрузить</button>
					<div class="dropdown-menu">
						<button type="submit" class="dropdown-item" @click.prevent="doExport('rinc')">РИНЦ</button>
						<button type="submit" class="dropdown-item" @click.prevent="doExport('content')">Содержание</button>
						<button type="submit" class="dropdown-item" @click.prevent="doExport('article')">Статья</button>
						<button type="submit" class="dropdown-item" @click.prevent="doExport('authors')">Наши авторы</button>
						<button
							type="submit"
							class="dropdown-item"
							@click.prevent="doExport('emails')"
						>Список E-mail'ов</button>
					</div>
				</div>
			</div>
			<div class="card-body d-none">
				<div class="form-group">
					<label class="h6">Название журнала</label>
					<input type="text" class="form-control" v-model="exportIssue.title" name="title" />
				</div>
				<div class="form-group">
					<label class="h6">
						ISSN
						<i
							v-b-tooltip.hover
							title="Если ISSN не введен, то он будет взят из DOI статей. Если ни одна статья не содержит DOI, то ISSN выводиться не будет."
							class="fa fa-info-circle ml-2 text-secondary"
						></i>
					</label>
					<input
						type="text"
						class="form-control"
						v-model="exportIssue.issn"
						placeholder="хххх-хххх"
						name="issn"
					/>
				</div>

				<div class="form-group">
					<label class="h6">Выгружать e-mail</label>
					<b-form-checkbox
						id="export-emails"
						v-model="exportIssue.emails"
						name="emails"
					>Отображать email у автора, если он редактировался</b-form-checkbox>
				</div>
				<input name="issue" :value="issue" hidden />
				<input
					v-for="(article, index) in articles"
					:key="index"
					name="articles[]"
					:value="article"
					hidden
				/>
				<hr />
				<div class="btn-group float-right">
					<button
						id="tooltip-button"
						type="button"
						class="btn btn-outline-info dropdown-toggle"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
						:disabled="exportDisabled"
					>Выгрузить</button>
					<div class="dropdown-menu">
						<button type="submit" class="dropdown-item" @click.prevent="doExport('rinc')">РИНЦ</button>
						<button type="submit" class="dropdown-item" @click.prevent="doExport('content')">Содержание</button>
						<button type="submit" class="dropdown-item" @click.prevent="doExport('article')">Статья</button>
						<button type="submit" class="dropdown-item" @click.prevent="doExport('authors')">Наши авторы</button>
						<button
							type="submit"
							class="dropdown-item"
							@click.prevent="doExport('emails')"
						>Список E-mail'ов</button>
					</div>
					<!-- <b-tooltip target="tooltip-button">Выберите статьи для выгрузки</b-tooltip> -->
				</div>
			</div>
		</div>
	</form>
</template>

<script>
export default {
	props: {
		issue: {
			type: Number
		},
		articles: {
			type: Array
		}
	},

	data() {
		return {
			exportIssue: {
				title: "Журнал «Идеи и идеалы»",
				issn: "",
				emails: true,
				disabledInfo: false
			},
			csrf: document
				.querySelector('meta[name="csrf-token"]')
				.getAttribute("content")
		};
	},

	computed: {
		exportDisabled() {
			return !this.articles.length > 0;
		}
	},

	methods: {
		doExport(action) {
			// var data = Object.assign({}, this.exportIssue);
			// data.articles = this.articles;
			// axios.post("/admin/export/" + action, data);
			document.getElementById("formExport").action =
				"/admin/export/" + action;
			document.getElementById("formExport").submit();
		}
	}
};
</script>

