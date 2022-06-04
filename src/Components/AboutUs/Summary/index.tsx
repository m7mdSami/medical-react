import './index.scss'
import { Button } from 'primereact/button'
import IsMobile from '../../../utils/responsive'
import { ReactComponent as ResetIcon } from '../../../assets/svg/reset.svg';

const Summary = (props: Record<string, any>) => {
     return(
       <section className={`summary shadow-1 bg-white ${IsMobile() ? 'mx-6' : 'm-0'} p-4 border-round-top-xl flex justify-content-end`}>
         <Button label={` ${IsMobile() ? 'Click' : ''}`} icon="pi pi-angle-left" className={`mx-1 ${IsMobile() ? 'p-button-warning p-button-outlined w-0' : 'bg-orange-600'}  `} iconPos="left" />
         {!IsMobile() && <Button icon={<ResetIcon/>} className='mx-1 bg-black-alpha-10' iconPos="right" />}
         <Button label="Click" icon="pi pi-angle-right" className={`${!IsMobile() && 'flex-grow-1'} mx-1 bg-orange-600`} iconPos="right" />
       </section>
     )
}

export default Summary