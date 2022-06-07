import { useCallback, useEffect, useState } from 'react';
import axiosClient from '../../utils/AxiosClient';
import { toast } from "react-hot-toast";

export default function useGet<T>(url: string, initialValue: T, retrieveImmediately: boolean = true) {
    const [fetchedData, setFetchedData] = useState<T>(initialValue);
    const [loading, setIsLoading] = useState(false);

    const fetchFilterData = useCallback(async (filterUrl: string, retrieveImmediatelyFetchFilter: boolean = true) => {
        if (retrieveImmediatelyFetchFilter) {
            setIsLoading(true);
            await axiosClient(filterUrl).then(
                (response: any) => {
                    if (response.data !== undefined)
                        setFetchedData(response.data);
                }
            )
                .catch(() => {
                    toast.error("Could not get the data.")
                });
            setIsLoading(false);
        }

    }, []);

    const fetchData = useCallback(async (retrieveImmediatelyFetch: boolean = true) => {
        fetchFilterData(url, retrieveImmediatelyFetch)
    }, [fetchFilterData, url]);

    useEffect(() => {
        (async () => {
            await fetchData(retrieveImmediately);
        })();
    }, [fetchData, retrieveImmediately]);

    return {
        data: fetchedData,
        refetch: fetchData,
        refetchFilter: fetchFilterData,
        loading
    };
}
