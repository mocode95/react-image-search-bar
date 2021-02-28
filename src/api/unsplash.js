import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID 7RnnOGEpYQbMJk9sBpG3ZXxbktQpAUkvWvkV4UWP0ho",
	},
});
