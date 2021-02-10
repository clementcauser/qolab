import { makeStyles, Paper, TextField, Typography } from "@material-ui/core"
import { Tag } from "@prisma/client"
import { useForm } from "react-hook-form"

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
        padding: theme.spacing(3),
    },
}))

type FilterIdeasFormValue = {
    title?: string
    tag?: Tag[]
}

type Props = {
    something: string
}

const FilterIdeasPanel = ({ something }: Props) => {
    const classes = useStyles()
    const { handleSubmit } = useForm<FilterIdeasFormValue>()

    const onSubmit = (values: FilterIdeasFormValue) => console.log(values, something)

    return (
        <Paper className={classes.root}>
            <Typography variant="h6" gutterBottom>
                Filtrer par :
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField label={"Rechercher par titre"} placeholder="Une idée géniale..." variant="outlined" />
            </form>
        </Paper>
    )
}

export default FilterIdeasPanel
