import React from 'react';
import { Box, Button, SimpleGrid, Container, Heading, Input, useColorModeValue, useToast, VStack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTeamStore } from "../Profiler/team";
import TeamCard from "../Components/TeamCard";

const HomePage = () => {

  const { fetchTeams, Teams } = useTeamStore();

  useEffect(() => {
		fetchTeams();
	}, [fetchTeams]);
	console.log("Teams", Teams);

  return (
    <Container maxW='container.x1' py={12}>
      <VStack spacing={8}>
				<Text
					fontSize={"30"}
					fontWeight={"bold"}
					bgGradient={"linear(to-r, green.400, blue.500)"}
					bgClip={"text"}
					textAlign={"center"}
				>
					Current Stored Teams
				</Text>

        <SimpleGrid
					columns={{
						base: 1,
						md: 2,
						lg: 3,
					}}
					spacing={10}
					w={"full"}
				>
					{Teams.map((Team) => (
						<TeamCard key={Team._id} Team={Team} />
					))}
				</SimpleGrid>

				{Teams.length === 0 && (
					<Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
						No teams currently under profile{" "}
						<Link to={"/create"}>
							<Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
								Create a Team
							</Text>
						</Link>
					</Text>
				)}


			</VStack>
    </Container>
  )
}

export default HomePage;
