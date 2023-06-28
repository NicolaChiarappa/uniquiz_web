import Image from "next/image";

import VStack from "../../app/Layout/VStack";
import HStack from "../../app/Layout/HStack";
import add_Domanda from "../../app/api/firestore";
import Button from "../../app/Bricks/Button";
import React, { useState } from "react";

const Home = () => {
  const [esame, setEsame] = useState("diritto_privato");
  const [argomento, setArgomento] = useState("contratti");
  const [testoD, setTestod] = useState("");
  const [primaR, setPrimar] = useState("");
  const [secondaR, setSecondar] = useState("");
  const [terzaR, setTerzar] = useState("");
  const [quartaR, setQuartar] = useState("");
  const [obj, setObj] = useState({});

  const clickFunc = () => {
    setTimeout(
      () =>
        setObj({
          "testo": testoD,
          "risposte": [
            {
              "testo": primaR,
              "corretta": true,
            },
            {
              "testo": secondaR,
              "corretta": false,
            },
            {
              "testo": terzaR,
              "corretta": false,
            },
            {
              "testo": quartaR,
              "corretta": false,
            },
          ],
        }),
      1500
    );

    console.log(obj);
    //add_Domanda(esame, argomento, obj);
  };
  return (
    <>
      <HStack style='w-screen justify-between'>
        <VStack style='items-start m-8'>
          <VStack style='items-center'>
            <h2 className='mt-10'>seleziona esame</h2>
            <select
              name=''
              id=''
              className='bg-red-300  m-3 rounded-xl'
              onChange={(e) => setEsame(e.target.value)}
            >
              <option value='diritto_privato'>diritto privato</option>
            </select>
            <h2 className='mt-10'>seleziona argomento</h2>
            <select
              name=''
              id=''
              className='bg-red-300  m-3 rounded-xl'
              onChange={(e) => setArgomento(e.target.value)}
            >
              <option value='contratti'>contratti</option>
            </select>
          </VStack>
        </VStack>
        <VStack style='m-16 justify-between'>
          <h2>inserisci testo domanda</h2>
          <textarea
            onChange={(e) => setTestod(e.target.value)}
            placeholder='testo domanda'
            id='testod'
            cols='30'
            rows='10'
            className='border-black border-2'
          ></textarea>
          <Button style='bg-slate-400 p-4' onClick={() => clickFunc()}>
            Inserisci
          </Button>
        </VStack>
        <VStack style='mt-16'>
          <h2>Inserisci le risposte la prima è sempre quella corretta</h2>
          <Risposta
            pos='1'
            func={(arg) => {
              setPrimar(arg);
            }}
          ></Risposta>
          <Risposta
            pos='2'
            func={(arg) => {
              setSecondar(arg);
            }}
          ></Risposta>
          <Risposta
            pos='3'
            func={(arg) => {
              setTerzar(arg);
            }}
          ></Risposta>
          <Risposta
            pos='4'
            func={(arg) => {
              setQuartar(arg);
            }}
          ></Risposta>
        </VStack>
      </HStack>
    </>
  );
};

const Risposta = ({ pos, func }) => {
  return (
    <HStack style='mr-16'>
      <textarea
        onChange={(e) => func(e.target.value)}
        name=''
        id={"testor" + pos}
        cols='30'
        rows='3'
        className='border-black border-2 mb-5'
      ></textarea>
    </HStack>
  );
};

export default Home;
