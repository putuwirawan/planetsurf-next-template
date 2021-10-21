import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Link from "@material-ui/core/Link";

import Button from "@material-ui/core/Button";

const ListMenuDrawer = (props: any) => (
	<>
		<List>
			{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
				<ListItem button key={text}>
					<ListItemIcon>
						{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
					</ListItemIcon>
					<ListItemText primary={text} />
				</ListItem>
			))}
		</List>
		<Divider />
		<List>
			{["All mail", "Trash", "Spam"].map((text, index) => (
				<ListItem button key={text}>
					<ListItemIcon>
						{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
					</ListItemIcon>
					<ListItemText primary={text} />
				</ListItem>
			))}
		</List>
		<Divider />
		<List>
			<ListItem button>
				<Button color="primary">
					<Link href="/about">About</Link>
				</Button>
			</ListItem>
			<ListItem button>
				<Button color="primary">
					<Link href="/topics">Topic</Link>
				</Button>
			</ListItem>
			<ListItem button>
				<Button color="primary">
					<Link href="/product">Product</Link>
				</Button>
			</ListItem>
		</List>
	</>
);

export default ListMenuDrawer;
