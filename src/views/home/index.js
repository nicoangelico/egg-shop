import React from 'react';
import {
  Stack,
  Heading,
  Text,
  Button,
  Box,
  Badge,
  Image,
  Grid,
  useToast
} from "@chakra-ui/react";
import { StarIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import usePlatziPunks from "../../hooks/usePlatziPunks";
import { useCallback, useEffect, useState } from "react";

const Home = () => {
  const toast = useToast();
  const [allCourses, setAllCourses] = useState([]);
  const [transfering, setTransfering] = useState(false);
  const { active, account } = useWeb3React();
  const platziPunks = usePlatziPunks();

  const buyCourse = async (_courseId, price) => {
    if (platziPunks) {
      console.log(_courseId, price)
      setTransfering(true);
      await platziPunks.methods.buyCourse('nicoangelico@gmail.com', _courseId)
      .send({
        from: account,
        value: price
      })
      .on("transactionHash", (txHash) => {
        toast({
          title: "Transacción enviada",
          description: txHash,
          status: "info",
        });
      })
      .on("receipt", () => {
        setTransfering(false);
        toast({
          title: "Transacción confirmada",
          description: "Nunca pares de aprender.",
          status: "success",
        });
      })
      .on("error", (error) => {
        setTransfering(false);
        toast({
          title: "Transacción fallida",
          description: error.message,
          status: "error",
        });
      });
    }
  }

  const getPlatziPunksData = useCallback(async () => {
    if (platziPunks) {
      const allCoursesAux = await platziPunks.methods.getAllCoursesPrice().call();
      const allCoursesFixes = allCoursesAux.map((course, i) => {
        return {
          _id: course[0],
          price: course[1]
        }
      });
      console.log(allCoursesFixes);
      setAllCourses(allCoursesFixes);
    }
  }, [platziPunks, account]);

  useEffect(() => {
    getPlatziPunksData();
  }, [getPlatziPunksData]);

  return (
    <Stack
      align={"center"}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 10, md: 15 }}
      direction={{ base: "column-reverse", md: "row" }}
    >
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        >
          <Text
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "yellow.400",
              zIndex: -1,
            }}
          >
            Egg Marketplace
          </Text>
          <br />
          <Text as={"span"} color={"yellow.400"}>
            nunca para de aprender
          </Text>
        </Heading>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        {allCourses.length &&
          allCourses.map((course, index) => {
            return (
              <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
              <Image src='./images/huevo_duro.png' alt='huevo' height="300" width="auto"/>
        
              <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                  <Badge borderRadius='full' px='2' colorScheme='teal'>
                    New
                  </Badge>
                  <Box
                    color='gray.500'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='xs'
                    textTransform='uppercase'
                    ml='2'
                  >
                    3 Hs diarias &bull; 5 dias semanales
                  </Box>
                </Box>
        
                <Box
                  mt='1'
                  fontWeight='semibold'
                  as='h4'
                  lineHeight='tight'
                  isTruncated
                >
                  {'Curso '+course._id}
                </Box>
        
                <Box>
                  {course.price + ' wei'}
                </Box>
        
                <Box display='flex' mt='2' alignItems='center'>
                {[0, 0, 0, 0, 0]
                  .map((_, i) => { return (
                    <StarIcon
                      key={i}
                      color={i < 5 ? 'teal.500' : 'gray.300'}
                    />
                    );}
                  )}
                  <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                    34 reviews
                  </Box>
                </Box>
                  <Button 
                    mt='5' 
                    colorScheme='yellow' 
                    variant='outline' 
                    onClick={() => buyCourse(course._id, course.price)}
                    disabled={transfering}
                  >
                    Comprar
                  </Button>
              </Box>
            </Box>
              );
            })}
          </Grid>
      </Stack>
    </Stack>
  );
};

export default Home;
