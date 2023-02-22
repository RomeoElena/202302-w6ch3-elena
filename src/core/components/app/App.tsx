import { Actions } from "../../../features/components/actions/actions";
import { Keyboard } from "../../../features/components/keyboard/keyboard";

export function App() {
  return (
    <div className="container">
      <main className="phone">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </main>
    </div>
  );
}

export default App;
