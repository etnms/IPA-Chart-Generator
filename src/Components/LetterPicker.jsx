import { useEffect, useState } from "react";
import "./LetterPicker.scss";
import vowels from "../Data/vowels.json";
import consonantData from "../Data/consonants.json"; // Renamed for clarity

const LetterPicker = ({
  consonantList,
  setConsonants,
  vowelList,
  setVowels,
}) => {
  const [showIPAVowels, setShowIPAVowels] = useState(false);
  const [showIPAConsonants, setShowIPAConsonants] = useState(false);

  useEffect(() => {
    // Standardizing vowel logic display (per your existing code)
    for (let i = 0; i < vowelList.length; i++) {
      document.querySelector("#vowels-input").value += vowelList[i];
    }
    // Joining consonant list so multi-char symbols (like t͡s) stay intact in the input
    document.querySelector("#consonants-input").value = consonantList.join("");
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e, setListSound) => {
    // Note: Manual typing of complex IPA symbols is difficult; 
    let val = e.target.value;
    
    let tmpList = Array.from(new Set(val.split(''))); 
    // Note: If users type, diacritics won't be handle properly
    setListSound(tmpList);
  };

  const writeLetter = (e, setListSound, list, stringInput) => {
    const symbol = e.target.value;
    if (!list.includes(symbol)) {
      setListSound((prev) => [...prev, symbol]);
    }
    document.querySelector(`#${stringInput}`).value += symbol;
  };

  const createBtns = (input) => {
    if (input === "vowel") {
      return vowels.map((x) => (
        <button
          key={x}
          value={x}
          className="btn btn-letter"
          onClick={(e) => writeLetter(e, setVowels, vowelList, "vowels-input")}
        >
          {x}
        </button>
      ));
    } return Object.entries(consonantData).map(([category, sounds]) => {
      return (
        <div key={category} className="ipa-category-row">
          <h3 className="ipa-category-title">{category.replace(/_/g, " ")}</h3>
          <div className="ipa-buttons-group">
            {sounds.map((item, index) => (
              <button
                key={`${item.symbol}-${index}`}
                value={item.symbol}
                className="btn btn-letter"
                onClick={(e) =>
                  writeLetter(e, setConsonants, consonantList, "consonants-input")
                }
              >
                {item.symbol}
              </button>
            ))}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="input-letters">
      <fieldset>
        <label htmlFor="consonants-input" className="label-letters">
          Consonants
        </label>
        <input
          type="text"
          name="consonants-input"
          id="consonants-input"
          onChange={(e) => handleChange(e, setConsonants)}
        ></input>
        <button
          className="btn btn-secondary btn-ipa"
          onClick={() => setShowIPAConsonants(!showIPAConsonants)}
        >
          {showIPAConsonants ? "Hide IPA for consonants" : "Show IPA for consonants"}
        </button>
      </fieldset>

      {showIPAConsonants ? (
        <div className="wrapper-ipa">{createBtns("consonant")}</div>
      ) : null}

      {/* Vowel section remains unchanged per your request */}
      <fieldset>
        <label htmlFor="vowels-input" className="label-letters">
          Vowels
        </label>
        <input
          type="text"
          name="vowels-input"
          id="vowels-input"
          onChange={(e) => handleChange(e, setVowels)}
        ></input>
        <button
          className="btn btn-secondary btn-ipa"
          onClick={() => setShowIPAVowels(!showIPAVowels)}
        >
          {showIPAVowels ? "Hide IPA for vowels" : "Show IPA for vowels"}
        </button>
      </fieldset>

      {showIPAVowels ? (
        <div className="wrapper-ipa">{createBtns("vowel")}</div>
      ) : null}
    </div>
  );
};

export default LetterPicker;