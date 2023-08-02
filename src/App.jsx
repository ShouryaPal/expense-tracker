import AddTransaction from "./Components/AddTransaction";
import Balance from "./Components/Balance";
import Header from "./Components/Header";
import TransactionList from "./Components/TransactionList";
import IncomeExpenses from "./Components/incomeExpenses";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
  );
}

export default App;
