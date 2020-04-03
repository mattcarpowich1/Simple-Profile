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

    <div className={style.coverPhoto}>
      {
        sampleProfileData.coverPhotoUrl && (
          <img
            src={sampleProfileData.coverPhotoUrl}
            alt="Cover Photo"
          />
        )
      }
    </div>

    <div className={style.profileOverview}>
      <div className={style.profileImageSection}>
        <div className={style.profileImageOuter}>
          {
            sampleProfileData.profilePhotoUrl && (
              <img
                src={sampleProfileData.profilePhotoUrl}
                alt="Profile Picture"
              />
            )
          }
        </div>
      </div>

      <h1>
        {sampleProfileData.firstName}
        &nbsp;
        {sampleProfileData.lastName}
      </h1>

      {
        sampleProfileData.occupation && (
          <p>
            {sampleProfileData.occupation}
          </p>
        )
      }

      {
        sampleProfileData.city && (
          <p>
            {sampleProfileData.city}{sampleProfileData.state && `, ${sampleProfileData.state}`}
          </p>
        )
      }

    </div>
  </div>
);

export default App;
