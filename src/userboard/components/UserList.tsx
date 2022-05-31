import {
    Box, FormControl, InputLabel, MenuItem, Select,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    ThemeProvider,
} from '@mui/material';
import { theme } from '../../theme';
import {User} from "../../shared/types/User";

interface UserListProps {
    users: User[];
    changeRole: (value: string, user: User) => void;
}

export default function UserList({ users, changeRole }: UserListProps) {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ minWidth: 500 }}>
                <Table>
                    <TableHead>
                        <TableRow >
                            <TableCell align='center'>
                                User email
                            </TableCell >
                            <TableCell align='center'>
                                Full name
                            </TableCell>
                            <TableCell align='center'>
                                Role
                            </TableCell>
                            <TableCell align='center' />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow
                                hover
                                key={user.email}
                            >
                                <TableCell align='center'>
                                    {user.email}
                                </TableCell>
                                <TableCell align='center'>
                                    {user.fullName}
                                </TableCell>
                                <TableCell align='center'>
                                    <FormControl fullWidth>
                                        <InputLabel >Role</InputLabel>
                                        <Select
                                            value={user.role}
                                            label="Role"
                                            onChange={(event) => changeRole(event.target.value, user)}
                                        >
                                            <MenuItem value={"ADMIN"}>Admin</MenuItem>
                                            <MenuItem value={"USER"}>User</MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </ThemeProvider>
    );
}