import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getVertexAI, provideVertexAI } from '@angular/fire/vertexai-preview';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideFirebaseApp(() =>
      initializeApp(environment.firebaseConfig)
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"mash-birth-19d92","appId":"1:952764045116:web:399c71634a881de13e7039","storageBucket":"mash-birth-19d92.appspot.com","apiKey":"AIzaSyBBOdlsUF9_MHm8OFJcFQ1voDGI0IION-w","authDomain":"mash-birth-19d92.firebaseapp.com","messagingSenderId":"952764045116","measurementId":"G-R0Z0TEGSVH"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"mash-birth-19d92","appId":"1:952764045116:web:399c71634a881de13e7039","storageBucket":"mash-birth-19d92.appspot.com","apiKey":"AIzaSyBBOdlsUF9_MHm8OFJcFQ1voDGI0IION-w","authDomain":"mash-birth-19d92.firebaseapp.com","messagingSenderId":"952764045116","measurementId":"G-R0Z0TEGSVH"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideStorage(() => getStorage()), provideVertexAI(() => getVertexAI()),
  ],
};
