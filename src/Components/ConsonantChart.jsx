import "./ConsonantChart.scss";
import consonantData from "../Data/consonants.json"; 

const ConsonantChart = ({ consonants, sortingSounds, soundsDistribution }) => {
  // Helper to find symbols by place and manner from JSON
  const getSound = (mannerKey, place, isVoiced = null) => {
    const list = consonantData[mannerKey] || [];
    const filtered = list.filter(item => 
      item.place.toLowerCase() === place.toLowerCase() && 
      (isVoiced === null || item.voiced === isVoiced)
    );
    
    const symbols = filtered.map(f => f.symbol);
    // Return null if no symbols found to avoid empty strings/labels in the UI
    if (symbols.length === 0) return null;
    return soundsDistribution(sortingSounds(consonants, consonantData), ...symbols);
  };

  // Function to deal with non pulmonic sounds as they are organized differently
  const getNonPulmonic = (categoryKey, place) => {
  const list = consonantData[categoryKey] || [];
  
  // Filter by place
  const matches = list.filter(item => 
    item.place.toLowerCase() === place.toLowerCase()
  );

  if (matches.length === 0) return null;

  return matches.map((item, idx) => {
    const sound = soundsDistribution(sortingSounds(consonants, consonantData), item.symbol);
    
    // If the user hasn't selected this sound, don't render it
    if (!sound) return null;

    // ejectives follow a different pattern
    if (categoryKey === "ejectives")
    {
      const label = `${item.type || ""} ${item.manner || ""}`.trim();
      return (
        <div key={idx} className="non-pulmonic-item">
          {sound} <span className="label-text">{label} {place}</span>
        </div>
      );
    
    }
    // Speical case: clicks
    if (categoryKey === "clicks") {
      const label = `${item.type || ""} ${item.release || ""}`.trim();
      return (
        <div key={idx} className="non-pulmonic-item">
          {sound} <span className="label-text">{label} {place}</span>
        </div>
      );
    }
    // else ejective and implosives
    return (
      <div key={idx} className="non-pulmonic-item">
        {sound} <span className="label-text">{place}</span>
      </div>
    );
  });
};

  const places = [
    "Bilabial", "Labiodental", "Linguolabial", "Dental", "Alveolar", "Postalveolar", 
    "Retroflex", "Palatal", "Velar", "Uvular", "Pharyngeal", "Glottal"
  ];

  const renderPair = (manner, place) => (
  <div className="ipa-split-cell">
    <div className="voiceless-side">{getSound(manner, place, false)}</div>
    <div className="voiced-side">{getSound(manner, place, true)}</div>
  </div>
);

  return (
    <div className="consonant-charts">
      {/* --- PULMONIC TABLE --- */}
      <table className="tb main-tb">
        <caption className="table-title">Pulmonic consonants</caption>
        <thead>
          <tr>
            <th className="cell"></th>
            {places.map(p => <th key={p} className="cell cell-header">{p}</th>)}
          </tr>
        </thead>
        <tbody>
             <tr>
            <td className="cell cell-header">Nasal</td>
            <td className="cell">{renderPair("nasals", "Bilabial")}</td>
            <td className="cell">{renderPair("nasals", "Labiodental")}</td>
            <td className="cell">{renderPair("nasals", "Linguolabial")}</td>
            <td className="cell">{renderPair("nasals", "Dental")}</td>
            <td className="cell">{renderPair("nasals", "Alveolar")}</td>
            <td className="cell">{renderPair("nasals", "Postalveolar")}</td>
            <td className="cell">{renderPair("nasals", "Retroflex")}</td>
            <td className="cell">{renderPair("nasals", "Palatal")}</td>
            <td className="cell">{renderPair("nasals", "Velar")}</td>
            <td className="cell">{renderPair("nasals", "Uvular")}</td>
            <td className="cell cell-filled"></td>
            <td className="cell cell-filled"></td>
          </tr>
          <tr>
            <td className="cell cell-header">Plosive</td>
            <td className="cell">{renderPair("plosives", "Bilabial")}</td>
            <td className="cell">{renderPair("plosives", "Labiodental")}</td>
            <td className="cell">{renderPair("plosives", "Linguolabial")}</td>
            <td className="cell">{renderPair("plosives", "Dental")}</td>
            <td className="cell">{renderPair("plosives", "Alveolar")}</td>
            <td className="cell">{renderPair("plosives", "Postalveolar")}</td>
            <td className="cell">{renderPair("plosives", "Retroflex")}</td>
            <td className="cell">{renderPair("plosives", "Palatal")}</td>
            <td className="cell">{renderPair("plosives", "Velar")}</td>
            <td className="cell">{renderPair("plosives", "Uvular")}</td>
            <td className="cell">{renderPair("plosives", "Pharyngeal")}</td>
            <td className="cell">{renderPair("plosives", "Glottal")}</td>
          </tr>
          <tr>
            <td className="cell cell-header">Sibilant Affricate</td>
            <td className="cell cell-filled"></td>
            <td className="cell cell-filled"></td>
            <td className="cell cell-filled"></td>
            <td className="cell">{renderPair("sibilant_affricates", "Dental")}</td>
            <td className="cell">{renderPair("sibilant_affricates", "Alveolar")}</td>
            <td className="cell">{renderPair("sibilant_affricates", "Postalveolar")}</td>
            <td className="cell">{renderPair("sibilant_affricates", "Retroflex")}</td>
            <td className="cell">{renderPair("sibilant_affricates", "Palatal")}</td>
            <td className="cell cell-filled"></td>
            <td className="cell cell-filled"></td>
            <td className="cell cell-filled"></td>
            <td className="cell cell-filled"></td>      
          </tr>
          <tr>
            <td className="cell cell-header">Non-Sibilant Affricate</td>
            <td className="cell">{renderPair("non_sibilant_affricates", "Bilabial")}</td>
            <td className="cell">{renderPair("non_sibilant_affricates", "Labiodental")}</td>
            <td className="cell">{renderPair("non_sibilant_affricates", "Linghobilabial")}</td>
            <td className="cell">{renderPair("non_sibilant_affricates", "Dental")}</td>
            <td className="cell">{renderPair("non_sibilant_affricates", "Alveolar")}</td>
            <td className="cell">{renderPair("non_sibilant_affricates", "Postalveolar")}</td>
            <td className="cell">{renderPair("non_sibilant_affricates", "Retroflex")}</td>
            <td className="cell">{renderPair("non_sibilant_affricates", "Palatal")}</td>
            <td className="cell">{renderPair("non_sibilant_affricates", "Velar")}</td>
            <td className="cell">{renderPair("non_sibilant_affricates", "Uvular")}</td>
            <td className="cell">{renderPair("non_sibilant_affricates", "Pharyngeal")}</td>
            <td className="cell">{renderPair("non_sibilant_affricates", "Glottal")}</td>
          </tr>
        <tr>
            <td className="cell cell-header">Sibilante fricative</td>
            <td className="cell">{renderPair("sibilant_fricatives", "Bilabial")}</td>
            <td className="cell">{renderPair("sibilant_fricatives", "Labiodental")}</td>
            <td className="cell">{renderPair("sibilant_fricatives", "Linguolabial")}</td>
            <td className="cell">{renderPair("sibilant_fricatives", "Dental")}</td>
            <td className="cell">{renderPair("sibilant_fricatives", "Alveolar")}</td>
            <td className="cell">{renderPair("sibilant_fricatives", "Postalveolar")}</td>
            <td className="cell">{renderPair("sibilant_fricatives", "Retroflex")}</td>
            <td className="cell">{renderPair("sibilant_fricatives", "Palatal")}</td>
            <td className="cell">{renderPair("sibilant_fricatives", "Velar")}</td>
            <td className="cell">{renderPair("sibilant_fricatives", "Uvular")}</td>
            <td className="cell">{renderPair("sibilant_fricatives", "Pharyngeal")}</td>
            <td className="cell">{renderPair("sibilant_fricatives", "Glottal")}</td>
          </tr>
           <tr>
            <td className="cell cell-header">Non-sibilante fricative</td>
            <td className="cell">{renderPair("non_sibilant_fricatives", "Bilabial")}</td>
            <td className="cell">{renderPair("non_sibilant_fricatives", "Labiodental")}</td>
            <td className="cell">{renderPair("non_sibilant_fricatives", "Linguolabial")}</td>
            <td className="cell">{renderPair("non_sibilant_fricatives", "Dental")}</td>
            <td className="cell">{renderPair("non_sibilant_fricatives", "Alveolar")}</td>
            <td className="cell">{renderPair("non_sibilant_fricatives", "Postalveolar")}</td>
            <td className="cell">{renderPair("non_sibilant_fricatives", "Retroflex")}</td>
            <td className="cell">{renderPair("non_sibilant_fricatives", "Palatal")}</td>
            <td className="cell">{renderPair("non_sibilant_fricatives", "Velar")}</td>
            <td className="cell">{renderPair("non_sibilant_fricatives", "Uvular")}</td>
            <td className="cell">{renderPair("non_sibilant_fricatives", "Pharyngeal")}</td>
            <td className="cell">{renderPair("non_sibilant_fricatives", "Glottal")}</td>
          </tr>
          <tr>
            <td className="cell cell-header">Approximant</td>
            <td className="cell">{renderPair("approximants", "Bilabial")}</td>
            <td className="cell">{renderPair("approximants", "Labiodental")}</td>
            <td className="cell">{renderPair("approximants", "Linguolabial")}</td>
            <td className="cell">{renderPair("approximants", "Dental")}</td>
            <td className="cell">{renderPair("approximants", "Alveolar")}</td>
            <td className="cell">{renderPair("approximants", "Postalveolar")}</td>
            <td className="cell">{renderPair("approximants", "Retroflex")}</td>
            <td className="cell">{renderPair("approximants", "Palatal")}</td>
            <td className="cell">{renderPair("approximants", "Velar")}</td>
            <td className="cell">{renderPair("approximants", "Uvular")}</td>
            <td className="cell">{renderPair("approximants", "Pharyngeal")}</td>
            <td className="cell">{renderPair("approximants", "Glottal")}</td>
          </tr>
           <tr>
            <td className="cell cell-header">Tap/Flap</td>
            <td className="cell">{renderPair("taps_and_flaps", "Bilabial")}</td>
            <td className="cell">{renderPair("taps_and_flaps", "Labiodental")}</td>
            <td className="cell">{renderPair("taps_and_flaps", "Linguolabial")}</td>
            <td className="cell">{renderPair("taps_and_flaps", "Dental")}</td>
            <td className="cell">{renderPair("taps_and_flaps", "Alveolar")}</td>
            <td className="cell">{renderPair("taps_and_flaps", "Postalveolar")}</td>
            <td className="cell">{renderPair("taps_and_flaps", "Retroflex")}</td>
            <td className="cell">{renderPair("taps_and_flaps", "Palatal")}</td>
            <td className="cell cell-filled"></td>
            <td className="cell">{renderPair("taps_and_flaps", "Uvular")}</td>
            <td className="cell">{renderPair("taps_and_flaps", "Pharyngeal")}</td>
            <td className="cell cell-filled"></td>
          </tr>
          <tr>
            <td className="cell cell-header">Trill</td>
            <td className="cell">{renderPair("trills", "Bilabial")}</td>
            <td className="cell"></td>
            <td className="cell">{renderPair("trills", "Linguolabial")}</td>
            <td className="cell">{renderPair("trills", "Dental")}</td>
            <td className="cell">{renderPair("trills", "Alveolar")}</td>
            <td className="cell">{renderPair("trills", "Postalveolar")}</td>
            <td className="cell">{renderPair("trills", "Retroflex")}</td>
            <td className="cell">{renderPair("trills", "Palatal")}</td>
            <td className="cell cell-filled"></td>
            <td className="cell">{renderPair("trills", "Uvular")}</td>
            <td className="cell">{renderPair("trills", "Pharyngeal")}</td>
            <td className="cell cell-filled"></td>
          </tr>
         
          <tr>
            <td className="cell cell-header">Lateral Affricate</td>
            <td className="cell cell-filled"></td>
            <td className="cell cell-filled"></td>
            <td className="cell">{renderPair("lateral_affricates", "Linguolabial")}</td>
            <td className="cell">{renderPair("lateral_affricates", "Dental")}</td>
            <td className="cell">{renderPair("lateral_affricates", "Alveolar")}</td>
            <td className="cell">{renderPair("lateral_affricates", "Postalveolar")}</td>
            <td className="cell">{renderPair("lateral_affricates", "Retroflex")}</td>
            <td className="cell">{renderPair("lateral_affricates", "Palatal")}</td>
            <td className="cell">{renderPair("lateral_affricates", "Velar")}</td>
            <td className="cell">{renderPair("lateral_affricates", "Uvular")}</td>
            <td className="cell cell-filled"></td>
            <td className="cell cell-filled"></td>
          </tr>
          <tr>
            <td className="cell cell-header">Lateral Fricative</td>
            <td className="cell cell-filled"></td>
            <td className="cell cell-filled"></td>
            <td className="cell">{renderPair("lateral_fricatives", "Linguodental")}</td>
            <td className="cell">{renderPair("lateral_fricatives", "Dental")}</td>
            <td className="cell">{renderPair("lateral_fricatives", "Alveolar")}</td>
            <td className="cell">{renderPair("lateral_fricatives", "Postalveolar")}</td>
            <td className="cell">{renderPair("lateral_fricatives", "Retroflex")}</td>
            <td className="cell">{renderPair("lateral_fricatives", "Palatal")}</td>
            <td className="cell">{renderPair("lateral_fricatives", "Velar")}</td>
             <td className="cell">{renderPair("lateral_fricatives", "Uvular")}</td>
            <td className="cell cell-filled"></td>
            <td className="cell cell-filled"></td>
          </tr>
          
          <tr>
            <td className="cell cell-header">Lateral Approx.</td>
            <td className="cell cell-filled"></td>
            <td className="cell cell-filled"></td>
            <td className="cell">{renderPair("lateral_approximants", "Linguolabial")}</td>
            <td className="cell">{renderPair("lateral_approximants", "Dental")}</td>
            <td className="cell">{renderPair("lateral_approximants", "Alveolar")}</td>
            <td className="cell">{renderPair("lateral_approximants", "Postalveolar")}</td>
            <td className="cell">{renderPair("lateral_approximants", "Retroflex")}</td>
            <td className="cell">{renderPair("lateral_approximants", "Palatal")}</td>
            <td className="cell">{renderPair("lateral_approximants", "Velar")}</td>
            <td className="cell">{renderPair("lateral_approximants", "Uvular")}</td>
            <td className="cell cell-filled"></td>
            <td className="cell cell-filled"></td>
          </tr>
           <tr>
            <td className="cell cell-header">Lateral tap/flap</td>
            <td className="cell cell-filled"></td>
            <td className="cell cell-filled"></td>
            <td className="cell">{renderPair("lateral_taps", "Linguolabial")}</td>
            <td className="cell">{renderPair("lateral_taps", "Dental")}</td>
            <td className="cell">{renderPair("lateral_taps", "Alveolar")}</td>
            <td className="cell">{renderPair("lateral_taps", "Postalveolar")}</td>
            <td className="cell">{renderPair("lateral_taps", "Retroflex")}</td>
            <td className="cell">{renderPair("lateral_taps", "Palatal")}</td>
            <td className="cell">{renderPair("lateral_taps", "Velar")}</td>
            <td className="cell">{renderPair("lateral_taps", "Uvular")}</td>
            <td className="cell cell-filled"></td>
            <td className="cell cell-filled"></td>
          </tr>
        </tbody>
      </table>

      {/*NON-PULMONIC */}
<div className="wrapper-other-cons">
        <table className="tb tb-non-pulmonic">
          <caption className="table-title">Non-Pulmonic</caption>
          <thead>
            <tr>
              <th className="cell cell-header">Clicks</th>
              <th className="cell cell-header">Implosives</th>
              <th className="cell cell-header">Ejectives</th>
            </tr>
          </thead>
         <tbody>
  {[
    "Bilabial", 
    "Labiodental",
    "Dental", 
    "Alveolar", 
    "Dental/Alveolar",
    "Postalveolar", 
    "Retroflex", 
    "Palatal", 
    "Velar", 
    "Uvular",
    "Lateral"
  ].map(place => {
    const clickCell = getNonPulmonic("clicks", place);
    const implosiveCell = getNonPulmonic("implosives", place);
    const ejectiveCell = getNonPulmonic("ejectives", place);

    // Filter out nulls from the arrays to see if there's actually content
    const hasClick = clickCell?.some(x => x !== null);
    const hasImplosive = implosiveCell?.some(x => x !== null);
    const hasEjective = ejectiveCell?.some(x => x !== null);

    if (!hasClick && !hasImplosive && !hasEjective) return null;

    return (
      <tr key={place}>
        <td className="cell-large">{clickCell}</td>
        <td className="cell-large">{implosiveCell}</td>
        <td className="cell-large">{ejectiveCell}</td>
      </tr>
    );
  })}
</tbody>
        </table>
  
    </div>
      <div className="wrapper-other-cons">
        <table className="tb">
          <caption className="table-title">Co-articulated & Other Symbols</caption>
          <tbody>
            {consonantData.co_articulated.map((item, index) => {
              // Only render if the user has selected this sound
              const sound = soundsDistribution(sortingSounds(consonants, consonantData), item.symbol);
            if (!sound) return null;
                    return (
                    <tr key={index}>
                      <td className="cell-large">
                        {sound} {item.place} {item.manner}
                      </td>
                    </tr>);
                  })}
          </tbody>
        </table>
        </div>
      </div>
  );
};

export default ConsonantChart;