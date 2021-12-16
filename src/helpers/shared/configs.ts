const authConfig = {
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
}

const baseConfig = {
	headers: {
		'content-Type': 'application/x-www-form-urlencoded'
	},
	withCredentials: true
}

export {
	authConfig,
	baseConfig
}