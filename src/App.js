import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

import GlobalReset from './assets/css/GlobalReset';
import GlobalStyles from './assets/css/GlobalStyles';

import Homepage from './components/pages/Home/Home';
import SendTest from './components/pages/SendTest/SendTest';
import ViewTest from './components/pages/ViewTest/ViewTest';

function App() {
    return (
        <BrowserRouter>
            <GlobalReset />
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/send-test" element={<SendTest />} />
                <Route path="/view-test" element={<ViewTest />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
