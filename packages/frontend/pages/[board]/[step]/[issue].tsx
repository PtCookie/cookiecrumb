import React from 'react';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';

export default function Issue() {
  const router = useRouter();
  const { board, step, issue } = router.query;

  return (
    <>
      <Typography>board: {board}</Typography>
      <Typography>step: {step}</Typography>
      <Typography>issue: {issue}</Typography>
    </>
  );
}
