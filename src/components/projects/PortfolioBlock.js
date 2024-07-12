import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";
import "./prjctsBox.scss"
function PortfolioBlock(props) {
   const {
      image,
      live,
      // source,
      title,
      desc
   } = props;

   return (
      <Box className='prjctsBox' borderBottom={'3px solid #c1c1a1'} borderTop={'3px solid #c1c1a1'} p={0} m={5} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box p={3} mt={4} component={'img'} src={image} alt={'mockup'} />
         <h1 style={{ fontSize: '2rem', marginTop: "20px" }}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
            alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <p style={{ color: "gray", fontSize: "16px", marginTop: "-25px", marginBottom: "10px" }}>{desc}</p>
            <Box fontSize={'18px'} p={1}>
               <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} />
            </Box>
            {/* <Box fontSize={'15px'} p={1}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
            </Box> */}
         </Box>
      </Box>
   );
}

export default PortfolioBlock;