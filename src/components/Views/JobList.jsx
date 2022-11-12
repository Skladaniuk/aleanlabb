import { Link } from 'react-router-dom';
import scss from './JobList.module.scss';
import { AiFillStar } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';
import { CiBookmark } from 'react-icons/ci';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { Loader } from '../Loader/Loader';
import { Pagination } from '../Pagination/pagination';
import { useState, useEffect } from 'react';
import { fetchJobList } from '../../fetchApi/fetchApi';

export const JobList = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(5);

  const lastJobIndex = currentPage * jobsPerPage;
  const firstJobIndex = lastJobIndex - jobsPerPage;
  const currentJobs = allJobs.slice(firstJobIndex, lastJobIndex);

  useEffect(() => {
    setLoading(true);
    fetchJobList().then(joblist => setAllJobs(joblist));
    setLoading(false);
  }, []);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage(prev => prev + 1);
  };
  const prevPage = () => {
    setCurrentPage(prev => prev - 1);
  };
  return (
    <>
      {!currentJobs && <Loader />}
      {currentJobs && (
        <div className={scss.container}>
          <ul>
            {currentJobs.map(job => (
              <li className={scss.job} key={job.id}>
                <div className={scss.job__wrapper}>
                  <div className={scss.job__photo}></div>
                  <div className={scss.job__description}>
                    <div className={scss.job__header}>
                      <div className={scss.job__starWrapper}>
                        <AiFillStar className={scss.job__iconStar} />
                        <AiFillStar className={scss.job__iconStar} />
                        <AiFillStar className={scss.job__iconStar} />
                        <AiFillStar className={scss.job__iconStar} />
                        <AiFillStar className={scss.job__iconStar} />
                      </div>
                      <CiBookmark className={scss.job__iconSave} />
                      <p className={scss.job__time}>Posted 2 days ago</p>
                    </div>
                    <Link to={{ pathname: `${job.id}` }} state={{ job: job }}>
                      <p className={scss.job__title}>{job.title}</p>
                    </Link>
                    <p className={scss.job__department}>
                      Departament name • {job.name}
                    </p>
                    <div className={scss.job__location}>
                      <ImLocation className={scss.job__iconLocation} />
                      <p className={scss.job__address}>{job.address}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className={scss.paginationWrapper}>
            <Pagination
              currentPage={currentPage}
              jobsPerPage={jobsPerPage}
              totalJobs={allJobs.length}
              paginate={paginate}
            />
            <button
              className={scss.prevButton}
              type="button"
              onClick={prevPage}
            >
              {' '}
              <IoIosArrowBack className={scss.iconArrowLeft} />
            </button>
            <button
              className={scss.nextButton}
              type="button"
              onClick={nextPage}
            >
              {' '}
              <IoIosArrowForward className={scss.iconArrowRigth} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
