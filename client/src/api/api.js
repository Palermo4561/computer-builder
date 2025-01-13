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

export async function addComponent(component) {
  try {
    await axios.post(API_URL + '/components', component, {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error(e);
    throw e;
  }
}
