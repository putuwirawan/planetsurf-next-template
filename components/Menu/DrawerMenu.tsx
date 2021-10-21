import React, { FC, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ListMenuDrawer from "./ListMenuDrawer";
import { LoginState, ToggleType } from "../../redux/models";
import { RootState } from "../../redux/reducers";
import { useDispatch, useSelector } from "react-redux";
import { thougleMenu } from "../../redux/actions/Toggle.action";

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: "auto",
	},
});

type Anchor = "top" | "left" | "bottom" | "right";

interface Props {
	drawer: boolean;
}

export const DrawerMenu: FC<Props> = (props) => {
	const { drawer } = props;
	const classes = useStyles();
	// const [showDrawer, setShowDrawer] = React.useState(false);
	const { user_login, errorLogin, isLogin }: LoginState = useSelector(
		(state: RootState) => state.loging
	);

	const { shoowMenu }: ToggleType = useSelector(
		(state: RootState) => state.toglle
	);

	const dispatch = useDispatch(); // to Access Action

	return (
		<div>
			<SwipeableDrawer
				anchor="left"
				open={shoowMenu}
				onClose={() => dispatch(thougleMenu(false))}
				onOpen={() => dispatch(thougleMenu(true))}
			>
				<div
					className={clsx(classes.list)}
					role="presentation"
					onClick={() => dispatch(thougleMenu(false))}
					onKeyDown={() => dispatch(thougleMenu(false))}
				>
					<ListMenuDrawer />
				</div>
			</SwipeableDrawer>
		</div>
	);
};
//  onSelectItem={() => dispatch(thougleMenu(false))} 