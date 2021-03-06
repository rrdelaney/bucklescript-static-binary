'use strict';

import * as Caml_obj    from "./caml_obj.js";
import * as Caml_format from "./caml_format.js";

function succ(n) {
  return n + 1;
}

function pred(n) {
  return n - 1;
}

function abs(n) {
  if (n >= 0) {
    return n;
  } else {
    return -n;
  }
}

var min_int = -9007199254740991;

var max_int = 9007199254740991;

function lognot(n) {
  return n ^ -1;
}

function to_string(n) {
  return Caml_format.caml_nativeint_format("%d", n);
}

var compare = Caml_obj.caml_nativeint_compare;

var zero = 0;

var one = 1;

var minus_one = -1;

var size = 54;

export {
  zero      ,
  one       ,
  minus_one ,
  succ      ,
  pred      ,
  abs       ,
  size      ,
  max_int   ,
  min_int   ,
  lognot    ,
  to_string ,
  compare   ,
  
}
/* No side effect */
