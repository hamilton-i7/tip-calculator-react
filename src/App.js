import Card from './components/general/Card';
import Logo from './components/general/Logo';
import Controls from './components/ui/Controls';
import TipInfo from './components/ui/TipInfo';

function App() {
  return (
    <>
      <Logo />
      <main>
        <Card>
          <Controls />
          <TipInfo />
        </Card>
      </main>
    </>
  );
}

export default App;
