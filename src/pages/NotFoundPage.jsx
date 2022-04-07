import React from 'react'
import { Box, Image, Heading } from "@chakra-ui/react";
import notFound from "../imgs/404.svg";

function NotFoundPage() {
  return (
    <>
        <Box display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems={'center'} mt={10} height={'80vh'}>
        <Image
            src={notFound}
            alt="Afshin Nahian Tripto"
            width={['80vw','80vw', '400px', '450px']}
            height={"auto"}
          />
            <Heading textAlign={'center'} fontSize={40}>Not Found</Heading>
        </Box>
    </>
  )
}

export default NotFoundPage