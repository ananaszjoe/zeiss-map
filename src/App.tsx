import { useState } from 'react';
import './App.css';
import MachineMap from './components/MachineMap';
import { useGetMachines } from './hooks/useGetMachines';
import { LatLngExpression } from 'leaflet';
import MachineSummary from './components/MachineSummary';
import { useGetMachineDetails } from './hooks/useGetMachineDetails';
import MachineEvents from './components/MachineEvents';

function App() {
  const [ selectedMachineId, setSelectedMachineId ] = useState<string>();
  const { machine: detailedMachine } = useGetMachineDetails(selectedMachineId);
  const { machines } = useGetMachines();

  const handleMachineSelect = (id: string) => {
    setSelectedMachineId(id);
  }

  const markers = machines.map(entry => ({
    id: entry.id,
    coords: [entry.latitude, entry.longitude] as LatLngExpression,
    selected: selectedMachineId === entry.id,
    status: entry.status
  }));

  const selectedMachine = machines.find(entry => entry.id === selectedMachineId);
  
  return (
    <>
      <header>
        <h1>ZEISS MachineStream Machines</h1>
      </header>

      <section>
        {!!selectedMachine && markers.length > 0 && (
          <aside>
            <MachineSummary machine={selectedMachine} />
            {detailedMachine && (
              <MachineEvents events={detailedMachine.events} />
            )}
          </aside>
        )}
        <main>
          {markers.length > 0 && (
            <MachineMap
              markers={markers}
              onSelect={handleMachineSelect}
            />
          )}
        </main>
      </section>
    </>
  )
}

export default App
