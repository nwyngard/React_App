import { QueryClient, QueryClientProvider } from 'react-query';
import Recipes from "../components/Recipes";


const Home = () => {

    const queryClient = new QueryClient();

    return ( 
        <QueryClientProvider client={queryClient}>
            <Recipes/>
        </QueryClientProvider>
     );
}
 
export default Home;