import SBDLogo from '/SBDLogo.svg';
import DMJLogo from '/DMJLogo.svg';
import OSLogo from '/OSLogo.svg';
import Logo from '/Logo.svg';
import Navbar  from './Navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      <div id='sbd' className="min-h-screen bg-customBlack text-white flex flex-col justify-center items-center">
        
        <div className='flex flex-r items-center justify-center'>
          <img src={SBDLogo} alt="SBD Logo" className="h-64 w-64" />
          <div className='ml-6'>
            <h1 className='text-2xl font-bold text-white text-left '>NETLAB SBD</h1>
            <div className='bg-black p-4 rounded-lg mt-4 '>
              <p className='text-2xl text-white bg-black p-4 rounded-lg max-w-4xl text-left'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.</p>
              <p className='text-2xl text-white bg-black p-4 rounded-lg max-w-4xl text-left'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.</p>
            </div>
          </div>
        </div>
      </div>
      <div id='dmj' className="min-h-screen bg-customBlack text-white flex flex-col justify-center items-center">
        
        <div className='flex flex-r items-center justify-center'>
          <img src={DMJLogo} alt="DMJ Logo" className="h-64 w-64" />
          <div className='ml-6'>
            <h1 className='text-2xl font-bold text-white text-left'>NETLAB DMJ</h1>
            <div className='bg-black p-4 rounded-lg mt-4 '>
              <p className='text-2xl text-white bg-black p-4 rounded-lg max-w-4xl text-left'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.</p>
              <p className='text-2xl text-white bg-black p-4 rounded-lg max-w-4xl text-left'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.</p>
            </div>
          </div>
        </div>
      </div>
      <div id='os' className="min-h-screen bg-customBlack text-white flex flex-col justify-center items-center">
        <div className='flex flex-r items-center justify-center'>
          <img src={OSLogo} alt="OS Logo" className="h-64 w-64" />
          <div className='ml-6'>
            <h1 className='text-2xl font-bold text-white text-left '>NETLAB OS</h1>
            <div className='bg-black p-4 rounded-lg mt-4 '>
              <p className='text-2xl text-white bg-black p-4 rounded-lg max-w-4xl text-left'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.</p>
              <p className='text-2xl text-white bg-black p-4 rounded-lg max-w-4xl text-left'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}