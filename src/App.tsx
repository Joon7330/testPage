import { BrowserRouter } from 'react-router-dom';
import { Layout, Header, ErrorWrapper } from './components';

function App() {
    return (
        <BrowserRouter>
            <ErrorWrapper>
                <Header />
                <Layout />
            </ErrorWrapper>
        </BrowserRouter>
    );
}

export default App;
