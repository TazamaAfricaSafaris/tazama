import HeadSEO from "~/components/ui/Head";
import { base_keywords } from "~/lib/constants";
import PrimaryHeader from "~/components/PrimaryHeader";
import Image from "next/image";

export default function ToursPage() {
    return (
        <>
            <HeadSEO title="Tazama Africa Safaris | Our Tours" keywords={base_keywords} />
            <PrimaryHeader title="Our Safari Tours" image="safari.webp" />

            <main className="mx-auto my-20 max-w-5xl px-4 pt-8 flex flex-col gap-8">
                <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
                    <h2 className="text-primary text-3xl md:text-5xl">Experience Tanzania with Tazama Africa Safaris</h2>
                    <p>Few places in the world rival Tanzania as a wildlife destination. Ranked #1 country for an African safari, Tanzania hypnotizes with its pristine, wildest beauty. The last sanctuary of the wildlife of such magnitude in the world, Tanzania is a perfect spot for your vacation.</p>
                    <br />
                </div>

                <div>
                    <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4">
                        <TourCard />
                        <TourCard />
                        <TourCard />
                        <TourCard />
                        <TourCard />
                        <TourCard />
                    </div>
                </div>

            </main>
        </>
    )
}

function TourCard() {
    return (
        <div className="h-96 rounded-xl relative overflow-hidden group">
            <Image
                src={"/assets/images/gallery/adventure.webp"}
                alt=""
                layout='fill'
                className="w-full h-full object-cover group-hover:scale-125 transition-transform" 
            />

            <div className="absolute top-4 left-4 text-white">
                <p className="text-xl font-bold">Family safari</p>
                <p className="-mt-0.5 text-sm">2 day(s) safari</p>
            </div>

            <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm">Starting from</p>
                <p className="text-xl font-bold -mt-0.5">$4,300</p>
            </div>
        </div>
    )
}