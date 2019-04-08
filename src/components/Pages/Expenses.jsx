import React, { useState, useEffect } from "react"
import {
  IonItem,
  IonList,
  IonListHeader
} from "@ionic/react"

const Expenses = () => {

  let data = [
    {
      id: 1,
      name: 'Basement work',
      value: 19098.37
    },
    {
      id: 2,
      name: 'Laminate floor',
      value: 2020.32
    },
  ]

  const [expenses, setExpenses] = useState([]);
  const [year, setYear] = useState('');

  useEffect(() => {
    getExpenses();
    setYear(getYear());
  }, [])
  
  const getYear = () => {
    let path = window.location.pathname,
        year = path.split('/')[2];
    return year;
  }

  const getExpenses = () => {
    setExpenses(data);
  }

  return (
    <div className="expenses-page animated fadeInUp">
    <IonList>
      <IonListHeader>{year} Expenses</IonListHeader>
      { expenses.map((e, i) => (
        <IonItem key={i}>
          <span>{e.name}</span>
          <strong>{e.value}</strong>
        </IonItem>
      ))}
    </IonList>
    </div>
  );
}

export default Expenses
