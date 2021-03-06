import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const onButtonSubmit = () => {
    props.addRevealPoemCallBack();
  }
  
  function revelFinalPoem() {
      const finalPoem = props.poems.map((poem, i) => {
        return(
          <div key={i}>
            <p>{poem}</p>
          </div>
        );
      });

    return finalPoem;
  }

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {props.reveal ? revelFinalPoem() : ''}
      </section>
      <div onClick={onButtonSubmit} className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;
