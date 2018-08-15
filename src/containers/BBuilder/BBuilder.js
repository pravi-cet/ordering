import React, { Component} from 'react';
import Dummy from '../../hoc/Dummy';
import B from '../../components/B/B';
class BBuilder extends Component{
  state = {
    ingredients : {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  }
  render() {

    console.log("----->" + this.state.ingredients.salad);
    return (
    <Dummy>
      <B ingredients={this.state.ingredients}/>
      <div>Build Controls</div>
    </Dummy>
  );
  }
}

export default BBuilder;
