// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ffi from 'ffi';
import ref from 'ref';
import Struct from 'ref-struct';
import routes from '../constants/routes.json';
import styles from './Home.css';

type Props = {};

// @NOTE: Examples taken from https://github.com/node-ffi/node-ffi/wiki/Node-FFI-Tutorial

const libm = ffi.Library('libm', {
  ceil: ['double', ['double']]
});
libm.ceil(1.5); // 2

// You can also access just functions in the current process by passing a null
const current = ffi.Library(null, {
  atoi: ['int', ['string']]
});

// http://www.cplusplus.com/reference/cstdlib/atoi/
const atoi = current.atoi('1234'); // 1234

// typedef
const sqlite3 = ref.types.void; // we don't know what the layout of "sqlite3" looks like
const sqlite3Ptr = ref.refType(sqlite3);
const sqlite3PtrPtr = ref.refType(sqlite3Ptr);
const stringPtr = ref.refType(ref.types.CString);

// binding to a few "libsqlite3" functions...
const libsqlite3 = ffi.Library('libsqlite3', {
  sqlite3_open: ['int', ['string', sqlite3PtrPtr]],
  sqlite3_close: ['int', [sqlite3Ptr]],
  sqlite3_exec: [
    'int',
    [sqlite3Ptr, 'string', 'pointer', 'pointer', stringPtr]
  ],
  sqlite3_changes: ['int', [sqlite3Ptr]]
});

// now use them:
const dbPtrPtr = ref.alloc(sqlite3PtrPtr);
libsqlite3.sqlite3_open('test.sqlite3', dbPtrPtr);
dbPtrPtr.deref();

const TimeVal = Struct({
  tv_sec: 'long',
  tv_usec: 'long'
});
const TimeValPtr = ref.refType(TimeVal);

const lib = new ffi.Library(null, {
  gettimeofday: ['int', [TimeValPtr, 'pointer']]
});
const tv = new TimeVal();
lib.gettimeofday(tv.ref(), null);

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <h3>atoi from c++: {atoi}</h3>
        <h3>Seconds since epoch: {tv.tv_sec}</h3>
        <Link to={routes.COUNTER}>to Counter</Link>
      </div>
    );
  }
}
