import React from 'react';
import { StyledFooter } from './footer.styled';

const AUTHOR = 'Mykhailo Pasternak';

const Footer: React.FC = () => {

    return (
        <StyledFooter>
            Developer: <span>{AUTHOR}</span>
        </StyledFooter>
    );
};

export default Footer;
