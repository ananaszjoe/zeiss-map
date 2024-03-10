import { useState, useEffect } from 'react';
import Ajv from "ajv";
import { robustFetch } from '../utilities';
import { machineListResponseSchema } from '../schemas';
import { Machine } from '../types';

const ajv = new Ajv();

const validateMachineListResponse = ajv.compile(machineListResponseSchema);

export function useGetMachines() {
  const [machines, setMachines] = useState<Machine[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    
    setError('');
    setLoading(true);
     
    robustFetch('https://codingcase.bluesky-ff1656b7.westeurope.azurecontainerapps.io/api/v1/machines', signal).then((response) => {
      if (!validateMachineListResponse(response)) throw new Error('Invalid data structure');

      const structuredData = response.data as Machine[];

      setError('');
      setMachines(structuredData);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
      setError('😤 There was an error and we could not fetch the list of machines from a 3rd party API');
    });

    // Cleanup
    return () => {
      abortController.abort();
    };
    
  }, []);

  return { machines, loading, error };
}