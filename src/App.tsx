import { useState } from 'react';
import './App.css';
import ExampleData from './Map';
import { useGetMachines } from './hooks/useGetMachines';
import { LatLngExpression } from 'leaflet';

function App() {
  const [ selectedMachineId, setSelectedMachineId ] = useState<string>()
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
            <h3>Machine details</h3>
            <dl>
              <dt>id:</dt>
              <dd>{selectedMachine.id}</dd>
              <dt>install date:</dt>
              <dd>{selectedMachine.install_date}</dd>
              <dt>last maintenance:</dt>
              <dd>{selectedMachine.last_maintenance}</dd>
              <dt>type:</dt>
              <dd>{selectedMachine.machine_type}</dd>
              <dt>latitude:</dt>
              <dd>{selectedMachine.latitude}</dd>
              <dt>longitude:</dt>
              <dd>{selectedMachine.longitude}</dd>
              <dt>status:</dt>
              <dd>{selectedMachine.status}</dd>
            </dl>
          </aside>
        )}
        <main>
          {markers.length > 0 && (
            <ExampleData
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
