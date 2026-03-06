import { useState } from "react";
import "./App.scss";
import ConsonantChart from "./Components/ConsonantChart";
import LetterPicker from "./Components/LetterPicker";
import VowelChart from "./Components/VowelChart";
import plus from "./Img/add_circle_black_24dp.svg";
import minus from "./Img/remove_circle_black_24dp.svg";

function App() {
  const [consonants, setConsonants] = useState([]);
  const [vowels, setVowels] = useState([]);
  const [displayCharts, setDisplayCharts] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const sortingSounds = (list, comp) => {
  // Flatten JSON into a single array of strings, for ex: { plosives: [{symbol: 'p'...}],} into ['p', ...]
  const flatComp = Object.values(comp)
    .flat()
    .map((item) => item.symbol);
  // Sort
  list.sort((a, b) => flatComp.indexOf(a) - flatComp.indexOf(b));
  
  return list;
};

  const soundsDistribution = (sound, cell1, cell2) => {
    let text = "";
    for (let i = 0; i < sound.length; i++) {
      if (sound[i] === cell1) text += `/${sound[i]}/ `;
      if (sound[i] === cell2) text += `/${sound[i]}/`;
    }
    return text;
  };
  return (
    <div className="App">
      <h1 className="title">IPA Chart Generator</h1>
      <section className="instructions">
        <h2 className="title-sm align-center">
          Instructions
          <img
            src={showInstructions ? minus : plus}
            alt="icon show instructions"
            className="icon"
            onClick={() => setShowInstructions(!showInstructions)}></img>
        </h2>
        {showInstructions ? (
          <ol>
            <li>Type the consonants and vowels of your language in their respective boxes.</li>
            <li className="coded">
              If you want to access IPA symbols you can click on the {" "}
              <code className="btn-example db">Show IPA</code> buttons.
            </li>
            <li className="coded">
              Once you're done you can press the <code className="btn-example bb">Create charts</code> button. And,
              voila! You can access the IPA charts you just created. You can also download them as a pdf or print them.
              
              
            </li>
          
              Note: for symbols with diacritic like affricates, you are better off using the buttons rather than typing or copy/pasting.
              The app will likely treat them as separate symbols.
          
          </ol>
        ) : null}
      </section>
      <LetterPicker
        consonantList={consonants}
        setConsonants={setConsonants}
        vowelList={vowels}
        setVowels={setVowels}></LetterPicker>
      <button className="btn btn-primary btn-create" onClick={() => setDisplayCharts(!displayCharts)}>
        {displayCharts ? "Remove charts" : "Create charts"}
      </button>
      {displayCharts ? (
        <div className="wrapper-btns">
          <button className="btn btn-primary " onClick={() => window.print()}>
            Print / Download charts as pdf
          </button>
        </div>
      ) : null}
      {displayCharts ? (
        <VowelChart vowels={vowels} sortingSounds={sortingSounds} soundsDistribution={soundsDistribution}></VowelChart>
      ) : null}
      {displayCharts ? (
        <ConsonantChart
          consonants={consonants}
          sortingSounds={sortingSounds}
          soundsDistribution={soundsDistribution}></ConsonantChart>
      ) : null}
    </div>
  );
}

export default App;
