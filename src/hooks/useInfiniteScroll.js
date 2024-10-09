import { useEffect, useRef } from 'react';

const useInfiniteScroll = (hasNextPage, fetchNextPage) => {
    const observerElem = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasNextPage) {
                    fetchNextPage();
                }
            },
            { threshold: 1.0 }
        );

        if (observerElem.current) observer.observe(observerElem.current);

        return () => {
            // Clean up by unobserving the element
            if (observerElem.current) observer.unobserve(observerElem.current);
        };
    }, [hasNextPage, fetchNextPage]);

    return observerElem;
};

export default useInfiniteScroll;