import './index.scss'
import { ReactComponent as LangIcon } from '../../assets/svg/lang-icon.svg';
import { ReactComponent as ElectricIcon } from '../../assets/svg/electric-icon.svg';
import { ReactComponent as ChatIcon } from '../../assets/svg/chat-icon.svg';
import { ReactComponent as MoodIcon } from '../../assets/svg/mood-color.svg';
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg';

const Header = (props) => {
     return(
       <header className='header flex justify-content-end p-6'>
           <button className='border-none p-2 mx-1 bg-transparent outline-none flex'><span className='lang mx-1'>EN</span> <LangIcon/></button>
           <button className='border-none p-2 mx-1 w-2rem h-2rem shadow-2 border-circle bg-white outline-none'><SearchIcon/></button>
           <button className='border-none p-2 mx-1 w-2rem h-2rem shadow-2 border-circle bg-white outline-none'><MoodIcon/></button>
           <button className='border-none p-2 mx-1 w-2rem h-2rem shadow-2 border-circle bg-white outline-none'><ElectricIcon/></button>
           <button className='border-none p-2 mx-1 border-round-2xl shadow-2 bg-orange-600 outline-none text-white'><ChatIcon/> Need Help</button>
       </header>
     )
}

export default Header