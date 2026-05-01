export default function Loading() {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-95 z-50">
        <div className="relative w-40 h-40">
       
          <div className="absolute inset-0 rounded-full border-4 border-[#003366] opacity-60"></div>
          
          <div className="absolute inset-2 rounded-full animate-spin border-t-4 border-b-4 border-[#F69226]"></div>
        </div>
        
        <div className="mt-8 text-2xl font-semibold text-[#003366]">
          <span className="inline-block animate-pulse">Loading</span>
        </div>
        <div className="mt-2 text-[#F69226]">Please wait...</div>
      </div>
    );
  } 