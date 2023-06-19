import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Button from './components/Button';
import Sidebar from './components/sidebar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div> HELLO </div>,
  },
  {
    path: "/button",
    element: <Button />,
  },
]);

function App() {
  return (
      <>
        <Sidebar/>
        <main>
          <h1>Fabric + Warp </h1>
          <RouterProvider router={router} />
        </main> 
      </>
  )
}
function Home() {
  return <h2>Home</h2>;
}

export default App
