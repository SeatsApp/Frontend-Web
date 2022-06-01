import { useCallback, useEffect, useState } from 'react';
import axiosClient from '../../utils/AxiosClient';
import { toast } from "react-hot-toast";

export default function useGet<T>(url: string, initialValue: T) {
    const [fetchedData, setFetchedData] = useState<T>(initialValue);
    const [loading, setIsLoading] = useState(false);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        await axiosClient(url).then(
            (response: any) => {
                if (response.data !== undefined)
                    setFetchedData(response.data);
            }
        )
            .catch(() => {
                toast.error("Could not get the data.")
            });
        setIsLoading(false);
    }, []);

    useEffect(() => {
        (async () => {
            await fetchData();
        })();
    }, [fetchData]);

    useEffect(() => {
        //
    }, [url])

    return {
        data: fetchedData,
        refetch: fetchData,
        loading
    };
}
