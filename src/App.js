import "./App.css";

function App(autor) {
    return (
        <div className="App">
            <header className="App-header">
                <h1>TODO APP </h1>
                <p>Autor: {autor.nombre}</p>
                <p>Año: {autor.children}</p>
            </header>
        </div>
    );
}

export default App;
