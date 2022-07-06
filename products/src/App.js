import Products from "./containers/Products";
import styled from "styled-components";
import {Route, Routes} from "react-router-dom"
import ProductDetails from "./containers/ProductDetails";

function App() {

  return (
    <AppContainer>
		<Routes>
			<Route path="/" element={<Products />} />
			<Route  path="/product/:id" element={<ProductDetails />} />
		</Routes>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
	background: white;
`