import {useCallback, useEffect, useState} from 'react';
import axiosClient from '../../utils/AxiosClient';
import toast from "react-hot-toast";

export default function useGetFilter<T>(url: string, initialValue: T) {
    const [fetchedData, setFetchedData] = useState<T>(initialValue);

    const fetchData = useCallback(async (getUrl: string) => {
        await axiosClient(getUrl).then(
            (response) => {
                if (response.data !== undefined)
                    setFetchedData(response.data);
            }
        )
            .catch(() => {
                /* istanbul ignore next */
                toast.error("Could not get the seats.")
            });
    }, []);

    useEffect(() => {
        (async () => {
            await fetchData(url);
        })();
    }, [url, fetchData]);

    return {
        data: fetchedData,
        refetch: fetchData,
    };
}
