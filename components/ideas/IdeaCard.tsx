import { Button, Card, CardActions, CardContent, Chip, makeStyles, Typography } from "@material-ui/core"
import Link from "next/link"
import React from "react"
import { Idea } from "../../interfaces/ideas/idea"
import { Routes } from "../../routes"

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: theme.palette.primary.light,
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(2),
        color: theme.palette.common.white,
    },
    chipList: {
        paddingLeft: 0,
        marginTop: theme.spacing(2),
    },
    chip: {
        "& + $chip": {
            marginLeft: theme.spacing(1),
        },
    },
}))

type Props = {
    idea: Idea
}

// TODO: gérer le click des Chips
const IdeaCard = ({ idea }: Props) => {
    const { title, shortDescription } = idea
    const classes = useStyles()

    const TAGS = [
        { id: 1, title: "App mobile" },
        { id: 2, title: "IA" },
        { id: 3, title: "Web app" },
    ]

    return (
        <Card elevation={2}>
            <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    {shortDescription}
                </Typography>
                <ul className={classes.chipList}>
                    {TAGS.map((tag) => (
                        <Chip key={tag.id} label={tag.title} className={classes.chip} component="li" />
                    ))}
                </ul>
            </CardContent>
            <CardActions>
                <Link href={{ pathname: Routes.IDEAS_DETAILS, query: { publicId: idea.publicId } }}>
                    <Button color="primary">Plus d&apos;informations</Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default IdeaCard
