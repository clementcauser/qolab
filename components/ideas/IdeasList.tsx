import { Box, Grid, makeStyles } from "@material-ui/core"
import { Pagination } from "@material-ui/lab"
import React, { useState } from "react"
import { Idea } from "../../interfaces/ideas/idea"
import FilterIdeasPanel from "./FilterIdeasPanel"
import IdeaCard from "./IdeaCard"

const useStyles = makeStyles((theme) => ({
    list: {
        paddingLeft: 0,
    },
    pagination: {
        display: "flex",
        justifyContent: "center",
        marginTop: theme.spacing(3),
    },
}))

const PER_PAGE = 9

type Props = {
    ideas: Idea[]
}

const IdeasList = ({ ideas }: Props) => {
    const [page, setPage] = useState(1)
    const classes = useStyles()

    return (
        <>
            <FilterIdeasPanel something="something" />
            <Grid container spacing={2} component="ul" className={classes.list}>
                {ideas.map((idea) => (
                    <Grid item key={idea.id} md={6} lg={3} component="li">
                        <IdeaCard idea={idea} />
                    </Grid>
                ))}
            </Grid>
            <Box className={classes.pagination}>
                <Pagination
                    getItemAriaLabel={(_, page) => `Aller à la page ${page}`}
                    count={PER_PAGE}
                    page={page}
                    onChange={(_, page) => setPage(page)}
                />
            </Box>
        </>
    )
}

export default IdeasList
