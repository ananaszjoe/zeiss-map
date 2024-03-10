import { Machine } from "../types";
import moment from 'moment';

export default function MachineSummary({machine}: {machine: Machine}) {

  const installHuman = moment(machine.install_date).fromNow();
  const maintenanceHuman = moment(machine.last_maintenance).fromNow();

  return (
    <>
      <h3>Machine details</h3>
      <dl>
        <dt>id:</dt>
        <dd>{machine.id}</dd>
        <dt>install date:</dt>
        <dd title={machine.install_date}>{installHuman}</dd>
        <dt>last maintenance:</dt>
        <dd title={machine.last_maintenance}>{maintenanceHuman}</dd>
        <dt>type:</dt>
        <dd>{machine.machine_type}</dd>
        <dt>latitude:</dt>
        <dd>{machine.latitude}</dd>
        <dt>longitude:</dt>
        <dd>{machine.longitude}</dd>
        <dt>status:</dt>
        <dd>{machine.status}</dd>
      </dl>
    </>
  )
}