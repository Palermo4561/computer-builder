import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URL;

export async function fetchData(endpoint) {
  try {
    const response = await axios.get(API_URL + endpoint);
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
