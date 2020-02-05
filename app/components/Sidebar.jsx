import React from 'react';
import styled from 'styled-components';
import theme from './Theme'

const SideBarBlock = styled.section`
  flex-shrink: 0;
  width: 280px;
  height: calc( 100% - 40px );
  left: 0;
  top: 0;
  padding-top: 40px;

  background: ${theme.sidebarBackground};
  border-right: 1px solid rgba(0,0,0,.5);
`;

const SearchField = styled.input`
	width: calc( 100% - 80px );
	padding: 10px 10px 10px 30px;
	margin: 4px 20px;
	height:20px;
	line-height:20px;
	background: ${theme.activityBarBackground};
	border: none;
	color: #fff;
	border-radius: 6px;
`;

const Sidebar = () => {
	return(
		<SideBarBlock>
			<SearchField type="text" placeholder="Search" />
		</SideBarBlock>
	);
}

export default Sidebar;
