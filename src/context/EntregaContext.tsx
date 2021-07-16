import React, {createContext, useEffect, useState} from 'react';
import cesfamApi from '../api/cesfamApi';
import {Entrega, EntregaResponse} from '../interfaces/appInterfaces';

type EntregaContextProps = {
  entregas: Entrega[];
  loadEntregas: () => Promise<void>;
};

export const EntregaContext = createContext({} as EntregaContextProps);

export const EntregaProvider = ({children}: any) => {
  const [entregas, setEntregas] = useState<Entrega[]>([]);

  useEffect(() => {
    loadEntregas();
  }, []);

  const loadEntregas = async () => {
    const resp = await cesfamApi.get<EntregaResponse>('/entrega');
    setEntregas([...resp.data.entregas]);
    console.log(resp.data.entregas);
  };

  return (
    <EntregaContext.Provider
      value={{
        entregas,
        loadEntregas,
      }}>
      {children}
    </EntregaContext.Provider>
  );
};
