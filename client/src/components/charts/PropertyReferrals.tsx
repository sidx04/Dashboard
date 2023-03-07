import { Box, Typography } from '@pankod/refine-mui'
import React from 'react'
import { propertyReferralsInfo } from 'constants/index'
import { Stack } from '@pankod/refine-mui'

interface ProgressBarProps{
  title: string,
  percentage: number,
  color: string
}

const ProgressBar=({ title, percentage, color }: ProgressBarProps)=>(
  <Box width="100%">
    <Stack
     direction="row" 
     alignItems="center"
     justifyContent="space-between"
    >
      <Typography
        fontSize={16}
        fontWeight={500}
        color="#11142d">
          {title}
      </Typography>

      <Typography
        fontSize={16}
        fontWeight={500}
        color="#11142d">
          {percentage}
      </Typography>
    </Stack>

    <Box
      mt={2}
      position="relative"
      width="100%"
      height="8px"
      borderRadius={2}
      bgcolor="#e4e8ef"
    >
      <Box
       width={`${percentage}%`} 
       bgcolor={color} 
       position="absolute"
       height="100%"
       borderRadius={2}
      />
    </Box>
  </Box>
)

const PropetyReferrals = () => {
  return (
    <Box
      p={4}
      flex={1}
      bgcolor="#fcfcfc"
      minWidth={490}
      id="chart"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={18} fontWeight={600} color="#11142d">
        Property Referrals
        <Stack my="20px" direction="column" gap={4}>
          {propertyReferralsInfo.map((bar)=>
            <ProgressBar key={bar.title} {...bar}/>
          )}
        </Stack>
      </Typography>
    </Box>
  )
}

export default PropetyReferrals