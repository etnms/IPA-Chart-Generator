import { useEffect, useState } from "react";
import "./VowelChart.scss";
import vowelList from "../Data/vowels.json";
import img from "../Img/vowel_chart_empty.png";

const VowelChart = ({ vowels, sortingSounds, soundsDistribution }) => {
  const [vowelPosition, setVowelPosition] = useState([]);

  useEffect(() => {
    const vowelContainer = document.querySelector(".vowel");

    const hideEmptySpot = () => {
      const element = document.querySelectorAll(".vowel-display");
      // Toggle the class empty depending on content (hides letters that are not there)
      element.forEach((el) => {
        if (!el.textContent) el.classList.add("empty");

        // If there's text then allow drag and drop
        if (el.textContent) {
          el.classList.remove("empty"); // Allows the element to be displayed

          let mousePosition;
          let offset = [0, 0];
          let isDown = false;

          const styleElement = getComputedStyle(el); // Getting the base position of the element for reset
          const baseLeft = parseInt(styleElement.left) * 100 / vowelContainer.offsetWidth + "%";
          const baseTop = parseInt(styleElement.top) * 100 / vowelContainer.offsetHeight + "%";
          console.log(baseLeft);
          setVowelPosition((vowel) => [
            ...vowel,
            { left: baseLeft, top: baseTop, text: el.textContent },
          ]);
          el.addEventListener(
            "mousedown",
            function (e) {
              isDown = true;
              offset = [el.offsetLeft - e.clientX, el.offsetTop - e.clientY];
            },
            true
          );

          document.addEventListener(
            "mouseup",
            function () {
              isDown = false;

              // Checking if element has been dragged by checking if value exists
              if (el.style.left !== "") {
                console.log(parseInt(el.style.left))
                // Checking if the element is outside the box, if so resets its position
                if (
                  parseInt(el.style.left) <= 0 ||
                  parseInt(el.style.top) <= 0 ||
                  parseInt(el.style.left) >= 100 ||
                  parseInt(el.style.top) >= 100
                ) {
                  el.style.left = baseLeft;
                  el.style.top = baseTop;
                }
              }
            },
            true
          );

          document.addEventListener(
            "mousemove",
            function (event) {
              event.preventDefault();
              if (isDown) {
                mousePosition = {
                  x: event.clientX,
                  y: event.clientY,
                };
                // Getting position as a percentage for responsive design
                el.style.left = (mousePosition.x + offset[0]) * 100 / vowelContainer.offsetWidth + "%"; 
                el.style.top = (mousePosition.y + offset[1]) * 100 / vowelContainer.offsetHeight + "%";
              }
            },
            true
          );
          el.addEventListener(
            "mousedown",
            function (e) {
              isDown = true;
              offset = [el.offsetLeft - e.clientX, el.offsetTop - e.clientY];
            },
            true
          );
        }
      });
    };
    hideEmptySpot();
  }, [vowels]);

  const resetVowelPositions = () => {
    // console.log("hello")
    const element = document.querySelectorAll(".vowel-display");
    // Toggle the class empty depending on content (hides letters that are not there)
    element.forEach((el) => {
      if (el.textContent) {
        vowelPosition.forEach((letter) => {
          if (el.textContent === letter.text) {
            el.style.left = letter.left;
            el.style.top = letter.top;
          }
        });
      }
    });
  };
  return (
    <div className="wrapper-vowel-chart">
      <h1 className="title-sm">Vowel diagram</h1>
      <p className="note-vowel">Note: You can drag and drop the vowels to fit the needs of your language.</p>
      <div className="vowel">
        <span className="vowel-display close-front">
          {soundsDistribution(sortingSounds(vowels, vowelList), "i", "y")}
        </span>
        <span className="vowel-display close-mid">
          {soundsDistribution(sortingSounds(vowels, vowelList), "ɨ", "ʉ")}
        </span>
        <span className="vowel-display close-back">
          {soundsDistribution(sortingSounds(vowels, vowelList), "\u026f", "u")}
        </span>
        <span className="vowel-display close-front-near">
          {soundsDistribution(
            sortingSounds(vowels, vowelList),
            "\u026a",
            "\u028f"
          )}
        </span>
        <span className="vowel-display close-back-near">
          {soundsDistribution(sortingSounds(vowels, vowelList), "ʊ")}
        </span>
        <span className="vowel-display close-mid-front">
          {soundsDistribution(sortingSounds(vowels, vowelList), "e", "ø")}
        </span>
        <span className="vowel-display close-mid-center">
          {soundsDistribution(sortingSounds(vowels, vowelList), "ɘ", "ɵ")}
        </span>
        <span className="vowel-display close-mid-back">
          {soundsDistribution(sortingSounds(vowels, vowelList), "ɤ", "o")}
        </span>
        <span className="vowel-display close-mid-near">
          {soundsDistribution(sortingSounds(vowels, vowelList), "ə")}
        </span>
        <span className="vowel-display open-mid-front">
          {soundsDistribution(sortingSounds(vowels, vowelList), "ɛ", "œ")}
        </span>
        <span className="vowel-display open-mid-mid">
          {soundsDistribution(sortingSounds(vowels, vowelList), "ɜ", "ɞ")}
        </span>
        <span className="vowel-display open-mid-back">
          {soundsDistribution(sortingSounds(vowels, vowelList), "ʌ", "ɔ")}
        </span>
        <span className="vowel-display open-front-near">
          {soundsDistribution(sortingSounds(vowels, vowelList), "æ")}
        </span>
        <span className="vowel-display open-mid-near">
          {soundsDistribution(sortingSounds(vowels, vowelList), "ɐ")}
        </span>
        <span className="vowel-display open-front">
          {soundsDistribution(sortingSounds(vowels, vowelList), "a", "ɶ")}
        </span>
        <span className="vowel-display open-back">
          {soundsDistribution(sortingSounds(vowels, vowelList), "\u0251", "ɒ")}
        </span>
        <img src={img} alt="ipa-vowel-chart"></img>
      </div>

        <button
          className="btn btn-tertiary"
          onClick={() => resetVowelPositions()}>
          Reset vowel positions
        </button>
 
    </div>
  );
};

export default VowelChart;


/*
      <div className="wrapper-drag">
        <span className="note">
          Note: You can drag and drop the vowels to adjust their positions!
        </span>
        <button
          className="btn btn-tertiary"
          onClick={() => resetVowelPositions()}>
          Reset vowel positions
        </button>
      </div>
      */