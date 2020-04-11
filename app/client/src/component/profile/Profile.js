import React from 'react';
import { useSelector } from 'react-redux';
import CoverPhoto from './components/coverPhoto';
import { sampleProfile } from '../../data/sampleData';
import style from './Profile.sass';

const Profile = () => {
  const theme = useSelector(state => state.theme);
  return (
    <>
      <CoverPhoto color1={theme.color1} color2={theme.color2} />

      {/* profile overview component */}
      <div className={style.profileOverview}>

        {/* profile image component */}
        <div className={style.profileImageSection}>
          <div className={style.profileImageOuter}>
            {
              sampleProfile.profilePhotoUrl && (
                <img
                  src={sampleProfile.profilePhotoUrl}
                  alt="Profile Picture"
                />
              )
            }
          </div>
        </div>

        {/* name component */}
        <h1>
          {sampleProfile.firstName}
          &nbsp;
          {sampleProfile.lastName}
        </h1>

        {/* info component */}
        {
          sampleProfile.occupation && (
            <p>
              {sampleProfile.occupation}
            </p>
          )
        }

        {/* info component */}
        {
          sampleProfile.city && (
            <p>
              {sampleProfile.city}{sampleProfile.state && `, ${sampleProfile.state}`}
            </p>
          )
        }

        {/* info component */}
        {
          sampleProfile.aboutMe && (
            <p>
              <br /><br />{sampleProfile.aboutMe}
            </p>
          )
        }

        {/* education component */}
        {
          sampleProfile.education && sampleProfile.education.length > 0 && (
            <>
            <h6 className={style.education}>
              EDUCATION
            </h6>
            {
              sampleProfile.education.map(e => (
                <React.Fragment key={e.name}>
                  <p className={style.educationName}>
                    {e.name}
                  </p>
                  <p className={style.educationTime}>
                    {e.startMonth}, {e.startYear} - {e.endMonth}, {e.endYear}
                  </p>
                </React.Fragment>
              ))
            }
            </>
          )
        }

      </div>

      {/* photos component */}
      <div className={style.photos}>
        <div className={style.photosInner}>
          {
            sampleProfile.photos.map((item, index) => (
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
    </>
  );
};

export default Profile;
