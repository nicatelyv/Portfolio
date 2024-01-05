import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";

function PortfolioBlock(props) {
   const {
      image,
      live,
      // source,
      title
   } = props;
   
   return (
      <Box border={'1px solid lightblue'} borderRadius={10} p={1} m={5} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box p={3} mt={5} component={'img'} src={image} alt={'mockup'} />
         <h1 style={{ fontSize: '2rem', marginTop: "20px" }}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
            alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box fontSize={'20px'} p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} />
            </Box>
            {/* <Box fontSize={'15px'} p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
            </Box> */}
         </Box>
      </Box>
   );
}

export default PortfolioBlock;