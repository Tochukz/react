import { SWRConfig } from "swr";
import TopBar from "./TopBar";
import AlertDialog from "./AlertDialog";
import emitter  from '../services/event-emitter';

export default function Base(props: { children: any}) {
  const fetcher = (resource: string, options: any) => { 
    return fetch(resource, options)
                .then(res => res.json());
  }

  const onError = (error: any, key: string, config: object) => {
    console.error({error, key, config});
    emitter.emit('alert', {type: 'error', error});
  }

  const swrGlobalOptions = {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    fetcher,
    onError
  }

  return (
    <div className="base">
      <SWRConfig value={swrGlobalOptions}>
        <TopBar />
        <div className='container'>
          <AlertDialog />
          { props.children }
        </div>
      </SWRConfig>
    </div>
  )
}
