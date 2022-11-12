import { useState } from 'react';
import {  useLocation, Link} from 'react-router-dom';
import { nanoid } from 'nanoid';
import { Home } from '../GoogleMap/googleMap';
import scss from './JobInfo.module.scss';
import { AiOutlineStar } from 'react-icons/ai';
import { BsFillShareFill } from 'react-icons/bs';
import { GoPrimitiveSquare } from 'react-icons/go';
import { JobsSlider } from '../Slider/slider';
import { ImLocation } from 'react-icons/im';
import { CiBookmark } from 'react-icons/ci';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import {Loader} from '../Loader/Loader'



export const JobInfo = () => {
  const location = useLocation();
  const [pathBack] = useState(location.state?.from ?? '/');

  const currentJob = location?.state?.job;
  
  return (
    <>
    {!currentJob && <Loader/>}
      {currentJob && (
        <div className={scss.container}>
          <div className={scss.details}>
            <header className={scss.header}>
              <p className={scss.header__title}>Job Details</p>
              <div className={scss.header__nav}>
                <div className={scss.header__saveWrapper}>
                  <AiOutlineStar className={scss.header__iconStar} />
                  <CiBookmark className={scss.header__iconSave} />
                  <p className={scss.header__save}>Save to my list</p>
                </div>
                <div className={scss.header__shareWrapper}>
                  <BsFillShareFill className={scss.header__iconShare} />
                  <p className={scss.header__share}>Share</p>
                </div>
              </div>
            </header>
            <section className={scss.hero}>
              <div>
                <button type="button" className={scss.hero__buttonApply}>
                  APPLY NOW
                </button>
                <h1 className={scss.hero__title}>{currentJob.title}</h1>
                <div className={scss.hero__salaryWrapper}>
                  <p className={scss.hero__posted}>Posted 2 days ago</p>
                  <div className={scss.hero__wrapper}>
                    <p className={scss.hero__brutto}>Brutto, per year</p>
                    <p className={scss.hero__salary}>€ {currentJob.salary} </p>
                  </div>
                </div>
              </div>
              <p className={scss.hero__description}>{currentJob.description}</p>
              <h2 className={scss.hero__responsopilities}>
                Responsopilities
              </h2>
              <p className={scss.hero__resDescription}>
                {currentJob.description}
              </p>
              <h2 className={scss.hero__benefits}>Compensation & Benefits:</h2>
              <p className={scss.hero__benefitText}>
                Our physicans enjoy a wide range of benefits, including:
              </p>
              <ul>
                {currentJob.benefits.map(benefit => (
                  <li className={scss.hero__benefit} key={nanoid()}>
                    <GoPrimitiveSquare className={scss.hero__iconSquare} />
                    <p>{benefit}</p>
                  </li>
                ))}
              </ul>
              <div className={scss.hero__buttonWrapper}>
                <button className={scss.hero__button} type="button">
                  APPLY NOW
                </button>
              </div>
            </section>
            <section className={scss.attachedImg}>
              <h2>Attached images</h2>
              <div className={scss.slider}>
                <JobsSlider  jobs={currentJob} />
              </div>
             <Link  to={pathBack}>
                <button className={scss.buttonReturn} type="button">
                  <MdKeyboardArrowLeft
                    className={scss.buttonReturn__arrowIcon}
                  />
                  <p>RETURN TO JOB BOARD</p>
                </button>
                </Link>
            </section>
            <section className={scss.addInfo}>
              <h2>Additional info</h2>
              <h3>Employment type</h3>
              <ul className={scss.employmentButtons}>
                {currentJob.employment_type.map(item => (
                  <li key={nanoid()}>
                    <div>
                      <button className={scss.emloymentButton} type="button">
                        {item}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <h3>Benefits</h3>
              <ul className={scss.benefitsButtons}>
                {currentJob.benefits.map(benefit => (
                  <li key={nanoid()}>
                    <button className={scss.benefitButton} type="button">
                      {benefit}
                    </button>
                  </li>
                ))}
              </ul>
            </section>
            <section className={scss.contacts}>
              <h2>Contacts</h2>
              <div className={scss.contacts__wrapper}>
                <div className={scss.contacts__info}>
                  <p className={scss.contacts__title}> {currentJob.title}</p>
                  <div className={scss.contacts__wrapperr}>
                    <ImLocation className={scss.contacts__icon} />
                    <p className={scss.contacts__address}>
                      {currentJob.address}
                    </p>
                  </div>
                  <p className={scss.contacts__phone}>
                    {currentJob.phone} <br /> {currentJob.email}
                  </p>
                </div>
                <div className={scss.contacts__map}>
                  <Home location={currentJob.location} />
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};
