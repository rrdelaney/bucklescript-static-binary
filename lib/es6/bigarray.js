'use strict';

import * as Caml_array              from "./caml_array.js";
import * as Caml_missing_polyfill   from "./caml_missing_polyfill.js";
import * as Caml_builtin_exceptions from "./caml_builtin_exceptions.js";

function dims() {
  var n = Caml_missing_polyfill.not_implemented("caml_ba_num_dims not implemented by bucklescript yet\n");
  var d = Caml_array.caml_make_vect(n, 0);
  for(var i = 0 ,i_finish = n - 1 | 0; i <= i_finish; ++i){
    Caml_array.caml_array_set(d, i, Caml_missing_polyfill.not_implemented("caml_ba_dim not implemented by bucklescript yet\n"));
  }
  return d;
}

function map_file(_, $staropt$star, _$1, _$2, _$3, _$4) {
  $staropt$star ? $staropt$star[0] : /* int64 */[
      /* hi */0,
      /* lo */0
    ];
  return Caml_missing_polyfill.not_implemented("caml_ba_map_file_bytecode not implemented by bucklescript yet\n");
}

var Genarray = /* module */[
  /* dims */dims,
  /* map_file */map_file
];

function create(_, _$1, _$2) {
  return Caml_missing_polyfill.not_implemented("caml_ba_create not implemented by bucklescript yet\n");
}

function of_array(kind, layout, data) {
  var ba = create(kind, layout, data.length);
  layout !== 0 ? 1 : 0;
  for(var i = 0 ,i_finish = data.length - 1 | 0; i <= i_finish; ++i){
    Caml_missing_polyfill.not_implemented("caml_ba_set_1 not implemented by bucklescript yet\n");
  }
  return ba;
}

function map_file$1(fd, pos, kind, layout, shared, dim) {
  return map_file(fd, pos, kind, layout, shared, /* int array */[dim]);
}

var Array1 = /* module */[
  /* create */create,
  /* of_array */of_array,
  /* map_file */map_file$1
];

function create$1(_, _$1, _$2, _$3) {
  return Caml_missing_polyfill.not_implemented("caml_ba_create not implemented by bucklescript yet\n");
}

function slice_left(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ba_slice not implemented by bucklescript yet\n");
}

function slice_right(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ba_slice not implemented by bucklescript yet\n");
}

function of_array$1(kind, layout, data) {
  var dim1 = data.length;
  var dim2 = dim1 ? Caml_array.caml_array_get(data, 0).length : 0;
  var ba = create$1(kind, layout, dim1, dim2);
  layout !== 0 ? 1 : 0;
  for(var i = 0 ,i_finish = dim1 - 1 | 0; i <= i_finish; ++i){
    var row = Caml_array.caml_array_get(data, i);
    if (row.length !== dim2) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "Bigarray.Array2.of_array: non-rectangular data"
          ];
    }
    for(var j = 0 ,j_finish = dim2 - 1 | 0; j <= j_finish; ++j){
      Caml_missing_polyfill.not_implemented("caml_ba_set_2 not implemented by bucklescript yet\n");
    }
  }
  return ba;
}

function map_file$2(fd, pos, kind, layout, shared, dim1, dim2) {
  return map_file(fd, pos, kind, layout, shared, /* int array */[
              dim1,
              dim2
            ]);
}

var Array2 = /* module */[
  /* create */create$1,
  /* slice_left */slice_left,
  /* slice_right */slice_right,
  /* of_array */of_array$1,
  /* map_file */map_file$2
];

function create$2(_, _$1, _$2, _$3, _$4) {
  return Caml_missing_polyfill.not_implemented("caml_ba_create not implemented by bucklescript yet\n");
}

function slice_left_1(_, _$1, _$2) {
  return Caml_missing_polyfill.not_implemented("caml_ba_slice not implemented by bucklescript yet\n");
}

function slice_right_1(_, _$1, _$2) {
  return Caml_missing_polyfill.not_implemented("caml_ba_slice not implemented by bucklescript yet\n");
}

function slice_left_2(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ba_slice not implemented by bucklescript yet\n");
}

function slice_right_2(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ba_slice not implemented by bucklescript yet\n");
}

function of_array$2(kind, layout, data) {
  var dim1 = data.length;
  var dim2 = dim1 ? Caml_array.caml_array_get(data, 0).length : 0;
  var dim3 = dim2 ? Caml_array.caml_array_get(Caml_array.caml_array_get(data, 0), 0).length : 0;
  var ba = create$2(kind, layout, dim1, dim2, dim3);
  layout !== 0 ? 1 : 0;
  for(var i = 0 ,i_finish = dim1 - 1 | 0; i <= i_finish; ++i){
    var row = Caml_array.caml_array_get(data, i);
    if (row.length !== dim2) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "Bigarray.Array3.of_array: non-cubic data"
          ];
    }
    for(var j = 0 ,j_finish = dim2 - 1 | 0; j <= j_finish; ++j){
      var col = Caml_array.caml_array_get(row, j);
      if (col.length !== dim3) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "Bigarray.Array3.of_array: non-cubic data"
            ];
      }
      for(var k = 0 ,k_finish = dim3 - 1 | 0; k <= k_finish; ++k){
        Caml_missing_polyfill.not_implemented("caml_ba_set_3 not implemented by bucklescript yet\n");
      }
    }
  }
  return ba;
}

function map_file$3(fd, pos, kind, layout, shared, dim1, dim2, dim3) {
  return map_file(fd, pos, kind, layout, shared, /* int array */[
              dim1,
              dim2,
              dim3
            ]);
}

var Array3 = /* module */[
  /* create */create$2,
  /* slice_left_1 */slice_left_1,
  /* slice_right_1 */slice_right_1,
  /* slice_left_2 */slice_left_2,
  /* slice_right_2 */slice_right_2,
  /* of_array */of_array$2,
  /* map_file */map_file$3
];

function array1_of_genarray(a) {
  if (Caml_missing_polyfill.not_implemented("caml_ba_num_dims not implemented by bucklescript yet\n") === 1) {
    return a;
  } else {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Bigarray.array1_of_genarray"
        ];
  }
}

function array2_of_genarray(a) {
  if (Caml_missing_polyfill.not_implemented("caml_ba_num_dims not implemented by bucklescript yet\n") === 2) {
    return a;
  } else {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Bigarray.array2_of_genarray"
        ];
  }
}

function array3_of_genarray(a) {
  if (Caml_missing_polyfill.not_implemented("caml_ba_num_dims not implemented by bucklescript yet\n") === 3) {
    return a;
  } else {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Bigarray.array3_of_genarray"
        ];
  }
}

function reshape_1(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ba_reshape not implemented by bucklescript yet\n");
}

function reshape_2(_, _$1, _$2) {
  return Caml_missing_polyfill.not_implemented("caml_ba_reshape not implemented by bucklescript yet\n");
}

function reshape_3(_, _$1, _$2, _$3) {
  return Caml_missing_polyfill.not_implemented("caml_ba_reshape not implemented by bucklescript yet\n");
}

var float32 = /* Float32 */0;

var float64 = /* Float64 */1;

var complex32 = /* Complex32 */10;

var complex64 = /* Complex64 */11;

var int8_signed = /* Int8_signed */2;

var int8_unsigned = /* Int8_unsigned */3;

var int16_signed = /* Int16_signed */4;

var int16_unsigned = /* Int16_unsigned */5;

var $$int = /* Int */8;

var int32 = /* Int32 */6;

var int64 = /* Int64 */7;

var nativeint = /* Nativeint */9;

var $$char = /* Char */12;

var c_layout = /* C_layout */0;

var fortran_layout = /* Fortran_layout */1;

function reshape(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ba_reshape not implemented by bucklescript yet\n");
}

export {
  float32            ,
  float64            ,
  complex32          ,
  complex64          ,
  int8_signed        ,
  int8_unsigned      ,
  int16_signed       ,
  int16_unsigned     ,
  $$int              ,
  int32              ,
  int64              ,
  nativeint          ,
  $$char             ,
  c_layout           ,
  fortran_layout     ,
  Genarray           ,
  Array1             ,
  Array2             ,
  Array3             ,
  array1_of_genarray ,
  array2_of_genarray ,
  array3_of_genarray ,
  reshape            ,
  reshape_1          ,
  reshape_2          ,
  reshape_3          ,
  
}
/*  Not a pure module */
