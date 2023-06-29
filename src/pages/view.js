import HStack from "@/app/Layout/HStack";
import VStack from "@/app/Layout/VStack";

import { Container } from "postcss";
import { useState } from "react";
import { get_Data } from "@/app/api/firestore";

const Viewer = () => {
  const [isLoaded, setisLoaded] = useState(false);
  const [domande, setDomande] = useState([]);
  get_Data("diritto_privato", "contratti").then((res) => {
    setDomande(res);

    setisLoaded(true);
  });

  return (
    <VStack style='w-full bg-purple-700 h-screen'>
      {isLoaded ? (
        domande.map((e) => {
          return (
            <Accordion
              key={e.testo}
              testod={e.testo}
              risposte={e.risposte}
            ></Accordion>
          );
        })
      ) : (
        <h1>Hola</h1>
      )}
    </VStack>
  );
};

const Accordion = ({ testod, risposte }) => {
  const [isVisible, setisVisible] = useState(false);

  return (
    <VStack style='border-2 border-black rounded-2xl  mt-3 w-1/2'>
      <HStack style='w-full justify-between bg-white rounded-2xl pl-3 pr-3 pt-2 pb-2'>
        <h1>{testod}</h1>
        <button
          onClick={() => {
            setisVisible(!isVisible);
          }}
        >
          {isVisible ? "chiudi" : "apri"}
        </button>
      </HStack>
      <VStack style={isVisible ? "visible mt-3 p-6" : "  hidden"}>
        <VStack>
          <VStack style='justify-between '>
            {risposte.map((e) => {
              return (
                <div
                  className='border-2 border-black mt-4 text-white'
                  key={e.testo}
                >
                  <p className='text-2xl'>{e.testo}</p>
                </div>
              );
            })}
          </VStack>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Viewer;
