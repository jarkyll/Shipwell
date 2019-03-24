import React from 'react';
import Axios from 'axios';
import * as a from 'carbon-components';

const Home = () => {
  // Axios.get('https://sandbox.iexapis.com/beta/ref-data/symbols?token=Tpk_f01a5b9dc7654140b8086f22193ed178').then((resp) => {
  //   console.log(resp);
  // }).catch((err) => {
  //   console.log(err);
  // })
  return (
    <React.Fragment>
      <div>This is the home component</div>
      <div class="bx--grid">
  <div class="bx--row">
    <div class="bx--col-xs-12 bx--col-sm-6 bx--col-md-4 bx--col-lg-3">
      <p>Content space for bx--col-xs-12 bx--col-sm-6</p>
    </div>
  </div>
</div>
      <button
  class="bx--btn bx--btn--primary
  "
  
  type="button"
>
  Button
</button>
    </React.Fragment>
  )
}

export default Home;