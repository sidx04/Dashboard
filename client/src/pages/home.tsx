import React from 'react'
import { useList }from '@pankod/refine-core';
import { 
  PieChart,
  PropertyCard,
  PropetyReferrals,
  TotalRevenue,
  TopAgent
} from 'components';
import { Box } from '@mui/system';
import { Typography } from '@pankod/refine-mui';

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
         colors={['#475be8', '#e4e8ef']} 
        />

        <PieChart
         title="Properties for Rent"
         value={550}
         series={[60,40]}
         colors={['#475be8', '#e4b8ef']} 
        />

        <PieChart
         title="Total Customers"
         value={54684}
         series={[75,25]}
         colors={['#275be8', '#e4e8ef']} 
        />

        <PieChart
         title="Total Cities"
         value={355}
         series={[75,25]}
         colors={['#475be8', '#e4e8ef']} 
        />
      </Box>

    </Box>

  )
}

export default home