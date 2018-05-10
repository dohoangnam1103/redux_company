import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default styled(NavLink)`
  color: rgba(0, 0, 0, 0.3);
  display: inline-block;
  padding-top: .425rem;
  padding-bottom: .425rem;
  touch-action: manipulation;
  margin-right: 10px;
  float: right;
  text-decoration: none;

  &:hover {
    color: rgba(0, 0, 0, 0.6);
  }
`;
