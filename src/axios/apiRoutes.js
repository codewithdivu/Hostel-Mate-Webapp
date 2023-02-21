export const apiRoutes = {
  AUTH: {
    ADMIN_REGISTER: '/api/v1/admin/register',
    ADMIN_LOGIN: '/api/v1/admin/login',
    ADMIN_LOGOUT: '/api/v1/admin/logout',
    ADMIN_FORGOT_PASSWORD: '/api/v1/admin/password/forgot',
    ADMIN_RESET_PASSWORD: '/api/v1/admin/password/reset/:id',
    USER_REGISTER: '/api/v1/register',
    USER_LOGIN: '/api/v1/login',
    USER_LOGOUT: '/api/v1/logout',
    USER_FORGOT_PASSWORD: '/api/v1/password/forgot',
    USER_RESET_PASSWORD: '/api/v1/password/reset/:id',
  },

  ENTRY: {
    CREATE_ENTRY: '/api/v1/mark/entry',
    GET_ALL_ENTRIES: '/api/v1/get/entry?enroll=200160107111&keyword=S&page=1&status=pending',
  },

  ANNOUCEMENTS: {
    CREATE_ANNOUCEMENT: '/api/v1/create/post',
    GET_ALL_ANNOUCEMENT: '/api/v1/get/post',
    UPDATE_ANNOUCEMENT: '/api/v1/update/post/:id',
    DELETE_ANNOUCEMENT: '/api/v1/delete/post/:id',
  },

  DETAILS: {
    UPDATE_USER_DATA: '/update/user',
    GET_USER_DATA: '/api/v1/me',
    GET_ALL_USERS_DATA: '/api/v1/admin/users',
    DELETE_USER: '/api/v1/admin/delete',
  },
};
