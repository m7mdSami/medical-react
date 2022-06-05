import './index.scss'

const StepperMob = (props) => {
     return(
       <section className="stepper-mob mb-3">
           <div className='bg-white flex justify-content-between p-3'>
                <div className='flex'>
                    <span className='bg-orange-600 text-white inline-flex w-2rem h-2rem border-circle justify-content-center align-items-center'>2</span>
                    <h3 className='my-0 mx-2 stepper-mob__title'>Personal Details</h3>
                </div>
                <div>
                    <span>1 of 3</span>
                    <button className='border-none p-2 mx-1 w-2rem h-2rem text-orange-700 bg-orange-100 outline-none'><i className='pi pi-angle-down'></i></button>
                </div>
           </div>
       </section>
     )
}

export default StepperMob