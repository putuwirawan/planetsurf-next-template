import {
	AppBar,
	Badge,
	IconButton,
	makeStyles,
	createStyles,
	Toolbar,
	Theme,
	alpha,
	Typography,
} from "@material-ui/core";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginState, ToggleType } from "../../redux/models";
import { RootState } from "../../redux/reducers";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import MenuIcon from "@material-ui/icons/Menu";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { DrawerMenu } from "../Menu/DrawerMenu";
import { thougleMenu } from "../../redux/actions/Toggle.action";
import { logOut } from "../../redux/actions/Loging.action";
import { useCookies } from "react-cookie";
import router from "next/router";
import Link from "@material-ui/core/Link";
// import { Link as RouterLink } from "react-router-dom";

interface Props {
	data?: any;
	onChangeSearch?: (val: string) => void;
	searchValue?: string;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		grow: {
			flexGrow: 1,
		},
		listDrawer: {
			width: 250,
		},
		fullListDrawer: {
			width: "auto",
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			display: "none",
			[theme.breakpoints.up("sm")]: {
				display: "block",
			},
		},
		search: {
			position: "relative",
			borderRadius: theme.shape.borderRadius,
			backgroundColor: alpha(theme.palette.common.white, 0.15),
			"&:hover": {
				backgroundColor: alpha(theme.palette.common.white, 0.25),
			},
			marginRight: theme.spacing(2),
			marginLeft: 0,
			width: "100%",
			[theme.breakpoints.up("sm")]: {
				marginLeft: theme.spacing(3),
				width: "auto",
			},
		},
		searchIcon: {
			padding: theme.spacing(0, 2),
			height: "100%",
			position: "absolute",
			pointerEvents: "none",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		inputRoot: {
			color: "inherit",
		},
		inputInput: {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
			transition: theme.transitions.create("width"),
			width: "100%",
			[theme.breakpoints.up("md")]: {
				width: "20ch",
			},
		},
		sectionDesktop: {
			display: "none",
			[theme.breakpoints.up("md")]: {
				display: "flex",
			},
		},
		sectionMobile: {
			display: "flex",
			[theme.breakpoints.up("md")]: {
				display: "none",
			},
		},
	})
);

const MatNav: FC<Props> = (props) => {
	const { data, searchValue, onChangeSearch } = props;
	const classes = useStyles();
	const [cookie, setCookie, removeCookie] = useCookies(["user"]);
	const { shoowMenu }: ToggleType = useSelector(
		(state: RootState) => state.toglle
	);
	const { user_login, errorLogin, isLogin }: LoginState = useSelector(
		(state: RootState) => state.loging
	);
	const dispatch = useDispatch(); // to Access Action
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [anchorElMain, setAnchorElMain] = React.useState<null | HTMLElement>(
		null
	);

	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
		React.useState<null | HTMLElement>(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMenuOpenMain = Boolean(anchorElMain);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		setAnchorElMain(null);
		handleMobileMenuClose();
	};
	const handleSignOut = async () => {
		setAnchorEl(null);
		setAnchorElMain(null);
		handleMobileMenuClose();
		dispatch(logOut());
		removeCookie("access_token", { path: "/" });
		removeCookie("refresh_token", { path: "/" });
		removeCookie("username", { path: "/" });
	};
	const handleSignIn = () => {
		router.push("/auth/login");
		setAnchorEl(null);
		setAnchorElMain(null);
		handleMobileMenuClose();
	};
	const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const menuId = "primary-search-account-menu";
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose} key="profile" data-my-value={123}>
				Profile
			</MenuItem>
			{data !== undefined ? (
				<MenuItem onClick={handleSignOut} key="myprofile" data-my-value={3423}>
					Log Out
				</MenuItem>
			) : (
				<MenuItem onClick={handleSignIn} key="myprofile" href="/auth/login">
					Log In
				</MenuItem>
			)}
		</Menu>
	);

	const mobileMenuId = "primary-search-account-menu-mobile";
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton aria-label="show 5 new mails" color="inherit">
					<Badge badgeContent={4} color="secondary">
						<MailIcon />
					</Badge>
				</IconButton>
				<p>Messages</p>
			</MenuItem>
			<MenuItem>
				<IconButton aria-label="show 11 new notifications" color="inherit">
					<Badge badgeContent={11} color="secondary">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<p>Notifications</p>
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit"
				>
					<AccountCircle />
				</IconButton>
				<p>Profile</p>
			</MenuItem>
		</Menu>
	);

	return (
		<div className={classes.grow}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="open drawer"
						onClick={() => dispatch(thougleMenu(!shoowMenu))}
					>
						<MenuIcon />
					</IconButton>
					<Link href="/">
						<IconButton aria-label="back to Home" color="inherit">
							<HomeOutlinedIcon style={{ color: "#EDFBE8" }} />
						</IconButton>
					</Link>
					<Typography className={classes.title} variant="h6" noWrap>
						Material-UI
					</Typography>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ "aria-label": "search" }}
							value={searchValue}
							onChange={(event) =>
								onChangeSearch ? onChangeSearch(event.target.value) : {}
							}
						/>
					</div>
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<IconButton aria-label="show 4 new mails" color="inherit">
							<Badge badgeContent={4} color="secondary">
								<MailIcon />
							</Badge>
						</IconButton>
						<IconButton aria-label="show 17 new notifications" color="inherit">
							<Badge badgeContent={17} color="secondary">
								<NotificationsIcon />
							</Badge>
						</IconButton>
						<IconButton
							edge="end"
							aria-label="account of current user"
							aria-controls={menuId}
							aria-haspopup="true"
							onClick={handleProfileMenuOpen}
							color="inherit"
						>
							<AccountCircle />
							{data !== undefined ? data.username : null}
						</IconButton>
					</div>
					<div className={classes.sectionMobile}>
						<IconButton
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit"
						>
							<MoreIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
			<DrawerMenu drawer={shoowMenu} />
		</div>
	);
};

export default MatNav;
