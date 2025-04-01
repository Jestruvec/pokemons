import { pokemon } from "@/assets/images";

const Header = () => {
  return (
    <header className="bg-gray-800 shadow-lg text-white p-4 fixed h-16 top-0 left-0 right-0 z-10 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Jhonny Estruve</h1>
      <img src={pokemon} alt="pokemon" className="w-32" />
    </header>
  );
};

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="fixed h-[calc(100%-4rem)] w-screen overflow-auto p-2 top-16">
        {children}
      </main>
    </div>
  );
};
