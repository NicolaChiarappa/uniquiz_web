import db from "../../firebase/index";
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

export async function add_Domanda(esame, argomento, obj) {
  var docRef = doc(db, "esami", esame, "argomenti", argomento);

  await updateDoc(docRef, {
    domande: arrayUnion(obj),
  });
}

export async function get_Data(esame, argomento) {
  var docRef = doc(db, "esami", esame, "argomenti", argomento);
  var docSnap = await getDoc(docRef);

  return docSnap.data()["domande"];
}
