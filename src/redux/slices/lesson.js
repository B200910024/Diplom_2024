import { createSlice } from '@reduxjs/toolkit';
// utils
import { axiosGeneral } from '../../utils/axios';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: true,
  error: null,
  lessonList: [],
};

const slice = createSlice({
  name: 'lesson',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GETTING RATING LIST
    getLessonList(state, action) {
      state.isLoading = false;
      state.lessonList = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function fetchLessonList(body = {}) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axiosGeneral.get('/lessons', body);
      dispatch(slice.actions.getLessonList(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

//  ----------------------------------------------------------------------

export function createUser(body, isOwner, isAdmin) {
  const request_body = new FormData();

  request_body.append('AimagID', body?.aimag?.id);
  request_body.append('DistrictID', body?.district?.id);
  request_body.append('KhorooID', body?.khoroo?.id);
  request_body.append('Email', body?.email);
  request_body.append('Password', body?.password);
  request_body.append('FirstName', body?.first_name);
  request_body.append('LastName', body?.last_name);
  request_body.append('PhoneNumber', body?.phone_number);
  request_body.append('RegisterNumber', body?.register_number);
  request_body.append('Image', body?.image);
  if (isAdmin) {
    request_body.append('RoleID', body?.role?.id);
  }

  if (isOwner) {
    request_body.append('RoleID', body?.company_role?.role_id);
    request_body.append('CompanyID', body?.company?.id);
    request_body.append('CompanyRoleID', body?.company_role?.id);
    request_body.append('School', body?.school);
    request_body.append('Degree', body?.degree);
    request_body.append('Occupation', body?.occupation);
  }

  return async (dispatch) => {
    try {
      const response = await axiosGeneral.post('/create_user', request_body);
      return response;
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      return error;
    }
  };
}

// // ----------------------------------------------------------------------

export function editUser(body, isOwner) {
  const userId = body?.id;
  const request_body = new FormData();

  request_body.append('AimagID', body?.aimag?.id);
  request_body.append('DistrictID', body?.district?.id);
  request_body.append('KhorooID', body?.khoroo?.id);
  request_body.append('Email', body?.email);
  request_body.append('Password', body?.password);
  request_body.append('FirstName', body?.first_name);
  request_body.append('LastName', body?.last_name);
  request_body.append('PhoneNumber', body?.phone_number);
  request_body.append('RegisterNumber', body?.register_number);
  request_body.append('Image', body?.image);
  request_body.append('RoleID', body?.role?.id);

  if (isOwner) {
    request_body.append('CompanyID', body?.company?.id);
  }

  return async (dispatch) => {
    try {
      const response = await axiosGeneral.put(`/edit_user/${userId}`, request_body);
      return response;
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      return error;
    }
  };
}

// // ----------------------------------------------------------------------

export function deleteUser(id) {
  return async (dispatch) => {
    try {
      const response = await axiosGeneral.delete(`/delete_user/${id}`);
      return response;
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      return error;
    }
  };
}

// // ----------------------------------------------------------------------

export function fetchUserListFordropdown(id) {
  return async (dispatch) => {
    try {
      const response = await axiosGeneral.get(`/get_user_list_fordropdown/${id}`);
      dispatch(slice.actions.getSimpleUserList(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// // ----------------------------------------------------------------------

export function fetchCompanyUserListForDropdown() {
  return async (dispatch) => {
    try {
      const response = await axiosGeneral.get(`/get_company_user_list_fordropdown`);
      dispatch(slice.actions.getCompanyUserList(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// // ----------------------------------------------------------------------
