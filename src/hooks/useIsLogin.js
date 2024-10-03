import { useSelector } from 'react-redux';

export const useIsLogin = () => {
    const isLogin = useSelector((state) => state?.auth?.authState?.isLogin);
    return isLogin;
}

export default useIsLogin;