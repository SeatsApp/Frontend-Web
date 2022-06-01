import { useCallback, useEffect, useState } from 'react';
import axiosClient from '../../utils/AxiosClient';
import {toast} from "react-hot-toast";

export default function useGet<T>(url: string, initialValue: T) {
  const [fetchedData, setFetchedData] = useState<T>(initialValue);

    const fetchData = useCallback(async () => {
        await axiosClient(url).then(
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
            await fetchData();
        })();
    }, [fetchData]);

    useEffect(() => {
        //
    },[url])

  return {
    data: fetchedData,
    refetch: fetchData,
  };
}
