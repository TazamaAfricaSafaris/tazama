import { useEffect } from 'react';


function ScrollToTop({ history }: any) {
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        };
    }, [history]);

    return null;
}

export default ScrollToTop;
