import React from 'react';
import Loading from '../components/Loading/Loading';
import { useLoading } from './AuthProvider';

export const useGetCombinedLoading = contentLoading => {
  const authLoading = useLoading();

  if(authLoading || contentLoading) return <Loading />;
};
