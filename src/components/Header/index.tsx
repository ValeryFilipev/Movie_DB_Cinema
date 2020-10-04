import React, { useEffect, useRef } from 'react';
import FocusLock from 'react-focus-lock';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Box from '../ui/Layout/Box';
import {
  getBreakpoint,
  getColor,
  getFontSize,
  getSpace
} from '../../helpers/theme';
import Menu from '../../containers/Menu';
