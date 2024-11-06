"use client"

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
    DialogPortal,
} from "~/components/ui/dialog";
import PlanMyTripForm from "~/components/forms/all-forms/plan-my-trip/AllQuestions";
import { raleway } from "~/pages/_app";

import Link from "next/link";
import Image from "next/image";

const CallToAction = () => {
    const [dialopOpen, setDialopOpen] = useState(false);

    return (
        <>
            <section className="bg-lighter relative bg-cover bg-center py-28">
                <div className="bg-gradient-to-b from-lightest to-transparent py-12 absolute top-0 left-0 w-full z-10"></div>
                <div className="max-w-5xl z-10 relative top-0 left-0 w-full mx-auto flex flex-col items-center justify-center p-4 gap-8 md:p-10 xl:px-36 text-white">
                    <h1 className="text-5xl leading-none text-center">Ready to Adventure?</h1>
                    <p className="text-lg text-center">
                        Looking for a getaway where luxury meets nature? Relax in exclusive lodges, savor world-class cuisine, and experience the beauty of untouched landscapes with tailored comfort. Your next breathtaking escape awaits.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
                        <Link href="/safaris" className="border border-primary bg-primary hover:border-white rounded-md px-4 lg:px-6 py-2 md:text-lg text-xl font-raleway text-white hover:bg-transparent hover:text-white transition-colors duration-200">Explore More</Link>

                        <Dialog onOpenChange={setDialopOpen} open={dialopOpen}>
                            <DialogTrigger
                                asChild
                            >
                                <button className="border border-white hover:border-primary rounded-md px-4 lg:px-6 py-2 md:text-lg text-xl font-raleway text-white hover:bg-primary hover:text-white transition-colors duration-200">
                                    Plan Your Trip
                                </button>
                            </DialogTrigger>
                            <DialogPortal>
                                <DialogContent
                                    className={`h-screen bg-lightest font-raleway sm:max-w-[80%] lg:h-[70%] lg:w-[60%] ${raleway.variable}`}
                                    style={{
                                        fontFamily: raleway.variable,
                                    }}
                                >
                                    <DialogHeader></DialogHeader>
                                    <PlanMyTripForm setDialogOpen={setDialopOpen} />
                                </DialogContent>
                            </DialogPortal>
                        </Dialog>
                    </div>
                </div>
                <br />
                <Image src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730884908/call-to-action_hyqnoa.webp" alt="" layout="fill" objectFit="cover" className="w-full h-full brightness-[0.65]" />
            </section>
        </>
    )
}

export default CallToAction