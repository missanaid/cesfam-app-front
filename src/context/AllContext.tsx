import React, {createContext, useEffect, useState} from 'react';
import cesfamApi from '../api/cesfamApi';
import {
  Merma,
  MermaResponse,
  Entrega,
  EntregaResponse,
  Receta,
  RecetaResponse,
  Medicamento,
  MedicamentoResponse,
} from '../interfaces/appInterfaces';

type AllContextProps = {
  mermas: Merma[];
  loadMermas: () => Promise<void>;
  entregas: Entrega[];
  loadEntregas: () => Promise<void>;
  recetas: Receta[];
  loadRecetas: () => Promise<void>;
  medicamentos: Medicamento[];
  loadMedicamentos: () => Promise<void>;
};

export const AllContext = createContext({} as AllContextProps);

export const AllProvider = ({children}: any) => {
  const [mermas, setMermas] = useState<Merma[]>([]);
  const [entregas, setEntregas] = useState<Entrega[]>([]);
  const [recetas, setRecetas] = useState<Receta[]>([]);
  const [medicamentos, setMedicamentos] = useState<Medicamento[]>([]);

  useEffect(() => {
    loadMermas();
    loadEntregas();
    loadRecetas();
    loadMedicamentos();
  }, []);

  const loadMermas = async () => {
    const resp = await cesfamApi.get<MermaResponse>('/merma');
    setMermas([...resp.data.mermas]);
    console.log(resp.data.mermas);
  };
  const loadEntregas = async () => {
    const resp = await cesfamApi.get<EntregaResponse>('/entrega');
    setEntregas([...resp.data.entregas]);
    console.log(resp.data.entregas);
  };
  const loadRecetas = async () => {
    const resp = await cesfamApi.get<RecetaResponse>('/receta');
    setRecetas([...resp.data.recetas]);
    console.log(resp.data.recetas);
  };
  const loadMedicamentos = async () => {
    const resp = await cesfamApi.get<MedicamentoResponse>('/stock');
    setMedicamentos([...resp.data.medicamentos]);
    console.log(resp.data.medicamentos);
  };

  return (
    <AllContext.Provider
      value={{
        mermas,
        entregas,
        recetas,
        medicamentos,
        loadEntregas,
        loadRecetas,
        loadMermas,
        loadMedicamentos,
      }}>
      {children}
    </AllContext.Provider>
  );
};
