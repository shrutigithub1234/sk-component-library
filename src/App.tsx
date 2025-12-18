import { useRef } from 'react';
import { Button } from './components';

function App() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  return (
    <div className="p-8 space-y-4">
      <Button>Primary</Button>

      <Button variant="secondary">Secondary</Button>

      <Button variant="outline">Outline</Button>

      <Button size="sm">Small</Button>

      <Button size="lg">Large</Button>

      <Button isLoading>Saving</Button>

      <Button disabled>Disabled</Button>

      <Button ref={buttonRef}>Target Button</Button>

      <button className="border px-3 py-2" onClick={() => buttonRef.current?.focus()}>
        Focus the design-system button
      </button>
    </div>
  );
}

export default App;
