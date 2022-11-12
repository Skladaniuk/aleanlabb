import scss from './pagination.module.scss';
import { NavLink } from 'react-router-dom';
export const Pagination = ({
  jobsPerPage,
  totalJobs,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className={scss.pagination}>
        {pageNumbers.map(number => (
          <li className={scss.number} key={number}>
            <NavLink
              className={currentPage === number ? scss.activeLink : scss.link}
              onClick={() => paginate(number)}
            >
              {number}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
