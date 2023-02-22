import { Actions } from "../../../features/components/actions/actions";
import { Display } from "../../../features/components/display/display";
import { Keyboard } from "../../../features/components/keyboard/keyboard";

export function App() {
  return (
    <div className="container">
      <Display></Display>
      <main className="phonne">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </main>
    </div>
  );
}
