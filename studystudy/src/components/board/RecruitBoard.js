import React from 'react';
import SideFilter from './SideFilter';
import TopSearch from './TopSearch';

function RecruitBoard(){
	  
  return (
    <>
    	<div>
    		<TopSearch />
    	</div>
		<div>
			<SideFilter />
		</div>
    </>
  );
};

export default RecruitBoard;