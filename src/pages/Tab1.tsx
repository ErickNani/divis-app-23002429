import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonText,
} from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [quetzales, setQuetzales] = useState<number | null>(null);
  const [resultado, setResultado] = useState<number | null>(null);

  const convertir = () => {
    if (quetzales !== null) {
      const tasaCambio = 8; // 8 quetzales por dólar
      setResultado(quetzales / tasaCambio);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>DivisApp 23002429</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="page-container">
          <h2>Conversor de Divisas</h2>
          <IonInput
            type="number"
            placeholder="Ingrese cantidad en quetzales"
            value={quetzales ?? ''}
            onIonChange={(e) => setQuetzales(parseFloat(e.detail.value!) || null)}
            className="ion-input"
          />
          <IonButton expand="block" onClick={convertir} className="ion-button">
            Convertir
          </IonButton>
          {resultado !== null && (
            <IonText className="result-text">
              Equivalente en dólares: ${resultado.toFixed(2)}
            </IonText>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
