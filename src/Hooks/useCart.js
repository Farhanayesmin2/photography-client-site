import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

const useCart = () => {
    const { user, loading } = useContext(AuthContext);
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch('http://localhost:4000/myclass');
            const data = await res.json();
            console.log('res from fetch', data);
            return data;
        },
    });

    return [cart, refetch];
};

export default useCart;
