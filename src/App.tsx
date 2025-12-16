import { Button } from './components';

function App() {
  return (
    <div className="p-8 space-y-4">
      <Button>Primary</Button>

      <Button variant="secondary">Secondary</Button>

      <Button variant="outline">Outline</Button>

      <Button size="sm">Small</Button>

      <Button size="lg">Large</Button>

      <Button isLoading>Saving</Button>

      <Button disabled>Disabled</Button>
    </div>
  );
}

export default App;
