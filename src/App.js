import './App.css';
import AppContent from "./components/AppContent"; // Винесено в окремий файл
import Providers from "./Providers";

function App() {
    return (
        <Providers>
            <AppContent />
        </Providers>
    );
}

export default App;
