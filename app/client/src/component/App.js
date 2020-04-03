import React from 'react';
import { sampleProfileData } from '../data/sampleProfileData';
import style from './App.sass';

const App = () => (
  <div className={style.container}>

    <nav>
      <div className={style.spacerSmall}>
        <h4>Profile</h4>
      </div>
    </nav>

    <div className={style.profileOverview}>
      <div className={style.profileImageOuter}>
        <img
          src={sampleProfileData.profilePhotoURL}
          alt="Profile Picture"
        />
      </div>

      <h1>
        {sampleProfileData.firstName}
        &nbsp;
        {sampleProfileData.lastName}
      </h1>

    </div>
  </div>
);

export default App;
