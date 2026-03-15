import axios from "axios";

export const mainApi = axios.create({
	baseURL : "http://localhost:8899/api",
    headers: {
    'Content-Type': 'application/json',
  },
})