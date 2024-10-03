import useIsLogin from '@/hooks/useIsLogin';
import { useSelector } from 'react-redux';

export const useUserId = () => {
    const isLogin = useIsLogin();

    const userId = useSelector((state) => state?.auth?.authState?.id);

    return isLogin ? userId : null;
}

export default useUserId;