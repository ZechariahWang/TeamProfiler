import React from 'react'
import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useTeamStore } from '../Profiler/team';

const CreatePage = () => {
  const [newTeam, setNewTeam] = useState({
    name: "",
	});

  const { createTeam } = useTeamStore();
  const toast = useToast();

	const handleAddTeam = async () => {
		const { success, message } = await createTeam(newTeam);
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: message,
				status: "success",
				isClosable: true,
			});
		}
		setNewTeam({ name: ""});
	};

  return <Container maxW={"container.sm"} alignContent={"center"} justifyContent={"center"} py={12}>
    <VStack
      spacing={1}
    >
      <Heading
	   as={"h1"}
	   size={"2x1"} 
	   textAlign={"center"} 
	   mb={8} 
	   fontWeight={"bold"}
	   bgGradient={"linear(to-r, green.400, blue.500)"}
	   bgClip={"text"}
	   fontSize={"30"}
	   >
        Add a Team Profile
      </Heading>

      <Box
        w={"full"} bg={useColorModeValue("white", "gray.800") }
        p={6} rounded = {"lg"} shadow={"md"}
      >
        <VStack spacing={4}>
            <Input
							placeholder='Team Name'
							name='name'
							value={newTeam.name}
							onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
							fontWeight={"light"}
						/>
            <Button colorScheme='blue' onClick={handleAddTeam} w='full' fontWeight={"light"}>
				Add Team
			</Button>
        </VStack>
      </Box>
    </VStack>
  </Container>
}

export default CreatePage
