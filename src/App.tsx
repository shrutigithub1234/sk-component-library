import { useRef } from 'react';
import { Button } from './components';

function App() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="min-h-screen bg-neutral-50 py-16">
      <div className="mx-auto max-w-4xl px-6 space-y-16">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Design System Playground</h1>
          <p className="text-neutral-600">Button component variants, sizes, and states.</p>
        </header>

        {/* Showcasing Variants */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button disabled>Disabled</Button>
            <Button isLoading>Loading</Button>
          </div>
        </section>

        {/* Showcasing Sizes */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Sizes</h2>
          <div className="flex items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        {/* An Example */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Ref Handling</h2>
          <div className="flex items-center gap-4">
            <Button ref={buttonRef}>Target Button</Button>
            <button
              className="border rounded-md px-4 py-2 bg-white shadow-sm hover:bg-neutral-100 transition"
              onClick={() => buttonRef.current?.focus()}
            >
              Focus the design-system button
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
