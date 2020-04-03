import React from 'react';
import { sampleProfileData } from '../data/sampleProfileData';
import style from './App.sass';

const App = () => (
  <div className={style.container}>

    <nav>
      <div className={style.navInner}>
        <img src="./images/eye.svg" atl="Eye Logo" />
        <h4>iPeek</h4>
      </div>
    </nav>

    <div className={style.coverPhoto} />

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

      {
        sampleProfileData.aboutMe && (
          <p>
            <br /><br />{sampleProfileData.aboutMe}
          </p>
        )
      }

    </div>
  </div>
);

export default App;
