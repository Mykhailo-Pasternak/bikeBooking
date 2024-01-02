import React from 'react';
import { StyledHeader } from './header.styled';

const LOGO_URL = 'ADMIN.BIKE-BOOKING.COM';

const Header: React.FC = () => {

    return (
        <StyledHeader>
            {LOGO_URL}
        </StyledHeader>
    );
};

export default Header;
