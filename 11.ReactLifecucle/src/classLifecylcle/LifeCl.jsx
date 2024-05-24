import { Component, useState } from 'react';
import Countercl from './Countercl';

class LifeCl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initNum: 0,
      isDisplayed: true,
    };
  }

  increase() {
    this.setState({ initNum: this.state.initNum + 1 });
  }

  decrease() {
    this.setState({ initNum: this.state.initNum - 1 });
  }

  render() {
    <section>
      <button
        className='btns-toggle'
        onClick={(e) => this.setState({ isDisplayed: false ? true : false })}
      >
        Toogle App
      </button>
      {this.state.isDisplayed && (
        <Countercl
          startNum={this.state.initNum}
          increseNum={this.increase}
          decreseNum={this.decrease}
        />
      )}
    </section>;
  }
}



// const LifeCl = () => {
// //   const [initNum, setinitNum] = useState(0);
// //   const [isDisplayed, setisDisplayed] = useState(true);

//   return (
//     <section>
//       <button
//         className='btns-toggle'
//         onClick={() => setisDisplayed((prev) => !prev)}
//       >
//         Toogle App
//       </button>

//       {isDisplayed && (
//         <Countercl startNum={initNum} changeStartNum={setinitNum} />
//       )}
//     </section>
//   );
// };

export default LifeCl;
