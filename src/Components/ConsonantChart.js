import "./ConsonantChart.scss";
import consonantList from "../Data/consonants.json";

const ConsonantChart = ({ consonants, sortingSounds, soundsDistribution }) => {
  return (
    <div className="consonant-charts">
      <table className="tb main-tb">
        <caption className="table-title">Pulmonic consonants</caption>
        <thead>
          <tr>
            <th className="cell"></th>
            <th className="cell cell-header">Bilabial</th>
            <th className="cell cell-header">Labiodental</th>
            <th className="cell cell-header">Dental</th>
            <th className="cell cell-header">Alveolar</th>
            <th className="cell cell-header">Postalveolar</th>
            <th className="cell cell-header">Retroflex</th>
            <th className="cell cell-header">Palatal</th>
            <th className="cell cell-header">Velar</th>
            <th className="cell cell-header">Uvular</th>
            <th className="cell cell-header">Pharyngeal</th>
            <th className="cell cell-header">Glotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="cell cell-header">Plosive</td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "p",
                "b"
              )}
            </td>
            <td className="cell"></td>
            <td className="cell" colSpan="3">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "t",
                "d"
              )}
            </td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "ʈ",
                "ɖ"
              )}
            </td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "c",
                "ɟ"
              )}
            </td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "k",
                "g"
              )}
            </td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "q",
                "ɢ"
              )}
            </td>
            <td className="cell"></td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "\u0294"
              )}
            </td>
          </tr>
          <tr>
            <td className="cell cell-header">Nasal</td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "m"
              )}
            </td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "ɱ"
              )}
            </td>
            <td className="cell" colSpan="3">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "n"
              )}
            </td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "ɳ"
              )}
            </td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "ɲ"
              )}
            </td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "ŋ"
              )}
            </td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "ɴ"
              )}
            </td>
            <td className="cell cell-filled"></td>
            <td className="cell cell-filled"></td>
          </tr>
          <tr>
            <td className="cell cell-header">Trill</td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "ʙ"
              )}
            </td>
            <td className="cell"></td>
            <td className="cell" colSpan="3">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "r"
              )}
            </td>
            <td className="cell"></td>
            <td className="cell"></td>
            <td className="cell cell-filled"></td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "ʀ"
              )}
            </td>
            <td className="cell"></td>
            <td className="cell cell-filled"></td>
          </tr>
          <tr>
            <td className="cell cell-header">Tap/Flap</td>
            <td className="cell"></td>
            <td className="cell"></td>
            <td className="cell" colSpan="3">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "ɾ"
              )}
            </td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "ɽ"
              )}
            </td>
            <td className="cell"></td>
            <td className="cell cell-filled"></td>
            <td className="cell"></td>
            <td className="cell"></td>
            <td className="cell cell-filled"></td>
          </tr>
          <tr>
            <td className="cell cell-header">Fricative</td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "ɸ",
                "β"
              )}
            </td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "f",
                "v"
              )}
            </td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "θ",
                "ð"
              )}
            </td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "s",
                "z"
              )}
            </td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "ʃ",
                "ʒ"
              )}
            </td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "ʂ",
                "ʐ"
              )}
            </td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "ç",
                "ʝ"
              )}
            </td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "x",
                "\u0263"
              )}
            </td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "χ",
                "ʁ"
              )}
            </td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "ħ",
                "ʕ"
              )}
            </td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "h",
                "ɦ"
              )}
            </td>
          </tr>
          <tr>
            <td className="cell cell-header">Lateral fricative</td>
            <td className="cell cell-filled"></td>
            <td className="cell cell-filled"></td>
            <td className="cell" colSpan="3">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "ɬ",
                "ɮ"
              )}
            </td>
            <td className="cell"></td>
            <td className="cell"></td>
            <td className="cell"></td>
            <td className="cell"></td>
            <td className="cell cell-filled"></td>
            <td className="cell cell-filled"></td>
          </tr>
          <tr>
            <td className="cell cell-header">Approximant</td>
            <td className="cell"></td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "\u028b"
              )}
            </td>
            <td className="cell" colSpan="3">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "ɹ"
              )}
            </td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "ɻ"
              )}
            </td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "j"
              )}
            </td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "ɰ"
              )}
            </td>
            <td className="cell"></td>
            <td className="cell"></td>
            <td className="cell cell-filled"></td>
          </tr>
          <tr>
            <td className="cell cell-header">Lateral approximant</td>
            <td className="cell cell-filled"></td>
            <td className="cell cell-filled"></td>
            <td className="cell" colSpan="3">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "l"
              )}
            </td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "ɭ"
              )}
            </td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "ʎ"
              )}
            </td>
            <td className="cell">
              {soundsDistribution(
                sortingSounds(consonants, consonantList),
                "ʟ"
              )}
            </td>
            <td className="cell"></td>
            <td className="cell cell-filled"></td>
            <td className="cell cell-filled"></td>
          </tr>
        </tbody>
      </table>
      <div className="wrapper-other-cons">
        <table className="tb tb-non-pulmonic">
          <caption className="table-title">Non-Pulmonic consonants</caption>
          <thead>
            <tr>
              <th className="cell cell-header">Clicks</th>
              <th className="cell cell-header">Voices implosives</th>
              <th className="cell cell-header">Ejectives</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td className="cell-large">{soundsDistribution(sortingSounds(consonants, consonantList), "ʘ")?
            soundsDistribution(sortingSounds(consonants, consonantList), "ʘ") + "Bilabial" : null}</td>
            <td className="cell-large">{soundsDistribution(sortingSounds(consonants, consonantList), "ɓ")?
            soundsDistribution(sortingSounds(consonants, consonantList), "ɓ") + "Bilabial" : null}</td>
            <td className="cell-large"></td>
          </tr>
          <tr>
            <td className="cell-large">{soundsDistribution(sortingSounds(consonants, consonantList), "\u01c0")?
            soundsDistribution(sortingSounds(consonants, consonantList), "\u01c0") + "Dental" : null}</td>
            <td className="cell-large">{soundsDistribution(sortingSounds(consonants, consonantList), "ɗ")?
            soundsDistribution(sortingSounds(consonants, consonantList), "ɗ") + "Dental/alveolar" : null}</td>
            <td className="cell-large"></td>
          </tr>
          <tr>
            <td className="cell-large">{soundsDistribution(sortingSounds(consonants, consonantList), "\u01c3")?
            soundsDistribution(sortingSounds(consonants, consonantList), "\u01c3") + "(Post)alveolar" : null}</td>
            <td className="cell-large">{soundsDistribution(sortingSounds(consonants, consonantList), "ʄ")?
            soundsDistribution(sortingSounds(consonants, consonantList), "ʄ") + "Palatal" : null}</td>
            <td className="cell-large"></td>
          </tr>
          <tr>
            <td className="cell-large">{soundsDistribution(sortingSounds(consonants, consonantList), "ǂ")?
            soundsDistribution(sortingSounds(consonants, consonantList), "ǂ") + "Palatoalveolar" : null}</td>
            <td className="cell-large">{soundsDistribution(sortingSounds(consonants, consonantList), "ɠ")?
            soundsDistribution(sortingSounds(consonants, consonantList), "ɠ") + "Velar": null}</td>
            <td className="cell-large"></td>
          </tr>
          <tr>
            <td className="cell-large">{soundsDistribution(sortingSounds(consonants, consonantList), "ǁ")?
            soundsDistribution(sortingSounds(consonants, consonantList), "ǁ") + " Alveolar lateral" : null}</td>
            <td className="cell-large">{soundsDistribution(sortingSounds(consonants, consonantList), "ʛ")?
            soundsDistribution(sortingSounds(consonants, consonantList), "ʛ") + "Uvular": null}</td>
            <td className="cell-large"></td>
          </tr>
        </tbody>
        </table>
      </div>
      <div className="wrapper-other-cons">
        <table className="tb">
          <caption className="table-title">Affricates</caption>
          <tbody>
            <tr>
              <td className="cell-large">
                {soundsDistribution(
                  sortingSounds(consonants, consonantList),
                  "ʦ"
                )
                  ? soundsDistribution(
                      sortingSounds(consonants, consonantList),
                      "ʦ"
                    ) + "Voiceless alveolar affricate"
                  : null}
              </td>
            </tr>
            <tr>
              <td className="cell-large">
                {soundsDistribution(
                  sortingSounds(consonants, consonantList),
                  "ʧ"
                )
                  ? soundsDistribution(
                      sortingSounds(consonants, consonantList),
                      "ʧ"
                    ) + "Voiceless palato-aleolar affricate"
                  : null}
              </td>
            </tr>
            <tr>
              <td className="cell-large">
                {soundsDistribution(
                  sortingSounds(consonants, consonantList),
                  "ʨ"
                )
                  ? soundsDistribution(
                      sortingSounds(consonants, consonantList),
                      "ʨ"
                    ) + "Voiceless alveolo-palatal affricate"
                  : null}
              </td>
            </tr>
            <tr>
              <td className="cell-large">
                {soundsDistribution(
                  sortingSounds(consonants, consonantList),
                  "ʣ"
                )
                  ? soundsDistribution(
                      sortingSounds(consonants, consonantList),
                      "ʣ"
                    ) + "Voiced alveolar affricate"
                  : null}
              </td>
            </tr>
            <tr>
              <td className="cell-large">
                {soundsDistribution(
                  sortingSounds(consonants, consonantList),
                  "ʤ"
                )
                  ? soundsDistribution(
                      sortingSounds(consonants, consonantList),
                      "ʤ"
                    ) + "Voiced palato-aleolar affricate"
                  : null}
              </td>
            </tr>
            <tr>
              <td className="cell-large">
                {soundsDistribution(
                  sortingSounds(consonants, consonantList),
                  "ʥ"
                )
                  ? soundsDistribution(
                      sortingSounds(consonants, consonantList),
                      "ʥ"
                    ) + "Voiced alveolo-palatal affricate"
                  : null}
              </td>
            </tr>
          </tbody>
        </table>
        <table className="tb">
          <caption className="table-title">Other symbols</caption>
          <tbody>
            <tr>
              <td className="cell-large">
                {soundsDistribution(
                  sortingSounds(consonants, consonantList),
                  "ʍ"
                )
                  ? soundsDistribution(
                      sortingSounds(consonants, consonantList),
                      "ʍ"
                    ) + "Voiceless labial-velar fricative"
                  : null}
              </td>
            </tr>
            <tr>
              <td className="cell-large">
                {soundsDistribution(
                  sortingSounds(consonants, consonantList),
                  "w"
                )
                  ? soundsDistribution(
                      sortingSounds(consonants, consonantList),
                      "w"
                    ) + "Voiced labial-velar approximant"
                  : null}
              </td>
            </tr>
            <tr>
              <td className="cell-large">
                {soundsDistribution(
                  sortingSounds(consonants, consonantList),
                  "ɥ"
                )
                  ? soundsDistribution(
                      sortingSounds(consonants, consonantList),
                      "ɥ"
                    ) + "Voiced labial-palatal approximant"
                  : null}
              </td>
            </tr>
            <tr>
              <td className="cell-large">
                {soundsDistribution(
                  sortingSounds(consonants, consonantList),
                  "ʜ"
                )
                  ? soundsDistribution(
                      sortingSounds(consonants, consonantList),
                      "ʜ"
                    ) + "Voiceless epiglottal fricative"
                  : null}
              </td>
            </tr>
            <tr>
              <td className="cell-large">
                {soundsDistribution(
                  sortingSounds(consonants, consonantList),
                  "ʢ"
                )
                  ? soundsDistribution(
                      sortingSounds(consonants, consonantList),
                      "ʢ"
                    ) + "Voiced epiglottal fricative"
                  : null}
              </td>
            </tr>
            <tr>
              <td className="cell-large">
                {soundsDistribution(
                  sortingSounds(consonants, consonantList),
                  "ʡ"
                )
                  ? soundsDistribution(
                      sortingSounds(consonants, consonantList),
                      "ʡ"
                    ) + "Epiglottal plosive"
                  : null}
              </td>
            </tr>
            <tr>
              <td className="cell-large">
                {soundsDistribution(
                  sortingSounds(consonants, consonantList),
                  "ɕ"
                )
                  ? soundsDistribution(
                      sortingSounds(consonants, consonantList),
                      "ɕ"
                    ) + "Voiceless alveolo-palatal fricative"
                  : null}
              </td>
            </tr>
            <tr>
              <td className="cell-large">
                {soundsDistribution(
                  sortingSounds(consonants, consonantList),
                  "ʑ"
                )
                  ? soundsDistribution(
                      sortingSounds(consonants, consonantList),
                      "ʑ"
                    ) + "Voiced alveolo-palatal fricative"
                  : null}
              </td>
            </tr>
            <tr>
              <td className="cell-large">
                {soundsDistribution(
                  sortingSounds(consonants, consonantList),
                  "ɺ"
                )
                  ? soundsDistribution(
                      sortingSounds(consonants, consonantList),
                      "ɺ"
                    ) + "Alveolar latral flap"
                  : null}
              </td>
            </tr>
            <tr>
              <td className="cell-large">
                {soundsDistribution(
                  sortingSounds(consonants, consonantList),
                  "ɧ"
                )
                  ? soundsDistribution(
                      sortingSounds(consonants, consonantList),
                      "ɧ"
                    ) + "Voiceless fricative/approximant"
                  : null}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConsonantChart;
