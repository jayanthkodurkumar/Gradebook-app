import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { SafeAreaView, Text, View } from "react-native";
import {
  collection,
  doc,
  getDoc,
  addDoc,
  setDoc,
  getDocs,
} from "firebase/firestore";
import Gradebook from "./Gradebook";

export const FirebaseFetcher = () => {
  const students = [
    {
      id: 1,
      name: "Bill Gates",
      thumbnail:
        "https://media.cnn.com/api/v1/images/stellar/prod/230906121347-bill-gates-file-061223.jpg?c=16x9&q=h_720,w_1280,c_fill",
      grade: 90,
      absences: 1,
      bonusPoints: 10,
    },
    {
      id: 2,
      name: "Warren Bufffet",
      thumbnail:
        "https://s.yimg.com/ny/api/res/1.2/7DQvNIeGj0kNaHaH9w_JaA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTI4NA--/https://media.zenfs.com/en/moneywise_327/e25d234f4fc3198ad8a84ea017b3e24a",
      grade: 80,
      absences: 2,
      bonusPoints: 20,
    },
    {
      id: 3,
      name: "Steve Jobs",
      thumbnail:
        "https://hips.hearstapps.com/hmg-prod/images/apple-ceo-steve-jobs-speaks-during-an-apple-special-event-news-photo-1683661736.jpg?crop=0.800xw:0.563xh;0.0657xw,0.0147xh&resize=1200:*",
      grade: 60,
      absences: 8,
      bonusPoints: 0,
    },
    {
      id: 4,
      name: "Sundar Pichai",
      thumbnail:
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/150B8/production/_110000268_fe81a048b.jpg",
      grade: 100,
      absences: 0,
      bonusPoints: 10,
    },
    {
      id: 5,
      name: "Satya Nadella",
      thumbnail:
        "https://www.gsb.stanford.edu/sites/default/files/styles/1630x_variable/public/vftt-satya-1630.jpg.webp?itok=6vp79uKU",
      grade: 100,
      absences: 0,
      bonusPoints: 1,
    },
    {
      id: 6,
      name: "Elon Musk",
      thumbnail:
        "https://images.newscientist.com/wp-content/uploads/2022/10/13151703/sei129088618.jpg",
      grade: 90,
      absences: 0,
      bonusPoints: 5,
    },
    {
      id: 7,
      name: "Abdul Kalam",
      thumbnail:
        "https://ca-times.brightspotcdn.com/dims4/default/877278a/2147483647/strip/true/crop/2048x1453+0+0/resize/1200x851!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F15%2Fc9%2F6437363e191bb39897fbfae6e15c%2Fla-me-abdul-kalam-dies-20150727-001",
      grade: 100,
      absences: 0,
      bonusPoints: 5,
    },
    {
      id: 8,
      name: "Jayanth",
      thumbnail: "https://avatars.githubusercontent.com/u/83784924?v=4",

      grade: 100,
      absences: 0,
      bonusPoints: 100,
    },
  ];

  useEffect(() => {
    const addData = async () => {
      const docRef = collection(db, "students");

      for (const student of students) {
        const docid = student.id.toString();
        const studentRef = doc(docRef, docid);
        const studentExists = await getDoc(studentRef);

        if (!studentExists.exists()) {
          await setDoc(studentRef, student);
        }
      }
    };

    addData();

    return () => {};
  }, []);

  const [studentsdata, setStudentsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const studentsRef = collection(db, "students");

      const snapshot = await getDocs(studentsRef);
      const data = [];
      snapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setStudentsData(data);
      return data;
    };
    fetchData();
    return () => {};
  }, [studentsdata]);

  return (
    <SafeAreaView>
      <Gradebook student={studentsdata} />
    </SafeAreaView>
  );
};
