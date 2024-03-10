export type Machine = {
  id: string;
  status: string;
  machine_type: string;
  longitude: number;
  latitude: number;
  last_maintenance: string;
  install_date: string;
  floor: number;
  events?: {
    timestamp: string,
    status: string,
  }
}

export type MachineEvent = {
  timestamp: string,
  status: string
}

export type DetailedMachine = Machine & {
  events: MachineEvent[];
};