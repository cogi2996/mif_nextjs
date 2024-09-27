import { useAppSelector } from '@/redux/store';
import { useEffect, useState } from 'react';

const useIsGroupOwner = (group) => {
    const [isOwner, setIsOwner] = useState(false);
    const authState = useAppSelector((state) => state.auth.authState);
    useEffect(() => {
        const userId = authState.id

        if (group && group.owner && userId) {
            setIsOwner(group.owner.id === userId);
        }
    }, [group, authState.id]);

    return isOwner;
};

export default useIsGroupOwner;