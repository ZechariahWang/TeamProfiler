import React from 'react'
import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from '../Profiler/team';

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
	});

  const { createProduct } = useProductStore();
  const toast = useToast();

	const handleAddProduct = async () => {
		const { success, message } = await createProduct(newProduct);
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
		setNewProduct({ name: ""});
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
							value={newProduct.name}
							onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
							fontWeight={"light"}
						/>
						{/* <Input
							placeholder='Price'
							name='price'
							type='number'
							value={newProduct.price}
							onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
							fontWeight={"light"}
						/>
						<Input
							placeholder='Image URL'
							name='image'
							value={newProduct.image}
							onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
							fontWeight={"light"}
						/> */}

            <Button colorScheme='blue' onClick={handleAddProduct} w='full' fontWeight={"light"}>
				Add Team
			</Button>
        </VStack>
      </Box>
    </VStack>
  </Container>
}

export default CreatePage
