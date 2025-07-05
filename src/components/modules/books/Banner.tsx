import { Button } from '@/components/ui/button'
import video from '@/assets/bannar-video1.mp4'

export default function Banner() {
    return (
        <div className="relative max-h-[90vh] w-full overflow-hidden">
            <video
                className="w-full h-full object-cover"
                src={video}
                autoPlay
                muted
                loop
                playsInline
            ></video>

            {/* Black opacity overlay */}
            <div className="absolute inset-0 bg-[#000000b7] z-10"></div>

            {/* Optional: Text or content on top */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4 space-y-5">
                <h1 className="text-base md:text-2xl font-normal md:font-semibold">
                    Discover, Read & Grow
                </h1>
                <p className="text-xl md:text-2xl lg:text-5xl max-w-4xl">
                    Welcome to Our Digital Library – A Gateway to Endless Knowledge, Books, and Learning Resources.
                </p>
                <Button className="cursor-pointer bg-primary">
                    Browse Collection
                </Button>
            </div>

        </div>
    )
}
