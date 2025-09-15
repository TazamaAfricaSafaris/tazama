'use client';

import React, { useState } from 'react';
import {
    Dialog,
    DialogTrigger,
    DialogContent,
} from '~/components/ui/dialog';
import { Loader2 } from 'lucide-react'; // Optional: Lucide spinner icon
import { AnimatePresence, motion } from 'framer-motion';

export default function PopupForm() {
    const [loading, setLoading] = useState(true);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <p className="menu-trigger flex items-center gap-2 rounded-md bg-[#A87133] px-2 py-1 text-white transition ease-in-out md:gap-3 md:px-4 md:py-2 max-sm:text-sm font-raleway animate-float2 cursor-pointer">
                    Plan My Trip
                </p>
            </DialogTrigger>
            <DialogContent className="h-[80%] p-0 bg-background">
                <AnimatePresence>
                    {loading && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex justify-center items-center text-darker">
                            <p className="text-xl text-white">Loading...</p>
                        </motion.div>
                    )}
                </AnimatePresence>
                <iframe
                    width="720"
                    height="315"
                    src="https://forms.zohopublic.com/tazamaafricatourssafari1/form/TAZAMAPLANMYTRIPFORM/formperma/RpRK4CHabrTCKwe3sv1FNL5N9TBgcoBzTUZnWs6_Fvo"
                    title="Plan your dream trip and we'll get back to you"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full z-0 rounded-xl"
                    onLoad={() => setLoading(false)}
                ></iframe>
            </DialogContent>
        </Dialog>
    );
}
