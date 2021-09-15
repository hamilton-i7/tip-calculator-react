import Card from './components/general/Card';
import Logo from './components/general/Logo';
import Controls from './components/ui/Controls';
import TipInfo from './components/ui/TipInfo';
import { card } from './App.module.scss';
import { useState } from 'react';

const tipButtons = [
  {
    id: '000',
    percentage: 0.05,
  },
  {
    id: '001',
    percentage: 0.1,
  },
  {
    id: '002',
    percentage: 0.15,
  },
  {
    id: '003',
    percentage: 0.25,
  },
  {
    id: '004',
    percentage: 0.5,
  },
];

function App() {
  const [bill, setBill] = useState('');
  const [tipPercentage, setTipPercentage] = useState(0);
  const [peopleAmount, setPeopleAmount] = useState('');
  const [selectedButtonID, setSelectedButtonID] = useState('');
  const [customPercentage, setCustomPercentage] = useState('');

  const billHandler = e => {
    const currentBill = e.target.value;
    setBill(currentBill);
  };
  const peopleAmountHandler = e => {
    setPeopleAmount(e.target.value);
  };
  const tipPercentageHandler = button => {
    setTipPercentage(button.percentage);
    setSelectedButtonID(button.id);

    //* Clear custom percentage field if there's a value
    if (customPercentage) setCustomPercentage('');
  };
  const customPercentageHandler = e => {
    const currentPercentage = e.target.value;
    setCustomPercentage(currentPercentage);
    setTipPercentage(+currentPercentage / 100);

    //* Unselected any percentage button if there's one
    if (currentPercentage) setSelectedButtonID(null);
  };

  return (
    <>
      <Logo />
      <main>
        <Card className={card}>
          <Controls
            bill={bill}
            onBillChange={billHandler}
            peopleAmount={peopleAmount}
            onPeopleAmountChange={peopleAmountHandler}
            tipButtons={tipButtons}
            onTipButtonClick={tipPercentageHandler}
            selectedTipButtonID={selectedButtonID}
            customPercentage={customPercentage}
            onCustomPercentageChange={customPercentageHandler}
          />
          <TipInfo
            bill={bill}
            peopleAmount={peopleAmount}
            percentage={tipPercentage}
          />
        </Card>
      </main>
    </>
  );
}

export default App;
