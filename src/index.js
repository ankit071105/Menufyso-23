import ReactDOM from 'react-dom/client';
import App from './App';
import React, { StrictMode,createContext,useState } from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './redux/store';



const AppWrapper = ()=>{

  return(
    
           <StrictMode>
  <ColorModeScript/>
<ChakraProvider>
<Provider store={store}>

<App />
 </Provider>
</ChakraProvider>
  </StrictMode>
      
  )
} 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    AppWrapper()
);


