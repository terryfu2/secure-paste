import '../res/App.css';
import '../res/Form.css';
import styled from 'styled-components'


function Form() {
  return (
    <div className="App">
      <header className="App-header">
        

        <form className="form">
            

            <div class="textAreaColumn">
                <div>
                    <span>Plaintext</span>
                    <textarea placeholder="The quick brown fox..."></textarea>
                </div>
                
                <div>
                    <span>Ciphertext</span>
                    <textarea></textarea>
                </div>
            </div>
       
        </form> 
        <div class="btn-group">
            <button>encrpyt</button>
            <button>decrpyt</button>
        </div>
      </header>
    </div>
  );
}

export default Form;
 