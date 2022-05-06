import PageIcon from '../PageIcon'
import HomeIcon from '@mui/icons-material/Home';
import ForumIcon from '@mui/icons-material/Forum';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import AvatarBalancefy from '../Avatar';
import { AuthContext } from '../../contexts/auth';
import React from 'react';
import SpeedAdd from '../SpeedAdd';
import { useGoogleLogout } from 'react-google-login';

const clientId = process.env.REACT_APP_CLIENT_ID_GOOGLE
const apiUrl = process.env.REACT_APP_API_URL

export default function Menu(props) {

    const { signOutDefault, user } = React.useContext(AuthContext);

    const onLogoutSuccess = () => {
        signOutDefault()
    }

    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess
    });

    return (
        <>
            <div style={{
                height: "100vh",
                width: "135px",
                minWidth: "135px",
                maxWidth: "135px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                padding: "40px 0 40px 0",
                backgroundColor: "#131515"
            }} >
                <Link to="/profile">
                    <AvatarBalancefy imageAvatar={apiUrl + user.fkUsuario.avatar} width="65px" style={{ border: "1px solid #000", marginBottom: "137px", cursor: "pointer" }}></AvatarBalancefy>
                </Link>
                {props.page === "Home" ?
                    <PageIcon selected icon={<HomeIcon sx={{ fontSize: "45px" }} />}></PageIcon> :
                    <Link to="/" style={{ color:"white" }}>
                        <PageIcon icon={<HomeIcon sx={{ fontSize: "45px" }} />}></PageIcon>
                    </Link>
                }
                {props.page === "Forum" ?
                    <PageIcon selected icon={<ForumIcon sx={{ fontSize: "45px" }} />}></PageIcon> :
                    <Link to="/forum" style={{ color:"white" }}>
                        <PageIcon icon={<ForumIcon sx={{ fontSize: "45px" }} />}></PageIcon>
                    </Link>
                }
                 {props.page === "Goals" ?
                    <PageIcon selected icon={<TrackChangesIcon sx={{ fontSize: "45px" }} />}></PageIcon> :
                    <Link to="/" style={{ color:"white" }}>
                        <PageIcon icon={<TrackChangesIcon  sx={{ fontSize: "45px", color:"#4B4B4B" }} />}></PageIcon>
                    </Link>
                }
                <SpeedAdd/>
                <div style={{
                    marginTop: "auto"
                }}>
                    <PageIcon onClick={user.tipo === "DEFAULT" ? signOutDefault : signOut} icon={<LogoutIcon sx={{ fontSize: "45px" }} />}></PageIcon>
                    <img alt="logo" style={{height: "50px"}} src="./img/icon-white.svg"/>
                </div>
            </div>
        </>
    )
}