import './index.scss'
import Head from './Head'
import Stepper from './Stepper'
import Footer from './Footer'

const Sidebar = (props: Record<string, any>) => {
     return(
       <aside className="sidebar shadow-3 h-full shadow-3 p-5 bg-white flex flex-column overflow-auto">
           <Head />
           <Stepper />
           <Footer />
       </aside>
     )
}

export default Sidebar