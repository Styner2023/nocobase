import { Spin } from 'antd';
import React, { createContext } from 'react';
import { Redirect } from 'react-router-dom';
import { useRequest } from '../api-client';

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = (props) => {
  const result = useRequest({
    url: 'users:check',
  });
  if (result.loading) {
    return <Spin />;
  }
  if (result.error) {
    return <Redirect to={'/signin'} />;
  }
  return <CurrentUserContext.Provider value={result}>{props.children}</CurrentUserContext.Provider>;
};
