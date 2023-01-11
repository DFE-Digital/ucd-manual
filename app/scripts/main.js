/* eslint-disable no-new */
// DfE frontend components
import MenuToggle from 'dfeuk-frontend/packages/components/header/menuToggle';
import SearchToggle from 'dfeuk-frontend/packages/components/header/searchToggle';
import SkipLink from 'dfeuk-frontend/packages/components/skip-link/skip-link';
import Details from 'dfeuk-frontend/packages/components/details/details';
import Checkboxes from 'dfeuk-frontend/packages/components/checkboxes/checkboxes';
import Radios from 'dfeuk-frontend/packages/components/radios/radios';
import Card from 'dfeuk-frontend/packages/components/card/card';

import AutoComplete from './autocomplete/autoCompleteConfig';

// DfE frontend polyfills
import 'dfeuk-frontend/packages/polyfills';

// DfE digital service manual components
import DesignExample from './design-example';
import {
  inputValue,
  onConfirm,
  source,
  suggestion,
} from './search';


AutoComplete({
  containerId: 'autocomplete-container',
  formId: 'search',
  inputId: 'search-field',
  onConfirm,
  source,
  templates: {
    inputValue,
    suggestion,
  },
});
MenuToggle();
SearchToggle();
Details();
SkipLink();
Checkboxes();
Radios();
Card();


// Design examples
document.querySelectorAll(DesignExample.selector()).forEach((el) => {
  new DesignExample(el);
});



  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-D2V3LRNYBJ');