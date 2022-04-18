import './App.css';
import tw from "twin.macro";
import BankTable from './component/BankTable';


const AppContainer = tw.div`
  items-center
  justify-center
  pt-6
  pb-10
  pl-1
  pr-1
`;

const Title = tw.h1`
  text-2xl
  font-semibold
`;         


function App() {
  return (
      <AppContainer>
      <Title>Bank Search Application</Title>
      <BankTable />
    </AppContainer>
  );
}

export default App;
