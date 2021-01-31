import { Menu, MenuItem } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { AccountCircle } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import { useSession, signOut } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { MouseEvent, useCallback, useMemo, useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();
  const [session, loading] = useSession();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const accountMenu = useMemo(
    () => (
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Accéder à mon profil</MenuItem>
        <MenuItem onClick={handleClose}>Mes paramètres</MenuItem>
        <MenuItem
          onClick={() => {
            signOut();
            handleClose();
          }}
        >
          Déconnexion
        </MenuItem>
      </Menu>
    ),
    [anchorEl, signOut]
  );

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
          >
            <MenuIcon />
            <Typography variant="srOnly">ouvrir le menu</Typography>
          </IconButton>
          <Typography variant="h6" component="h1" className={classes.title}>
            qolab
          </Typography>
          {session ? (
            <IconButton
              aria-controls="account-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <AccountCircle />
              <Typography variant="srOnly">
                accéder aux options de mon compte
              </Typography>
            </IconButton>
          ) : (
            <Link href="/api/auth/signin" passHref>
              <Button component="a" color="inherit">
                Se connecter
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
      {accountMenu}
    </div>
  );
}
