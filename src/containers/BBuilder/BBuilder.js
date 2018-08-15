import React, { Component} from 'react';
import Dummy from '../../hoc/Dummy';
import B from '../../components/B/B';
class BBuilder extends Component{
  state = {
    ingredients : {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
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
