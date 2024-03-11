import { ReactNode, createContext, useEffect, useState } from 'react';
import { Socket } from 'phoenix';
import { UniversalMachineEvent } from './types';

export type eventsContextType = {
  events: UniversalMachineEvent[];
}

const EventsContext = createContext<eventsContextType>({events: []});

const EventsProvider = ({ children }: {children: ReactNode}) => {
  const [ events, setEvents ] = useState<any>([]);

  useEffect(() => {
    const socket = new Socket("wss://codingcase.bluesky-ff1656b7.westeurope.azurecontainerapps.io/socket/");
    socket.connect();

    const channel = socket.channel('events', {});

    channel.join();

    channel.on("new", (event) => {
      setEvents((prevEvents: any) => [...prevEvents, event]);
    });

    return () => {
      channel.leave();
    }
  }, []);

  return (
    <EventsContext.Provider value={{ events }}>{children}</EventsContext.Provider>
  );
};

export { EventsContext, EventsProvider };