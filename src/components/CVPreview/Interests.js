import { useCV } from '../../contexts/CVContext';

import Icon from '../UI/Icon';
import classes from './Interests.module.css';

const Interests = () => {
  const { interests } = useCV();

  const interestsList = interests.map((i) => {
    return (
      <div className={classes.interest} key={i}>
        <Icon iconName={i} className="dark" link={false} />
        <p className={classes.title}>{i}</p>
      </div>
    );
  });

  return (
    <div>
      <h2>Interests</h2>
      <div className={classes.interests}>{interestsList}</div>
    </div>
  );
};

export default Interests;
