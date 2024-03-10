import { useState, useEffect } from 'react';
import Ajv from "ajv";
import { robustFetch } from '../utilities';
import { machineDetailsResponseschema } from '../schemas';
import { DetailedMachine } from '../types';

const ajv = new Ajv();

const validateMachineDetailsResponse = ajv.compile(machineDetailsResponseschema);

export function useGetMachineDetails(machineId: string | undefined) {
  const [machine, setMachine] = useState<DetailedMachine>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    
    setError('');
    setLoading(true);
     
    if(machineId) {
      robustFetch(`https://codingcase.bluesky-ff1656b7.westeurope.azurecontainerapps.io/api/v1/machines/${machineId}`, signal).then((response) => {
        
        if (!validateMachineDetailsResponse(response)) throw new Error('Invalid data structure');
  
        const structuredData = response.data as DetailedMachine;
  
        setError('');
        setMachine(structuredData);
        setLoading(false);
      }).catch(() => {
        setLoading(false);
        setError('😤 There was an error and we could not fetch the machine details from a 3rd party API');
      });
    } else {
      setMachine(undefined);
    }

    // Cleanup
    return () => {
      abortController.abort();
    };
    
  }, [machineId]);

  return { machine, loading, error };
}