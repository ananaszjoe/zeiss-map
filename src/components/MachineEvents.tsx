import moment from 'moment';
import { MachineEvent } from '../types';

export default function MachineEvents({events}: {events: MachineEvent[]}) {  
  const listData = events.map(entry => ({...entry, humanTime: moment(entry.timestamp).fromNow()}));

  return (
    <div className='event-list'>
      <h3>Recent events:</h3>
      <ul>
        {listData.map(entry => (
          <li><span className={entry.status}>{entry.status}</span> - <span title={entry.timestamp}>{entry.humanTime}</span></li>
        ))}
      </ul>
    </div>
  )
}