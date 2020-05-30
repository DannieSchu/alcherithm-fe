import React from 'react';
import { useLoading } from './AuthProvider';
import Loading from '../components/Loading/Loading';

export const useGetCombinedLoading = contentLoading => {
  const authLoading = useLoading();

  if(contentLoading || authLoading) return <Loading />;
};
