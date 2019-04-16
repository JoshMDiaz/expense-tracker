import React, { useEffect, useState } from 'react'
import { IonCard, IonCardTitle } from '@ionic/react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

const urlBase = 'expense-tracker/api/v1/expenses';

const Home = () => {

  const [years, setYears] = useState([]);

  useEffect(() => {
    getYears()
  }, [])

  const getYears = () => {
    axios.get(urlBase).then(response => {
      let arr = response.data.data;
      getUniqueYears(arr);
    });
  }

  const getUniqueYears = (arr) => {
    let unique = arr.map(a => {
      return moment(a.year).format('YYYY')
    })
    unique = [...new Set(unique.map(u => {
      return u
    }))]
    setYears(unique);
  }

  return (
    <div className="home-page">
      {years.map((e, i) => (
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