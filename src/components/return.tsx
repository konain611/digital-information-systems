import Link from "next/link";

export default function ReturnButton(){
    return(
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '12px' }} >
                <Link href="/">
                    <button className="mt-4 px-6 py-2 mb-4 bg-[#003366] text-white rounded-md hover:bg-[#F69226] cursor-pointer transition-colors duration-300">
                        Return to Homepage
                    </button>
                </Link>
            </div>
    )
}