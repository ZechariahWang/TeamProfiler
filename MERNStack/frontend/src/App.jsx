import { Route, Routes } from "react-router-dom";
import CreatePage from "./Pages/CreatePage";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import { Box, useColorModeValue } from "@chakra-ui/react";

function App() {

  return (
		<Box minH={"100vh"} bg={useColorModeValue("gray.100", "grey.900")}>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/create' element={<CreatePage />} />
			</Routes>
		</Box>
  );
}

export default App;
