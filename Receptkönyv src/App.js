import recipebook from './Images/recipebook.png';
import RecipeComponent from './Components/RecipeComponent';
import './CustomCss.css';

function App() {

  const recipes =
    [
      {
        id: 1,
        name: "Rántotta",
        ingredients: [
          "2 tojás",
          "egy csipet só"
        ],
        instructions: "Feltörjük, összekeverjük, megsütjük, finom lesz!",
        difficulty: 3
      },
      {
        id: 2,
        name: "Főtt tojás",
        ingredients: [
          "1 tojás",
          "egy csipet só"
        ],
        instructions: "Megfőzzük, megpucoljuk, megesszük egy kis sóval!",
        difficulty: 2
      },
      {
        id: 3,
        name: "Tükörtojás",
        ingredients: [
          "1 tojás",
          "egy csipet só",
          "majoranna"
        ],
        instructions: "Feltörjük, nem keverjük össze, megsütjük, finom lesz!",
        difficulty: 2
      }
    ]

  return (
    <div className="App">
      <header className="custom-app-header">
        <img
          src={recipebook}
          alt="receptkönyv"
          className="custom-header-logo"
        />
        <b className="custom-header-title">Receptkönyv</b>
      </header>
      <p className="custom-title">Receptek</p>
      {recipes.map(item => {
        return (<RecipeComponent key={item.id} recipe={item} />)
      }
      )}
    </div>
  );
}

export default App;
