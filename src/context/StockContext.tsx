import React, {createContext, useEffect, useState} from 'react';
import cesfamApi from '../api/cesfamApi';
import {Medicamento, MedicamentoResponse} from '../interfaces/appInterfaces';

type StockContextProps = {
  medicamentos: Medicamento[];
  loadMedicamentos: () => Promise<void>;
};

export const StockContext = createContext({} as StockContextProps);

export const StockProvider = ({children}: any) => {
  const [medicamentos, setMedicamentos] = useState<Medicamento[]>([]);

  useEffect(() => {
    loadMedicamentos();
  }, []);

  const loadMedicamentos = async () => {
    const resp = await cesfamApi.get<MedicamentoResponse>('/stock');
    setMedicamentos([...resp.data.medicamentos]);
  };

  return (
    <StockContext.Provider
      value={{
        medicamentos,
        loadMedicamentos,
      }}>
      {children}
    </StockContext.Provider>
  );
};
