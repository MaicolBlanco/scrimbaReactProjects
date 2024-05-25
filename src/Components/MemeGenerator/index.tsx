import Header from "./Components/Header";
// import MemeLocalData from './Components/MemeLocalData'
import MemeApi from './Components/MemeApi'
// import Test from './Test/TestOne'
// import TestTwo from './Test/TestTwo'
// import TestThree from './Test/TestThree'
// import TestFour from './Test/TestFour'

export const MemeGenerator = (): JSX.Element => {
  return (
    <div>
      {/* <Test/> */}
      {/* <TestTwo/> */}
      {/* <TestThree/> */}
      {/* <TestFour/> */}
      <Header />
      {/* <MemeLocalData /> */}
      <MemeApi />
    </div>
  );
};
