import React, { FC } from "react"
import Header from "./Header"
import { makeStyles } from "@material-ui/core/styles"
import { Paper } from "@material-ui/core"
import SideNavigation from "./SideNavigation"
import { Container } from "next/app"

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
    },
    content: {
        display: "flex",
    },
    main: ({ noBackground }: Props) => ({
        width: "calc(100% - 64px - 250px)",
        minHeight: "calc(100vh - 64px - 64px)",
        marginTop: 16,
        marginBottom: 32,
        borderRadius: 12,
        backgroundColor: noBackground ? "transparent" : theme.palette.common.white,
        boxShadow: noBackground && "none",
    }),
}))

type Props = {
    noBackground?: boolean
}

const Layout: FC<Props> = ({ children, noBackground }) => {
    const classes = useStyles({ noBackground })

    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.content}>
                <SideNavigation />
                <Container>
                    <Paper elevation={3} className={classes.main}>
                        {children}
                    </Paper>
                </Container>
            </div>
        </div>
    )
}

export default Layout
