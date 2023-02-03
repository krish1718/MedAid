import React, { useEffect, useState } from "react";
import axios from "axios";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useSpeechSynthesis } from "react-speech-kit";

export default function VoiceAssistant({
  // UserContext,
  username,
}) {
  //Date
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  //Time
  var time =
    current.getHours() + " hours and " + current.getMinutes() + " minutes";

  // Weather
  // const [latitude, setlatitude] = useState();
  // const [longitude, setlongitude] = useState(139);

  // useEffect(() => {
  //   async function getData() {
  //     if (latitude) {
  //       const res = await axios.get(
  //         `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0ebf0e29926cc939f557a936228e1129`
  //       );

  //       settemperature(Math.floor(res.data.main.temp) - 273); //floor used for rounding
  //       setfeelslike(Math.floor(res.data.main.feels_like) - 273); //floor used for rounding
  //       // setarea(res.data.name);
  //       // setaboutsky(res.data.weather[0].main);
  //     }
  //   }

  //   getData();
  // }, [latitude, longitude]);

  const [temperature, settemperature] = useState("-");
  const [feelslike, setfeelslike] = useState("-");
  // const [aboutsky, setaboutsky] = useState("-");
  // const [area, setarea] = useState("area");

  // if ("geolocation" in navigator) {
  //   navigator.geolocation.getCurrentPosition(setPosition);
  // } else {
  //   alert("Error, location access denied");
  // }

  // function setPosition(position) {
  //   let latitude = position.coords.latitude;
  //   let longitude = position.coords.longitude;
  //   getWeather(latitude, longitude);
  // }

  // function getWeather(latitude, longitude) {
  //   setlatitude(latitude);
  //   setlongitude(longitude);
  // }

  //
  // Voice Recognition Assistant

  const { speak, voices } = useSpeechSynthesis();
  const { listening } = useSpeechRecognition();
  const voice = voices[6];
  const commands = [
    {
      command: ["Hi", "Hey", "Hey there", "Hello"],
      callback: () => speak({ text: "Hey there, how may I help you", voice }),
    },
    {
      command: [
        "weather",
        "weather *",
        "* weather",
        "* weather*",
        "temperature *",
        "temperature",
        "* temperature",
        "* temperature*",
      ],
      callback: () =>
        speak({
          text:
            "Current temperature is" +
            temperature +
            "degree celsius, feels like" +
            feelslike,
          voice,
        }),
    },
    {
      command: ["What can you do"],
      callback: () => speak({ text: "Hmmm, seems a good question", voice }),
    },
    {
      command: ["Who made you", "How were you born"],
      callback: () => speak({ text: "I was given birth by my god", voice }),
    },
    {
      command: ["* today's date", "today's date"],
      callback: () => speak({ text: date, voice }),
    },
    {
      command: [
        "* today's time",
        "today's time",
        "current time",
        "* current time",
      ],
      callback: () => speak({ text: "It is" + time, voice }),
    },
    {
      command: ["Good morning", "Good morning *", "* good morning"],
      callback: () =>
        speak({ text: "Good morning" + username, voice }),
    },
    {
      command: "Good afternoon",
      callback: () => speak({ text: "Good afternoon", voice }),
    },
    {
      command: "Good evening",
      callback: () => speak({ text: "Good evening, nice to meet you", voice }),
    },
    {
      command: ["nice to meet you", "* nice to meet you"],
      callback: () =>
        speak({ text: "Nice to meet you too, so kind of you", voice }),
    },
    {
      command: "Good night",
      callback: () =>
        speak({
          text: "Good night, I hope the happiest dreams are coming to you",
          voice,
        }),
    },
    {
      command: "Scroll to top",
      callback: () => {
        speak({ text: "Ok", voice });
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      },
    },
  ];

  const { transcript } = useSpeechRecognition({ commands });

  return (
    <div>
      <div className="fixed border-2 rounded-full bottom-20 right-10 z-30 text-black">
        <p id="transcript"> {transcript}</p>
        {!listening && (
          <button
            className="justify-center mx-auto mt-1 flex bg-white p-2 rounded-full"
            onClick={SpeechRecognition.startListening}
          >
            <img
              className="w-8 rounded-full -ml-1 -my-1"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb7OFSh4MZtidf3ki7lfSLiVjkQ4_12QTMfWVXGmJDfl0cIixPrTsS_vrOdZ1S8yJe2Sw&usqp=CAU"
              alt=""
            />
            {/* <div className="ml- text-black font-semibold my-auto">Alexa</div> */}
            {/* Start Listening */}
          </button>
        )}
        {/* {listening && <div>Go ahead I'm listening</div>} */}
        {listening && (
          <button
            className="bg-gray-800 rounded-lg p-2"
            onClick={() => {
              SpeechRecognition.abortListening();
              SpeechRecognition.stopListening();
            }}
          >
            Stop
          </button>
        )}
      </div>
    </div>
  );
}
