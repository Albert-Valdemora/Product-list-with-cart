import "./App.css";
import { Card } from "./components/card/Card";
import { Pedidos } from "./components/pedidos/Pedidos";
import data from "./data.json";

function App() {
  console.log(data);

  return (
    <main className="contenedor-productos">
      <h1 className="text-3xl font-bold my-10 text-center sm:text-left">Desserts</h1>
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div className="w-full sm:w-3/6 flex flex-wrap justify-center gap-6">
          {data.map((e) => (
            <Card key={e.category} {...e} />
          ))}
        </div>
        <div className="w-full sm:w-auto mt-8 sm:mt-0 ">
          <Pedidos />
        </div>
      </div>
    </main>
  );
}

export default App;