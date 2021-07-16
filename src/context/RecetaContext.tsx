import React, {createContext, useEffect, useState} from 'react';
import cesfamApi from '../api/cesfamApi';
import {Receta, RecetaResponse} from '../interfaces/appInterfaces';

type RecetaContextProps = {
  recetas: Receta[];
  loadRecetas: () => Promise<void>;
};

export const RecetaContext = createContext({} as RecetaContextProps);

export const RecetaProvider = ({children}: any) => {
  const [recetas, setRecetas] = useState<Receta[]>([]);

  useEffect(() => {
    loadRecetas();
  }, []);

  const loadRecetas = async () => {
    const resp = await cesfamApi.get<RecetaResponse>('/receta');
    setRecetas([...resp.data.recetas]);
    console.log(resp.data.recetas);
  };

  return (
    <RecetaContext.Provider
      value={{
        recetas,
        loadRecetas,
      }}>
      {children}
    </RecetaContext.Provider>
  );
};
