import React from 'react';
import { Typography } from '@mui/material';
import { gql, useQuery } from '@apollo/client';

export default function Home() {
  const { data, loading, error } = useQuery(gql`
    query AllBoard {
      allBoards {
        id
        name
      }
    }
  `);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  return (
    <>
      {data.allBoards.map(({ id, name }: { id: number; name: string }) => (
        <Typography key={name}>{`id: ${id}, name: ${name}`}</Typography>
      ))}
    </>
  );
}
