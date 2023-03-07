import React from 'react'
import { useList }from '@pankod/refine-core';
import { Box } from '@mui/system';
import { Stack, Typography } from '@pankod/refine-mui';
import { 
  PieChart,
  PropertyCard,
  PropetyReferrals,
  TotalRevenue,
  TopAgent
} from 'components';

const home = () => {
  return (
    <Box>

      <Typography fontSize={25} fontWeight={700} color="#11142f">
        Dashboard
      </Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
         title="Properties for Sale"
         value={684}
         series={[75,25]}
         colors={['#475be8', '#c9dcff']} 
        />

        <PieChart
         title="Properties for Rent"
         value={550}
         series={[60,40]}
         colors={['#475be8', '#c9dcff']} 
        />

        <PieChart
         title="Total Customers"
         value={54684}
         series={[64,36]}
         colors={['#275be8', '#c9dcff']} 
        />

        <PieChart
         title="Total Cities"
         value={355}
         series={[87,13]}
         colors={['#475be8', '#c9dcff']} 
        />
      </Box>

      <Stack 
        mt="25px"
        width="100%"
        direction={{xs:"column", lg:"row",}}
        gap={5}>
          <TotalRevenue/>
          <PropetyReferrals/>
      </Stack>
    </Box>

  )
}

export default home