import axiosClient from '../../utils/AxiosClient';
import {User} from "../types/User";
import useGet from "./useGet";
import toast from "react-hot-toast";

export default function useUsers() {
    async function changeRole(
        user: User
    ) {
        return axiosClient({
            url: '/api/users/role', method: 'patch',
            data: user, headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            /* istanbul ignore next */
            toast.success("Succesfully changed the role of " + user.email + " to " + user.role + ".")
        })
            .catch(() => {
                /* istanbul ignore next */
                toast.error("Could not change the role of " + user.email + ".")
            })
    }

    function readUsers() {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { data: users, refetch: refetchUsers } = useGet<User[]>('/api/users', []);
        return {
            users,
            refetchUsers,
        };
    }

    return {
        readUsers,
        changeRole
    };
}
