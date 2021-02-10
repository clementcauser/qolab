import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#7224D8",
            light: "#a857ff",
            dark: "#3700a5",
        },
        secondary: {
            main: "#F5223B",
            dark: "#ba0014",
            light: "#ff6366",
        },
    },
    shape: {
        borderRadius: 8,
    },
    typography: {
        fontFamily: [
            "Poppins",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
    },
})

export default theme
