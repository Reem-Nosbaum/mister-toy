// import { useEffect, useState } from "react";
// import { Auth } from "../components/auth";
// import { db } from "../config/firebase";
// import { getDocs, collection } from "firebase/firestore";

function Login() {
  // const [popList, setPopList] = useState([]);

  // const popCollectionRef = collection(db, "products");

  // useEffect(() => {
  //   const getPopList = async () => {
  //     try {
  //       const data = await getDocs(popCollectionRef);
  //       const filterData = data.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //       }));
  //       setPopList(filterData);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   getPopList();
  // }, []);

  return (
    <div className="login">
      {/* <Auth />
      <div>
        {popList.map((pop) => (
          <div key={pop.id}>
            <h1>{pop.category}</h1>
            <p>{pop.price}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Login;
