import React from 'react';
import { sampleProfileData } from '../data/sampleProfileData';
import style from './App.sass';

const App = () => (
  <div className={style.container}>

    {/* nav component */}
    <nav>
      <div className={style.navInner}>
        <img src="./images/eye.svg" atl="Eye Logo" />
        <h4>iPeek</h4>
      </div>
    </nav>

    {/* profile page */}

    {/* cover photo component */}
    <div className={style.coverPhoto} />


    {/* profile overview component */}
    <div className={style.profileOverview}>


      {/* profile image component */}
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

      {/* name component */}
      <h1>
        {sampleProfileData.firstName}
        &nbsp;
        {sampleProfileData.lastName}
      </h1>

      {/* info component */}
      {
        sampleProfileData.occupation && (
          <p>
            {sampleProfileData.occupation}
          </p>
        )
      }

      {/* info component */}
      {
        sampleProfileData.city && (
          <p>
            {sampleProfileData.city}{sampleProfileData.state && `, ${sampleProfileData.state}`}
          </p>
        )
      }

      {/* info component */}
      {
        sampleProfileData.aboutMe && (
          <p>
            <br /><br />{sampleProfileData.aboutMe}
          </p>
        )
      }

    </div>

    {/* photos component */}
    <div className={style.photos}>
      <div className={style.photosInner}>
        {
          sampleProfileData.photos.map((item, index) => (
            // photo component
            <div className={style.photoOuter} key={`${index}_${item.src}`}>
              <img src={item.src} alt="Photo" />
              {
                item.caption && <p className={style.caption}>{item.caption}</p>
              }
            </div>
          ))
        }
      </div>
    </div>
  </div>
);

export default App;
