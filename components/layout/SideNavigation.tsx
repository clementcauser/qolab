import { List, ListItem, ListItemIcon, ListItemText, ListSubheader, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import IdeaIcon from "@material-ui/icons/EmojiObjectsOutlined"
import CommunityIcon from "@material-ui/icons/PeopleOutlineRounded"
import Link from "next/link"
import React from "react"
import { Routes } from "../../routes"

const useStyles = makeStyles(() => ({
    nav: {
        display: "flex",
        flexDirection: "column",
        marginTop: 8,
        minWidth: 250,
    },
}))

const SideNavigation = () => {
    const classes = useStyles()
    return (
        <nav className={classes.nav}>
            <List
                aria-labelledby="side-navigation"
                subheader={
                    <ListSubheader component="div" id="side-navigation">
                        Accéder à
                    </ListSubheader>
                }
            >
                <Link href={Routes.IDEAS}>
                    <ListItem button>
                        <ListItemIcon>
                            <IdeaIcon />
                        </ListItemIcon>
                        <Typography variant="srOnly">accéder à la liste des</Typography>
                        <ListItemText>Idées</ListItemText>
                    </ListItem>
                </Link>
                <ListItem button>
                    <ListItemIcon>
                        <CommunityIcon />
                    </ListItemIcon>
                    <Typography variant="srOnly">accéder à la page</Typography>
                    <ListItemText>Communauté</ListItemText>
                </ListItem>
            </List>
        </nav>
    )
}

export default SideNavigation
