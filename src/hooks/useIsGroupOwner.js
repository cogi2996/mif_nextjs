import useUserId from '@/hooks/useUserId';
import { useAppSelector } from '@/redux/store';
import { useEffect, useState } from 'react';

export const useIsGroupOwner = (group) => {
    const [isOwner, setIsOwner] = useState(false);
    const userId = useUserId()
    useEffect(() => {
        if (group && group.owner && userId) {
            setIsOwner(group.owner.id === userId);
        }
    }, [group, userId]);

    return isOwner;
};
