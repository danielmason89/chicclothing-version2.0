import axios from "axios";

const BASE_URL = "http://localhost:9000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzBmMGJjNjNlZTlmODQ3YzU2NGQ0MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Njk5NDM3NCwiZXhwIjoxNjU3MjUzNTc0fQ.XS5hMSJRPWm95N4neBmz8nccjGbWLa_pbuxK-uWj5a0";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
