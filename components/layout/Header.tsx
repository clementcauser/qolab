import { Avatar, CircularProgress, Menu, MenuItem, Tooltip } from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IdeaIcon from "@material-ui/icons/EmojiObjectsOutlined"
import CommunityIcon from "@material-ui/icons/PeopleOutlineRounded"
import { signOut, useSession } from "next-auth/client"
import Link from "next/link"
import { MouseEvent, useMemo, useState } from "react"
import { Routes } from "../../routes"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            backgroundColor: "transparent",
        },
        toolbar: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },

        title: {
            flexGrow: 1,
        },
        list: {
            display: "flex",
            alignItems: "center",
            padding: 0,
            margin: 0,
        },
        listItem: {
            listStyle: "none",
            marginRight: theme.spacing(1),
        },
    })
)

const Header = () => {
    const classes = useStyles()
    const [session, loading] = useSession()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const accountMenu = useMemo(
        () => (
            <Menu id="account-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Accéder à mon profil</MenuItem>
                <MenuItem onClick={handleClose}>Mes paramètres</MenuItem>
                <MenuItem
                    onClick={() => {
                        signOut()
                        handleClose()
                    }}
                >
                    Déconnexion
                </MenuItem>
            </Menu>
        ),
        [anchorEl]
    )

    const accountMenuButton = useMemo(() => {
        if (session) {
            return (
                <IconButton aria-controls="account-menu" aria-haspopup="true" onClick={handleClick}>
                    <Avatar alt={session.user.name || ""} src={session.user.image} />
                    <Typography variant="srOnly">accéder aux options de mon compte</Typography>
                </IconButton>
            )
        } else {
            return (
                <Link href="/api/auth/signin" passHref>
                    <Button component="a">Se connecter</Button>
                </Link>
            )
        }
    }, [session])

    return (
        <>
            <AppBar elevation={0} position="static" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Link href={Routes.HOME} passHref>
                        <Typography variant="h5" component="a" color="textPrimary">
                            qolab
                        </Typography>
                    </Link>
                    <ul className={classes.list}>
                        <li className={classes.listItem}>
                            <Tooltip title="Accéder à la liste des idées">
                                <span>
                                    <Link href={Routes.IDEAS} passHref>
                                        <IconButton aria-label="accéder à la liste des idées">
                                            <IdeaIcon />
                                        </IconButton>
                                    </Link>
                                </span>
                            </Tooltip>
                        </li>
                        <li className={classes.listItem}>
                            <Tooltip title="Accéder à la communauté">
                                <span>
                                    <IconButton aria-label="accéder à la communauté">
                                        <CommunityIcon />
                                    </IconButton>
                                </span>
                            </Tooltip>
                        </li>
                        {loading ? <CircularProgress /> : accountMenuButton}
                    </ul>
                </Toolbar>
            </AppBar>
            {accountMenu}
        </>
    )
}

export default Header
