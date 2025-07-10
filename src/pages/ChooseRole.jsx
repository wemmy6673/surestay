import houseImg from '../images/House.png';
import manImg from '../images/Man.png';

export default function ChooseRole({ onSelectRole }) {
  return (
  <div className='flex items-center justify-center fixed w-full min-h-screen white'>
  <div className="flex items-center justify-center">
  <div className="w-full max-w-md lg:max-w-2xl mx-auto p-6 bg-white rounded-lg shadow flex flex-col items-center">
    <h2 className="text-2xl font-bold text-center mb-2">Welcome to SureStay</h2>
    <p className="text-center text-gray-600 mb-8">Please choose your role to continue</p>
    <div className="flex justify-center gap-8">
      <div className="flex flex-col items-center cursor-pointer group" onClick={() => onSelectRole('landlord')}>
        <img src={houseImg} alt="Landlord" className="w-28 h-28 object-contain mb-2 group-hover:scale-105 transition-transform" />
        <span className="text-base font-semibold mt-1">Landlord</span>
      </div>
      <div className="flex flex-col items-center cursor-pointer group" onClick={() => onSelectRole('tenant')}>
        <img src={manImg} alt="Tenant" className="w-28 h-28 object-contain mb-2 group-hover:scale-105 transition-transform" />
        <span className="text-base font-semibold mt-1">Tenant</span>
      </div>
    </div>
  </div>
</div>
</div>
  );
} 