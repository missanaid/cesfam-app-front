import React, {createContext, useEffect, useState} from 'react';
import cesfamApi from '../api/cesfamApi';
import {Merma, MermaResponse} from '../interfaces/appInterfaces';

type MermaContextProps = {
  mermas: Merma[];
  loadMermas: () => Promise<void>;
};

export const MermaContext = createContext({} as MermaContextProps);

export const MermaProvider = ({children}: any) => {
  const [mermas, setMermas] = useState<Merma[]>([]);

  useEffect(() => {
    loadMermas();
  }, []);

  const loadMermas = async () => {
    const resp = await cesfamApi.get<MermaResponse>('/merma');
    setMermas([...resp.data.mermas]);
    console.log(resp.data.mermas);
  };

  return (
    <MermaContext.Provider
      value={{
        mermas,
        loadMermas,
      }}>
      {children}
    </MermaContext.Provider>
  );
};
