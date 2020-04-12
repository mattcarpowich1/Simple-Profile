import React from 'react';
import { useSelector } from 'react-redux';
import CoverPhoto from './components/coverPhoto';
import style from './Profile.sass';

const Profile = () => {
  const user = useSelector(state => state.user);
  return (
    <>
      <CoverPhoto color1={user.theme.color1} color2={user.theme.color2} />

      {/* profile overview component */}
      <div className={style.profileOverview}>

        {/* profile image component */}
        <div className={style.profileImageSection}>
          <div className={style.profileImageOuter}>
            {
              user.profilePhotoUrl && (
                <img
                  src={user.profilePhotoUrl}
                  alt="Profile Picture"
                />
              )
            }
          </div>
        </div>

        {/* name component */}
        <h1>
          {user.firstName}
          &nbsp;
          {user.lastName}
        </h1>

        {/* info component */}
        {
          user.occupation && (
            <p>
              {user.occupation}
            </p>
          )
        }

        {/* info component */}
        {
          user.city && (
            <p>
              {user.city}{user.state && `, ${user.state}`}
            </p>
          )
        }

        {/* info component */}
        {
          user.aboutMe && (
            <p>
              <br /><br />{user.aboutMe}
            </p>
          )
        }

        {/* education component */}
        {
          user.education && user.education.length > 0 && (
            <>
            <h6 className={style.education}>
              EDUCATION
            </h6>
            {
              user.education.map(e => (
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
            user.photos.map((item, index) => (
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
