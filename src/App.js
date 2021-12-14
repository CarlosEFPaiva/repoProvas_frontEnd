import {
    BrowserRouter,
    Routes,
} from 'react-router-dom';

import GlobalReset from './assets/css/GlobalReset';
import GlobalStyles from './assets/css/GlobalStyles';

function App() {
    return (
        <BrowserRouter>
            <GlobalReset />
            <GlobalStyles />
            <Routes>
                {/* <Route path="/" element={< />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
