import ReturnButton from "@/components/return";
import Image from "next/image";

export default function NotFound() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '12px' }} >
            <Image
                src="/pageNotFound.jpg"
                alt="404"
                width={800}
                height={800}
            />
            <ReturnButton />
        </div>
    )
}
