import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://last-try-blue.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

// POST

export const axiosPost = async (url, data) => {
  const response = {};
  try {
    const result = await axiosApi.post(url, data);
    response.status = true;
    response.data = result.data;
  } catch (e) {
    if (e.response) {
      if (e.response.status === 400) {
        response.status = false;
        response.message = e.response.data.message;
      } else if (e.response.status === 500) {
        response.status = false;
        response.message = 'Internal server error';
      } else {
        response.status = false;
        response.message = 'something went wrong';
      }
    }
  }
  return response;
};

// GET

export const axiosGet = async (url) => {
  const response = {};

  try {
    const result = await axiosApi.get(url);
    response.status = true;
    response.data = result.data;
  } catch (e) {
    if (e.response.status === 400) {
      response.status = false;
      response.message = e.response.data.message;
    } else if (e.response.status === 500) {
      response.status = false;
      response.message = 'Internal server error';
    } else {
      response.status = false;
      response.message = 'something went wrong';
    }
  }
  return response;
};

// PATCH

export const axiosPatch = async (url, data) => {
  const response = {};
  try {
    const result = await axiosApi.patch(url, data);
    response.status = true;
    response.data = result.data;
  } catch (e) {
    if (e.response) {
      if (e.response.status === 400) {
        response.status = false;
        response.message = e.response.data.message;
      } else if (e.response.status === 500) {
        response.status = false;
        response.message = 'Internal server error';
      } else {
        response.status = false;
        response.message = 'something went wrong';
      }
    }
  }
  return response;
};

// PUT

export const axiosPut = async (url, data) => {
  const response = {};
  try {
    const result = await axiosApi.put(url, data);
    response.status = true;
    response.data = result.data;
  } catch (e) {
    if (e.response) {
      if (e.response.status === 400) {
        response.status = false;
        response.message = e.response.data.message;
      } else if (e.response.status === 500) {
        response.status = false;
        response.message = 'Internal server error';
      } else {
        response.status = false;
        response.message = 'something went wrong';
      }
    }
  }
  return response;
};

// DELETE

export const axiosDelete = async (url, data) => {
  const response = {};
  try {
    const result = await axiosApi.delete(url, data);
    response.status = true;
    response.data = result.data;
  } catch (e) {
    if (e.response) {
      if (e.response.status === 400) {
        response.status = false;
        response.message = e.response.data.message;
      } else if (e.response.status === 500) {
        response.status = false;
        response.message = 'Internal server error';
      } else {
        response.status = false;
        response.message = 'something went wrong';
      }
    }
  }
  return response;
};
