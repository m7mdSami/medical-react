import './index.scss'
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { ReactComponent as SearchIdIcon } from '../../../assets/svg/search-id.svg';
import { ReactComponent as Mail } from '../../../assets/svg/mail.svg';
import { Dropdown } from 'primereact/dropdown';

const Form = (props) => {

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

     return(
       <section className='about-form'>
        <div className='p-card p-3 w-10 m-auto'>
            <div className="head border-bottom-1 border-black-alpha-10 pb-3 mb-3">
                <h3 className='m-0'>Tell Us About You</h3>
            </div>
            <form className="form bg-gray-200 p-3">
                <div className="p-input-icon-left block mb-3">
                    <SearchIdIcon />
                    <InputText className='w-full border-none shadow-1' onChange={(e) => e} placeholder="Saudi ID/ Iqama number." />
                </div>
                <div className='mb-3'>
                    <Dropdown className='w-full border-none shadow-1' options={cities} optionLabel="name" placeholder="Year of Birth" />
                </div>
                <div className=" block mb-3">
                    <InputText className='w-full border-none shadow-1' onChange={(e) => e} placeholder="ex: 5xxxxxxxx" />
                </div>
                <div className="p-input-icon-left block">
                    <Mail />
                    <InputText className='w-full border-none shadow-1' onChange={(e) => e} placeholder="ex: email@tawuniya.com.sa" />
                </div>
            </form>
        </div>
       </section>
     )
}

export default Form