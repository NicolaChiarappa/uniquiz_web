import db from "../../firebase/index";
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

async function add_Domanda(esame, argomento, obj) {
  var docRef = doc(db, "esami", esame, "argomenti", argomento);

  await updateDoc(docRef, {
    domande: arrayUnion(obj),
  });
}

export default add_Domanda;
