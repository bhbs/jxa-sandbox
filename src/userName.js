#!/usr/bin/osascript -l JavaScript
/** @type {import('@jxa/global-type/core')} */

const userName = Application("System Events").currentUser().name();
console.log(userName);
