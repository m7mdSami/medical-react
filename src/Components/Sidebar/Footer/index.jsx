import './index.scss'
import { Button } from 'primereact/button';
import { ReactComponent as Social } from '../../../assets/svg/Vector.svg';

const Footer = (props) => {
     return(
       <footer className='footer mt-auto border-top-1 border-black-alpha-30 py-3'>
           <span className='copyright'>
               Copyright @ Lorem ipsum, dolor sit amet
           </span>
           <div className='footer__links'>
               <a href="#" className='no-underline text-black-alpha-50 mx-1'>terms and conditions</a>
               <a href="#" className='no-underline text-black-alpha-50 mx-1'>privacy policy</a>
               <a href="#" className='no-underline text-black-alpha-50 mx-1'>cookies privacy</a>
           </div>
           <div className="footer__social mt-3">
                <Button icon="pi pi-apple" className="p-button-rounded p-button-outlined text-black-alpha-70 shadow-none bg-white shadow-3 mx-1" />
                <Button icon="pi pi-play" className="p-button-rounded p-button-outlined text-black-alpha-70 shadow-none bg-white shadow-3 mx-1" />
           </div>
           
       </footer>
     )
}

export default Footer