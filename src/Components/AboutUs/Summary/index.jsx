import './index.scss'
import { Button } from 'primereact/button'
import IsMobile from '../../../utils/responsive'
import { ReactComponent as ResetIcon } from '../../../assets/svg/reset.svg';

const Summary = (props) => {
     return(
       <section className={`summary shadow-1 bg-white lg:mx-6 m-0 p-4 border-round-top-xl flex justify-content-end mt-auto`}>
         <Button label={` ${IsMobile() ? 'Click' : ''}`} icon="pi pi-angle-left" className={`mx-1 lg:p-button-warning lg:p-button-outlined lg:w-0 bg-orange-600`} iconPos="left" />
         <div className='lg:hidden'>
            <Button icon={<ResetIcon/>} className='mx-1 bg-black-alpha-10' iconPos="right" />
         </div>
         <Button label="Click" icon="pi pi-angle-right" className={`flex-grow-1 lg:flex-grow-0 mx-1 bg-orange-600`} iconPos="right" />
       </section>
     )
}

export default Summary