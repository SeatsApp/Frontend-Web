import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface RedirectButtonsProps {
    activeBtn: string;
    setActiveBtn: Dispatch<SetStateAction<string>>;
}

export default function RedirectButtons({ activeBtn, setActiveBtn }: RedirectButtonsProps) {

    function getRightPath(elementName: string): string {
        switch (elementName) {
            case "Users":
                return "/users";
            case "Manage buildings":
                return "/manageBuildings";
        }
        return "/"
    }

    return (
        <>
            {["Dashboard", "Users", "Manage buildings"].map((item) => (
                <RouterLink key={item} to={getRightPath(item)}>
                    <Link
                        component="button"
                        variant="body2"
                        onClick={() => setActiveBtn(item)}
                        color={'secondary'}
                        key={item}
                        sx={activeBtn === item ? {
                            fontWeight: 'bold',
                            textDecoration: 'none',
                            marginRight: 2,
                            marginLeft: 2
                        } : { textDecoration: 'none', marginRight: 2, marginLeft: 2 }}
                    >
                        {item}
                    </Link>
                </RouterLink>
            ))}
        </>
    );
}