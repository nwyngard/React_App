import { QueryClient, QueryClientProvider } from 'react-query';
import Ratings from './../components/Ratings';

const Admin = () => {
    const queryClient = new QueryClient();

    return ( 
        <div className="center-content">
            <h1>Feedback Received</h1>
            <QueryClientProvider client={queryClient}>
                <Ratings />
            </QueryClientProvider>
        </div>
     );
}
 
export default Admin;
