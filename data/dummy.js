var introComponents = [
	{id: 1, class: "info", label: "Total Clients", value: "265"},
	{id: 2, class: "success", label: "Active Services", value: "65"},
	{id: 3, class: "alert", label: "Late Payment", value: "25"},
	{id: 4, class: "warning", label: "Suspend Services", value: "15"},
	{id: 5, class: "danger", label: "Fraud Clients", value: "12"},
	{id: 6, class: "light", label: "Client Closed", value: "36"}
];

var sideNavigation = [
	{id: 1, class: "fa-home", label: "Dashboard", url: "#", info: '', active: ''},
	{id: 2, class: "fa-comments", label: "Messeger", url: "#", info: '2', active: ''},
	{id: 3, class: "fa-user", label: "Clients", url: "#", info: '', active: 'active'},
	{id: 4, class: "fa-tag", label: "Billings / Orders", url: "#", info: '', active: ''},
	{id: 5, class: "fa-question-circle", label: "Support", url: "#", info: '', active: ''},
	{id: 6, class: "fa-file-text", label: "Reports", url: "#", info: '3', active: ''},
	{id: 7, class: "fa-cog", label: "Setup", url: "#", info: '', active: ''}
];

var tableHeader = [
	{id: 1, label: "", class: ""},
	{id: 2, label: "", class: ""},
	{id: 3, label: "Last Name", class: ""},
	{id: 4, label: "First Name", class: ""},
	{id: 5, label: "E-mail", class: ""},
	{id: 6, label: "Open TIckets", class: "text-center"},
	{id: 7, label: "Id of Clients", class: "text-center"},
	{id: 8, label: "# of Services", class: "text-center"},
	{id: 9, label: "Status", class: "text-center"}
];

var tableData = [
	{id: 1, data: [
			{id: 1, component: "bulkCheckbox", value: "selector", class: ""},
			{id: 2, component: "image", value: "http://placehold.it/30x30", class: ""},
			{id: 3, component: "text", value: "Denier", class: ""},
			{id: 4, component: "text", value: "Nathalie", class: ""},
			{id: 5, component: "text", value: "nathalie.denier@gmail.com", class: ""},
			{id: 6, component: "text", value: "3", class: "text-center"},
			{id: 7, component: "text", value: "492955", class: "text-center"},
			{id: 8, component: "text", value: "1 Services", class: "text-center"},
			{id: 9, component: "label", value: "active", class: "text-center"}
		]
	},
	{id: 2, data: [
			{id: 1, component: "bulkCheckbox", value: "selector", class: ""},
			{id: 2, component: "image", value: "http://placehold.it/30x30", class: ""},
			{id: 3, component: "text", value: "Denier", class: ""},
			{id: 4, component: "text", value: "Nathalie", class: ""},
			{id: 5, component: "text", value: "nathalie.denier@gmail.com", class: ""},
			{id: 6, component: "text", value: "3", class: "text-center"},
			{id: 7, component: "text", value: "492955", class: "text-center"},
			{id: 8, component: "text", value: "1 Services", class: "text-center"},
			{id: 9, component: "label", value: "suspend", class: "text-center"}
		]
	},
	{id: 3, data: [
			{id: 1, component: "bulkCheckbox", value: "selector", class: ""},
			{id: 2, component: "image", value: "http://placehold.it/30x30", class: ""},
			{id: 3, component: "text", value: "Denier", class: ""},
			{id: 4, component: "text", value: "Nathalie", class: ""},
			{id: 5, component: "text", value: "nathalie.denier@gmail.com", class: ""},
			{id: 6, component: "text", value: "3", class: "text-center"},
			{id: 7, component: "text", value: "492955", class: "text-center"},
			{id: 8, component: "text", value: "1 Services", class: "text-center"},
			{id: 9, component: "label", value: "fraud", class: "text-center"}
		]
	},
	{id: 4, data: [
			{id: 1, component: "bulkCheckbox", value: "selector", class: ""},
			{id: 2, component: "image", value: "http://placehold.it/30x30", class: ""},
			{id: 3, component: "text", value: "Denier", class: ""},
			{id: 4, component: "text", value: "Nathalie", class: ""},
			{id: 5, component: "text", value: "nathalie.denier@gmail.com", class: ""},
			{id: 6, component: "text", value: "3", class: "text-center"},
			{id: 7, component: "text", value: "492955", class: "text-center"},
			{id: 8, component: "text", value: "1 Services", class: "text-center"},
			{id: 9, component: "label", value: "suspend", class: "text-center"}
		]
	},
	{id: 5, data: [
			{id: 1, component: "bulkCheckbox", value: "selector", class: ""},
			{id: 2, component: "image", value: "http://placehold.it/30x30", class: ""},
			{id: 3, component: "text", value: "Denier", class: ""},
			{id: 4, component: "text", value: "Nathalie", class: ""},
			{id: 5, component: "text", value: "nathalie.denier@gmail.com", class: ""},
			{id: 6, component: "text", value: "3", class: "text-center"},
			{id: 7, component: "text", value: "492955", class: "text-center"},
			{id: 8, component: "text", value: "1 Services", class: "text-center"},
			{id: 9, component: "label", value: "active", class: "text-center"}
		]
	},
	{id: 6, data: [
			{id: 1, component: "bulkCheckbox", value: "selector", class: ""},
			{id: 2, component: "image", value: "http://placehold.it/30x30", class: ""},
			{id: 3, component: "text", value: "Denier", class: ""},
			{id: 4, component: "text", value: "Nathalie", class: ""},
			{id: 5, component: "text", value: "nathalie.denier@gmail.com", class: ""},
			{id: 6, component: "text", value: "3", class: "text-center"},
			{id: 7, component: "text", value: "492955", class: "text-center"},
			{id: 8, component: "text", value: "1 Services", class: "text-center"},
			{id: 9, component: "label", value: "active", class: "text-center"}
		]
	},
	{id: 7, data: [
			{id: 1, component: "bulkCheckbox", value: "selector", class: ""},
			{id: 2, component: "image", value: "http://placehold.it/30x30", class: ""},
			{id: 3, component: "text", value: "Denier", class: ""},
			{id: 4, component: "text", value: "Nathalie", class: ""},
			{id: 5, component: "text", value: "nathalie.denier@gmail.com", class: ""},
			{id: 6, component: "text", value: "3", class: "text-center"},
			{id: 7, component: "text", value: "492955", class: "text-center"},
			{id: 8, component: "text", value: "1 Services", class: "text-center"},
			{id: 9, component: "label", value: "active", class: "text-center"}
		]
	},
	{id: 8, data: [
			{id: 1, component: "bulkCheckbox", value: "selector", class: ""},
			{id: 2, component: "image", value: "http://placehold.it/30x30", class: ""},
			{id: 3, component: "text", value: "Denier", class: ""},
			{id: 4, component: "text", value: "Nathalie", class: ""},
			{id: 5, component: "text", value: "nathalie.denier@gmail.com", class: ""},
			{id: 6, component: "text", value: "3", class: "text-center"},
			{id: 7, component: "text", value: "492955", class: "text-center"},
			{id: 8, component: "text", value: "1 Services", class: "text-center"},
			{id: 9, component: "label", value: "active", class: "text-center"}
		]
	}
];