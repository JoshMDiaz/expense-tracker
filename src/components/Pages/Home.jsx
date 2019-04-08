import React, { useEffect, useState } from 'react'
import { IonCard, IonCardTitle } from '@ionic/react'
import { Link } from 'react-router-dom'

const Home = () => {

  let data = [
    2017,
    2018,
    2019
  ]

  const [years, setYears] = useState([]);

  useEffect(() => {
    getYears()
  }, [])

  const getYears = () => {
    setYears(data)
  }

  return (
    <div className="home-page">
      { years.map((e, i) => (
        <Link to={`/expenses/${e}`} key={i}>
          <IonCard padding margin>
            <IonCardTitle>{e}</IonCardTitle>
          </IonCard>
        </Link>
      ))}
    </div>
  );
}
 
export default Home