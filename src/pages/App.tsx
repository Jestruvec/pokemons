import { Provider } from "react-redux";
import { store } from "@/lib/store/store";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home, PokemonDetail, NotFound, MainLayout } from "@/components";

const App = () => {
  return (
    <Provider store={store}>
      <Router basename="/pokemons">
        <MainLayout>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="home" element={<Home />} />
            <Route path="pokemons/:pokemonId" element={<PokemonDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </Router>
    </Provider>
  );
};

export default App;
