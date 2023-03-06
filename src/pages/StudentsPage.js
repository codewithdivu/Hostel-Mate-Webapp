import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
import { StudentPostCard, StudentPostsSort, StudentPostsSearch } from '../sections/@dashboard/students';
// mock
import POSTS from '../_mock/blog';
import { axiosGet } from '../axios/config';
import { apiRoutes } from '../axios/apiRoutes';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

export default function StudentsPage() {
  const [students, setStudents] = useState();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axiosGet(apiRoutes.DETAILS.GET_ALL_USERS_DATA);
        console.log('res...', response);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <>
      <Helmet>
        <title> Dashboard: Blog </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Students
          </Typography>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            Add Student
          </Button>
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <StudentPostsSearch posts={POSTS} />
          <StudentPostsSort options={SORT_OPTIONS} />
        </Stack>

        <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <StudentPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </>
  );
}
