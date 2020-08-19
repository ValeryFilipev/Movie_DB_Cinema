import React from 'react';
import { propOr } from 'ramda';
import Autosuggestion, {
  ChangeEvent,
  GetSuggestionValue,
  InputProps,
  OnSuggestionsClearRequested,
  RenderSuggestion,
  SuggestionsFetchRequested
} from 'react-autosuggest';

import { searchMovies } from "../../api/movies";
import { Movie } from "../Movies/types";
import "../../styles/autosuggest.css";
