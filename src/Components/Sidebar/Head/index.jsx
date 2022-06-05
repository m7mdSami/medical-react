import { Avatar } from 'primereact/avatar';
import './index.scss'

const Head = (props) => {
     return(
       <section className="head flex justify-content-around align-items-center">
           <div className='head__logo flex'>Medical Malpractice</div>
           <div className="head__details flex justify-content-between align-items-center">
               <div className='flex flex-column px-3'>
                    <h3 className='name m-0'>Medical Malpractice</h3>
                    <a href="#" className='no-underline text-black-alpha-60 font-semibold'>
                        <i className='pi pi-arrow-left text-orange-500'></i>
                        <span className='mx-3'>View All Products</span>
                    </a>
               </div>
               <div className=''>
                    <Avatar label="P" shape="circle"/>
               </div>
           </div>
       </section>
     )
}

export default Head