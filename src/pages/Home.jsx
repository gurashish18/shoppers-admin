/** @format */

import React from "react";
import HomeWidget from "../components/HomeWidget";
import styled from "styled-components";

const Home = () => {
	return (
		<Container>
			<Wrapper>
				<HomeWidgets>
					<HomeWidget
						title={"Revenue"}
						value={"2,415"}
						description="compared to last month"
						change={"-11.4"}
						isPositive={false}
					/>
					<HomeWidget
						title={"Sales"}
						value={"4,415"}
						description="compared to last month"
						change={"-1.4"}
						isPositive={false}
					/>
					<HomeWidget
						title={"Cost"}
						value={"2,250"}
						description="compared to last month"
						change={"+2.4"}
						isPositive={true}
					/>
				</HomeWidgets>
			</Wrapper>
		</Container>
	);
};

export default Home;

const Container = styled.div`
	width: 100%;
`;
const Wrapper = styled.div`
	padding: 20px 40px;
`;
const HomeWidgets = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 50px;
`;
