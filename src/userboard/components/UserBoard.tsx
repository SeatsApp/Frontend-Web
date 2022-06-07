import {
    Box,
    Card, Typography,
} from "@mui/material";
import UserList from "./UserList";
import useUsers from "../../shared/hooks/useUsers";
import {User} from "../../shared/types/User";

function UserBoard() {
    const {readUsers, changeRole} = useUsers();
    const {users, refetchUsers} = readUsers();

    const handleRoleChange = async (value: string, user: User) => {
        if (value !== user.role) {
            user.role = value;
            await changeRole(user);
            await refetchUsers();
        }
    }

    return (
        <Box style={{paddingTop: 20}}>
            <Card sx={{padding: 5}}>
                <Typography color={'secondary'} variant='h3'>Registered users</Typography>
                <UserList users={users} changeRole={handleRoleChange}/>
            </Card>
        </Box>
    );
}

export default UserBoard;