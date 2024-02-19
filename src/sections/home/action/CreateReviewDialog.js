import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
// Mui
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { TimePicker } from '@mui/x-date-pickers';
// Yup
import * as Yup from 'yup';
// hooks
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// redux
import { useDispatch, useSelector } from '../../../redux/store';
import teacher, {
  fetchFamousTeacherList,
  fetchTeacherList,
  searchTeacher,
} from '../../../redux/slices/teacher';
// components
import Iconify from '../../../components/iconify';
import FormProvider, {
  RHFAutocomplete,
  RHFSwitch,
  RHFTextField,
  RHFUpload,
} from '../../../components/hook-form';
import Scrollbar from '../../../components/scrollbar/Scrollbar';
import { PATH_PAGE } from '../../../routes/paths';

//-------------------------------------------------------------------------------------

CreateReviewDialog.propTypes = {
  actionType: PropTypes.string,
  changeDialogStatus: PropTypes.func,
};

//-------------------------------------------------------------------------------------

export default function CreateReviewDialog({ actionType, changeDialogStatus }) {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [isOpen, setOpen] = useState(false);
  const [isSubmitLoading, setSubmitLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const { teacherList, famousTeacherList, searchResult } = useSelector((state) => state.teacher);

  const methods = useForm({});

  const { reset, handleSubmit, watch, setValue } = methods;

  useEffect(() => {
    dispatch(fetchTeacherList());
    dispatch(fetchFamousTeacherList());
    if (actionType === 'create' || actionType === 'edit') {
      setOpen(true);
    } else {
      setOpen(false);
    }
    //   reset(defaultValues);
  }, [actionType, dispatch]);

  const values = watch();

  const handleClose = () => {
    setOpen(false);
    changeDialogStatus('');
  };

  const onSubmit = async (data) => {
    const name = data?.teacher?.firstName;

    console.log(name, 'name');

    const response = await dispatch(searchTeacher(data));

    console.log(response, 'response');

    push(PATH_PAGE.teacher(name));
  };

  const buttonTitle = {
    edit: 'Засах',
    create: 'Нэмэх',
  };

  const buttonIcon = {
    edit: 'material-symbols:edit-outline',
    create: 'akar-icons:send',
  };

  console.log(teacherList, 'haha');

  // rendering -----------------------------------------------------------------------------------------------

  return (
    <Dialog fullWidth maxWidth="sm" open={isOpen} onClose={handleClose}>
      <DialogTitle>Хайх</DialogTitle>
      <Scrollbar sx={{ maxHeight: 200 }}>
        <DialogContent dividers>
          <FormProvider methods={methods}>
            <Stack gap={3}>
              <RHFAutocomplete
                freeSolo
                name="teacher"
                label="Багш"
                size="small"
                ChipProps={{ size: 'small' }}
                options={teacherList}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                getOptionLabel={(option) => option.firstName}
                sx={{ my: 1 }}
              />
            </Stack>
          </FormProvider>
        </DialogContent>
      </Scrollbar>
      <DialogActions>
        <LoadingButton
          variant="contained"
          loading={isSubmitLoading}
          onClick={handleSubmit(onSubmit)}
          startIcon={<Iconify icon={buttonIcon[actionType]} />}
          size="small"
          sx={{
            '&:hover': {
              backgroundColor: 'transparent',
              color: '#52BBD3',
            },
          }}
        >
          Хайх{' '}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}
