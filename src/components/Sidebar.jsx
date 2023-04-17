/** @format */

import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupIcon from "@mui/icons-material/Group";
import CategoryIcon from "@mui/icons-material/Category";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SummarizeIcon from "@mui/icons-material/Summarize";
import MailIcon from "@mui/icons-material/Mail";
import FeedbackIcon from "@mui/icons-material/Feedback";
import SendIcon from "@mui/icons-material/Send";

const Sidebar = () => {
	return (
		<Container>
			<Wrapper>
				<SidebarMenu>
					<SidebarMenuTile>Dashboard</SidebarMenuTile>
					<SidebarMenuList>
						<SidebarMenuListItem>
							<HomeIcon />
							HOME
						</SidebarMenuListItem>
						<SidebarMenuListItem>
							<AnalyticsIcon />
							ANALYTICS
						</SidebarMenuListItem>
						<SidebarMenuListItem>
							<TrendingUpIcon />
							SALES
						</SidebarMenuListItem>
					</SidebarMenuList>
				</SidebarMenu>
				<SidebarMenu>
					<SidebarMenuTile>Quick Menu</SidebarMenuTile>
					<SidebarMenuList>
						<SidebarMenuListItem>
							<GroupIcon />
							USERS
						</SidebarMenuListItem>
						<SidebarMenuListItem>
							<CategoryIcon />
							PRODUCTS
						</SidebarMenuListItem>
						<SidebarMenuListItem>
							<ReceiptLongIcon />
							TRANSACTIONS
						</SidebarMenuListItem>
						<SidebarMenuListItem>
							<SummarizeIcon />
							REPORTS
						</SidebarMenuListItem>
					</SidebarMenuList>
				</SidebarMenu>
				<SidebarMenu>
					<SidebarMenuTile>Notifications</SidebarMenuTile>
					<SidebarMenuList>
						<SidebarMenuListItem>
							<MailIcon />
							MAIL
						</SidebarMenuListItem>
						<SidebarMenuListItem>
							<FeedbackIcon />
							FEEDBACKS
						</SidebarMenuListItem>
						<SidebarMenuListItem>
							<SendIcon />
							MESSAGES
						</SidebarMenuListItem>
					</SidebarMenuList>
				</SidebarMenu>
			</Wrapper>
		</Container>
	);
};

export default Sidebar;

const Container = styled.div`
	flex: 1;
	border-right: 1px solid lightgray;
	height: calc(100vh - 60px);
	position: sticky;
	top: 60px;
`;
const Wrapper = styled.div`
	padding: 10px;
`;
const SidebarMenu = styled.div`
	margin-bottom: 20px;
`;
const SidebarMenuTile = styled.h1`
	font-size: 18px;
	color: gray;
	font-weight: 300;
	letter-spacing: 2px;
`;
const SidebarMenuList = styled.ul`
	list-style: none;
	margin-top: 10px;
`;
const SidebarMenuListItem = styled.li`
	display: flex;
	align-items: center;
	margin: 10px 0px;
	gap: 5px;
	cursor: pointer;
	border-radius: 5px;
	padding: 5px;
	color: black;
	font-weight: 300;
	font-size: 12px;
	&:hover {
		background-color: #f6e5e5;
	}
`;
