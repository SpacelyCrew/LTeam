import styled from 'styled-components';

export const BreadcrumbsRoot = styled.nav`
  display: flex;
  align-items: center;

  font-size: 14px;
  line-height: 20px;

  letter-spacing: 0.25px;

  color: #000103;
`;

export const BreadcrumbsList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  padding: 0;
  margin: 0;

  list-style: none;
`;

export const BreadcrumbsSeparator = styled.li`
  display: flex;
  user-select: none;
  margin-left: 4px;
  margin-right: 4px;
`;

export const BreadcrumbsItem = styled.li``;
