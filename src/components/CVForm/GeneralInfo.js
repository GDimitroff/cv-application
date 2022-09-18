import { useState } from 'react';
import { useCV, useCVDispatch } from '../../contexts/CVContext';

import SectionHeader from './SectionHeader';
import SectionWrapper from '../UI/SectionWrapper';
import InputFieldsWrapper from '../UI/InputFieldsWrapper';
import InputRow from '../UI/InputRow';
import Input from '../UI/Input';
import TextArea from '../UI/TextArea';

const GeneralInfo = () => {
  const [isShown, setIsShown] = useState(true);
  const { generalInfo } = useCV();
  const dispatch = useCVDispatch();

  function handleOnChange(e) {
    const { name, value } = e.target;

    dispatch({
      type: 'CHANGE_GENERAL_INFO',
      name,
      value,
    });
  }

  const handleToggleSection = () => {
    setIsShown((prevIsShown) => !prevIsShown);
  };

  return (
    <div>
      <SectionHeader
        text="Personal Information"
        onToggleSection={handleToggleSection}
        isShown={isShown}
      />
      {isShown && (
        <SectionWrapper>
          <InputFieldsWrapper>
            <InputRow>
              <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={generalInfo.firstName}
                onChange={(e) => handleOnChange(e)}
                maxLength="15"
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={generalInfo.lastName}
                onChange={(e) => handleOnChange(e)}
                maxLength="15"
              />
            </InputRow>
            <Input
              type="text"
              name="title"
              placeholder="Title"
              value={generalInfo.title}
              onChange={(e) => handleOnChange(e)}
              maxLength="50"
            />
            <InputRow>
              <Input
                type="tel"
                name="phoneNumber"
                placeholder="Phone number"
                value={generalInfo.phoneNumber}
                onChange={(e) => handleOnChange(e)}
                maxLength="20"
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={generalInfo.email}
                onChange={(e) => handleOnChange(e)}
                maxLength="25"
              />
            </InputRow>
            <Input
              type="text"
              name="address"
              placeholder="Address"
              value={generalInfo.address}
              onChange={(e) => handleOnChange(e)}
              maxLength="40"
            />
            <InputRow>
              <Input
                type="text"
                name="linkedIn"
                placeholder="LinkedIn"
                value={generalInfo.linkedIn}
                onChange={(e) => handleOnChange(e)}
                maxLength="40"
              />
              <Input
                type="text"
                name="facebook"
                placeholder="Facebook"
                value={generalInfo.facebook}
                onChange={(e) => handleOnChange(e)}
                maxLength="40"
              />
            </InputRow>
            <TextArea
              name="description"
              placeholder="Description"
              value={generalInfo.description}
              onChange={(e) => handleOnChange(e)}
              maxLength="600"
            />
          </InputFieldsWrapper>
        </SectionWrapper>
      )}
    </div>
  );
};

export default GeneralInfo;
