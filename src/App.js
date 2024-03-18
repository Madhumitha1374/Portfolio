
import './App.css';
import { Body } from './Components/Body';
import { Header } from './Components/Header';
import { createBrowserRouter, ReactProvider, RouterProvider } from 'react-router-dom';
import { MyWork } from './Components/MyWork';
import { Project } from './Components/Project';
import MainContainer from './Components/MainContainer';

const approuter = createBrowserRouter([
  {
    path : "/",
    element : <Body/>,
    children : [
      {
        path : "/",
        element : <MainContainer/>
      },
      {
        path : "/work",
        element : <MyWork/>,
      },
    ]

  },

])

function App() {
  return (
    <div className="font-serif">
      <Header/>
      <RouterProvider router = {approuter}/>
    </div>
  );
}

export default App;
