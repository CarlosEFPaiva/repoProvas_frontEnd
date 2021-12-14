import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

import GlobalReset from './assets/css/GlobalReset';
import GlobalStyles from './assets/css/GlobalStyles';

import Homepage from './components/pages/Home/Home';

function App() {
    return (
        <BrowserRouter>
            <GlobalReset />
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
